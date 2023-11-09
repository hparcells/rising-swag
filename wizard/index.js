const inquirer = require('inquirer');
const ncp = require('copy-paste');
const { executablePath } = require('puppeteer'); 
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const chalk = require('chalk');

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
    if(link.includes('etsy.com')) {
      data = await page.evaluate(() => {
        let image = document.querySelector(".carousel-image").src;
        let name = document.querySelector('h1').innerText;
        let shopName = document.querySelector(".wt-text-link-no-underline").innerText;
        let shopUrl = `https://www.etsy.com/shop/${shopName}`

        return {
          image,
          name,
          shop: {
            name: shopName,
            url: shopUrl
          }
        };
      });
    }

    // Copy result.
    ncp.copy(`,${JSON.stringify({
      date: new Date().toISOString().split('T')[0],
      image: data.image,
      name: data.name,
      tags: answers.tags ? answers.tags.split(' ') : [],
      shop: data.shop,
      description: 'FILL',
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
