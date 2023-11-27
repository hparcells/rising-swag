const inquirer = require('inquirer');
const ncp = require('copy-paste');
const { executablePath } = require('puppeteer'); 
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const OpenAI = require('openai');
const chalk = require('chalk');

require('dotenv').config();

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

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: null,
    executablePath: executablePath()
  });
  const page = await browser.newPage();

  async function prompt() {
    const urlAnswer = await inquirer.prompt({
      type: 'input',
      name: 'url',
      message: 'URL'
    });
    let link = urlAnswer.url;
  
    if(!link) {
      console.log(chalk.red('\nPlease enter a URL.'));
      return prompt();
    }
  
    // Link processing.
    if(link.includes('etsy.com')) {
      link = link.match(/(http.*\/)/)[0];
    }

    const answers = await inquirer.prompt(QUESTIONS);
    
    // Scraping
    await page.goto(link);

    let data;
    let name;
    if(link.includes('etsy.com')) {
      data = await page.evaluate(() => {
        let image = document.querySelector(".carousel-image").src;
        let name = document.querySelector('h1').innerText;
        let shopName = document.querySelector(".wt-text-link-no-underline").innerText;
        let shopUrl = `https://www.etsy.com/shop/${shopName}`

        return {
          image,
          shop: {
            name: shopName,
            url: shopUrl
          }
        };
      });

      const aiResponse = await openai.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: `"${data.name}" is an name of an item on Etsy. Create a shorter title of it while trying to be shorter than 70 characters. Do not include quotes around the title. Do not mention Red Rising or Pierce Brown in the title. The end title should describe a single item. Remove any "tags". Capitalize any words that should be capitalized in the title. The part you should keep is usually at the beginning. If the title is good enough, do not change it.`
          }
        ],
        model: 'gpt-3.5-turbo',
      });
      name = aiResponse.choices[0].message.content;
    }
    if(link.includes('howlerholo.net')) {
      data = await page.evaluate(() => {
        const image = document.querySelector(".wp-post-image").src;
        name = document.querySelector('.product_title').innerText;

        name = name.replace('’', '\'').trim();

        return {
          image,
          name,
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
      name: name || data.name,
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
