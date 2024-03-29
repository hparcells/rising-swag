const fetch = require('node-fetch');
const { Cluster } = require('puppeteer-cluster');
const inquirer = require('inquirer');

const etsyExpiredConditions = [
  'Sorry, this item is unavailable.',
  'This shop is taking a short break.',
  'Sorry, this item is sold out',
  'Sorry, the item listing you are looking for does not exist.',
  'Sorry, this item and shop are currently unavailable'
];

(async () => {
  let cluster;
  let results = [];

  const fetched = await fetch('http://localhost:8000/api/v1/data');
  const data = await fetched.json();

  async function prompt() {
    const answer = await inquirer.prompt({
      type: 'list',
      name: 'test',
      message: 'Test',
      choices: [
        "Item Expiry",
        "Image Status",
        "Page Status"
      ]
    });
  
    if(answer.test === 'Item Expiry') {  
      cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_PAGE,
        maxConcurrency: 8,
        puppeteerOptions: {
          headless: 'new'
        },
        monitor: true
      });

      const badItems = [];
  
      // Etsy Items
      const etsyItems = data.filter(item => {
        return item.shop.url.includes('etsy');
      });
  
      await cluster.task(async ({ page, data: url }) => {
        const etsyItem = etsyItems.find(item => item.link === url);
        
        await page.goto(url);
        const content = await page.content();
  
        // If the item is expired.
        if(etsyExpiredConditions.some(condition => content.includes(condition))) {
          if(!etsyItem.expired) {
            console.log(`✗ (Expired) ${url}`);
            badItems.push(etsyItem);
          }
          return;
        }
  
        // If the item is good but is marked as expired.
        if(etsyItem.expired) {
          console.log(`✗ (Not Expired) ${url}`);
          badItems.push(etsyItem);
        }
      });
  
      for(let i = 0; i < etsyItems.length; i++) {
        cluster.queue(etsyItems[i].link);
      }
    }

    if(answer.test === 'Image Status') {
      cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_PAGE,
        maxConcurrency: 24,
        puppeteerOptions: {
          headless: 'new'
        },
        monitor: true
      });

      await cluster.task(async ({ page, data: url }) => {
        const response = await page.goto(url);

        if(response.status() !== 200) {
          results.push(`✗ ${url} (${response.status()})`);
        }
      });

      for(let i = 0; i < data.length; i++) {
        cluster.queue(data[i].image);
      }
    }

    if(answer.test === 'Page Status') {
      cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_PAGE,
        maxConcurrency: 8,
        puppeteerOptions: {
          headless: 'new'
        },
        monitor: true
      });
  
      await cluster.task(async ({ page, data: url }) => {
        const response = await page.goto(url);
  
        if(response.status() !== 200) {
          results.push(`✗ ${url} (${response.status()})`);
        }
      });
  
      for(let i = 0; i < data.length; i++) {
        cluster.queue(data[i].link);
      }
    }

    await cluster.idle();
    for(let i = 0; i < results.length; i++) {
      console.log(results[i]);
    }

    await cluster.close();
    results = [];

    prompt();
  }

  prompt();
})();
