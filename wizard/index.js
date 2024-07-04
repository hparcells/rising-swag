const inquirer = require('inquirer');
const ncp = require('copy-paste');
const { executablePath } = require('puppeteer'); 
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const OpenAI = require('openai');
const chalk = require('chalk');
const randomUseragent = require('random-useragent');

require('dotenv').config();

const USER_AGENT = '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

puppeteer.use(StealthPlugin());

const QUESTIONS = [
  {
    type: 'input',
    name: 'tags',
    message: 'Tags (space separated)'
  },
  {
    type: 'list',
    name: 'expired',
    message: 'Expired?',
    choices: [
      "No",
      "Yes"
    ]
  }
];

async function launchPuppeteer(headless = 'new') {
  // Setup.
  const browser = await puppeteer.launch({
    headless,
    defaultViewport: null,
    executablePath: executablePath()
  });
  const page = await browser.newPage();
  
  // Random user agent.
  if(!headless) {
    const userAgent = randomUseragent.getRandom();
    await page.setUserAgent(userAgent);
  }

  // Randomize viewport.
  await page.setViewport({
    width: 1280 + Math.floor(Math.random() * 100),
    height: 720 + Math.floor(Math.random() * 100),
    deviceScaleFactor: 1,
    hasTouch: false,
    isLandscape: false,
    isMobile: false,
  });

  // Other bypass.
  await page.setJavaScriptEnabled(true);
  await page.setDefaultNavigationTimeout(0);

  // Skip styles and fonts loading for performance.
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    if(req.resourceType() == 'stylesheet' || req.resourceType() == 'font'){
      req.abort();
    } else if(headless === 'new' && req.resourceType() == 'image') {
      req.abort();
    }else {
      req.continue();
    }
  });

  // Pass WebDriver check.
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'webdriver', {
      get: () => false,
    });
  });

  // Pass Chrome check.
  await page.evaluateOnNewDocument(() => {
    window.chrome = {
      runtime: {}
    };
  });

  // Pass notifications check.
  await page.evaluateOnNewDocument(() => {
  const originalQuery = window.navigator.permissions.query;
  return window.navigator.permissions.query = (parameters) => (
    parameters.name === 'notifications'
      ? Promise.resolve({ state: Notification.permission })
      : originalQuery(parameters));
  });

  // Overwrite the plugins property to use a custom getter.
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'plugins', {
      get: () => [1, 2, 3, 4, 5],
    });
  });

  // Overwrite the languages property to use a custom getter.
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'languages', {
      get: () => ['en-US', 'en'],
    });
  });

  return browser;
}

async function getData(page) {
  return await page.evaluate(() => {
    const imageElement = document.querySelector(".carousel-image");
    const nameElement = document.querySelector('h1');
    const shopNameElement = document.querySelector(".wt-text-link-no-underline");

    if(!imageElement || !nameElement || !shopNameElement) {
      return;
    }
    
    const image = imageElement.src;
    const name = nameElement.innerText;
    const shopName = shopNameElement.innerText;

    let shopUrl = `https://www.etsy.com/shop/${shopName}`

    return {
      name,
      image,
      shop: {
        name: shopName,
        url: shopUrl
      }
    };
  });
}

(async () => {
  const browser = await launchPuppeteer();
  const page = await browser.newPage();

  async function prompt() {
    const urlAnswer = await inquirer.prompt({
      type: 'input',
      name: 'url',
      message: 'URL'
    });
    let link = urlAnswer.url;
  
    if(!link) {
      console.log(chalk.red('\nPlease enter a URL.\n'));
      return prompt();
    }
  
    // Link processing.
    if(link.includes('etsy.com')) {
      link = link.match(/(http.*\/)/)[0];
    }

    const answers = await inquirer.prompt(QUESTIONS);
    
    // Scraping
    await page.goto(link, {
      waitUntil: 'networkidle2',
      timeout: 0
    });

    page.waitForSelector('.carousel-image');

    let data;
    let finalName;
    if(link.includes('etsy.com')) {
      data = await getData(page);
      if(!data) {
        console.log(chalk.red('\Captcha detected.'));
        const browser2 = await launchPuppeteer(false);
        const page2 = await browser2.newPage();
        
        await page2.goto(link, {
          waitUntil: 'networkidle2',
          timeout: 0
        });
        await page2.waitForSelector('.carousel-image');
        data = await getData(page2);
        await browser2.close();
      }
      
      const aiResponse = await openai.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: `"${data.name}" is an name of an item on Etsy. Create a shorter title of it while trying to be shorter than 70 characters. Do not include quotes around the title. Do not mention Red Rising or Pierce Brown in the title. Remove any "tags". Capitalize any words that should be capitalized in the title. The part you should keep is usually at the beginning. Try to only use words included in the original title. If the title is good enough, do not change it.`          }
        ],
        model: 'gpt-3.5-turbo',
      });
      finalName = aiResponse.choices[0].message.content;
    }
    if(link.includes('howlerholo.net')) {
      data = await page.evaluate(() => {
        const image = document.querySelector(".wp-post-image").src;
        finalName = document.querySelector('.product_title').innerText;

        finalName = finalName.replace('’', '\'').trim();

        return {
          image,
          name: finalName,
          shop: {
            name: "The Howler's Den",
            url: 'https://howlerholo.net/'
          }
        };
      });
    }

    // Copy result.
    ncp.copy(`,${JSON.stringify({
      date: new Date().toISOString().split('T')[0],
      image: data.image,
      name: finalName || data.name,
      tags: answers.tags ? answers.tags.split(' ') : [],
      shop: data.shop,
      description: data.description || 'FILL',
      link,
      ...(answers.expired === 'Yes' ? { expired: true } : {})
    }).replace('"shop":{', '"shop":{\n')}`);
    console.log(chalk.green(`\n${chalk.bold('Result copied to clipboard.')} Paste in a data file.\n`));
  
    // Loop
    prompt();
  }
  
  // Start the loop.
  prompt();
})();
