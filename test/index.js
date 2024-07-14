const fetch = require('node-fetch');
const puppeteer = require('puppeteer-extra');
const { Cluster } = require('puppeteer-cluster');
const inquirer = require('inquirer');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');

puppeteer.use(StealthPlugin());
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));

const etsyExpiredConditions = [
  'Sorry, this item is unavailable.',
  'This shop is taking a short break.',
  'Sorry, this item is sold out',
  'Sorry, the item listing you are looking for does not exist.',
  'Sorry, this item and shop are currently unavailable'
];

(async () => {
  let cluster;

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
        puppeteer,
        concurrency: Cluster.CONCURRENCY_PAGE,
        maxConcurrency: 4,
        puppeteerOptions: {
          headless: false,
          executablePath: 'C:\\Program Files\\Google\\Chrome Beta\\Application\\chrome.exe',
          userDataDir: 'C:\\Users\\Hunter\\AppData\\Local\\Google\\Chrome Beta\\User Data'
        },
        monitor: true
      });

      // Etsy Items
      const etsyItems = data.filter(item => {
        return item.shop.url.includes('etsy');
      });

      await cluster.task(async ({ page, data: url }) => {
        // Skip styles and fonts loading for performance.
        await page.setRequestInterception(true);
        page.on('request', (req) => {
          if(req.resourceType() == 'stylesheet' || req.resourceType() == 'font' || req.resourceType() == 'image'){
            req.abort();
          } else {
            req.continue();
          }
        });

        const etsyItem = etsyItems.find(item => item.link === url);
        
        await page.goto(url);
        const content = await page.content();

        const containsCaptcha = content.includes('captcha-delivery');
        if(containsCaptcha) {
          console.log(`✗ Captcha detected!`);
          return;
        }
  
        // If the item is expired.
        if(etsyExpiredConditions.some(condition => content.includes(condition))) {
          if(!etsyItem.expired) {
            console.log(`✗ [${etsyItem.shop.name}] (Expired) ${url}`);
          }
          return;
        }
  
        // If the item is good but is marked as expired.
        if(etsyItem.expired) {
          console.log(`✗ [${etsyItem.shop.name}] (Not Expired) ${url}`);
        }
      });
  
      for(let i = 0; i < etsyItems.length; i++) {
        cluster.queue(etsyItems[i].link);
      }

      // const batchSize = 3;
      // for(let i = 0; i < etsyItems.length; i += batchSize) {
      //   const batch = etsyItems.slice(i, i + batchSize);
      //   for(let j = 0; j < batch.length; j++) {
      //     cluster.queue(batch[j].link);
      //   }
      //   await cluster.idle();
      //   await inquirer.prompt({
      //     type: 'list',
      //     name: 'continue',
      //     message: 'Batch limit reached. Solve a captcha and press enter to continue.',
      //     choices: [
      //       "Continue"
      //     ]
      //   });
      // }
    }

    if(answer.test === 'Image Status') {
      // FIXME:
      // cluster = await Cluster.launch({
      //   concurrency: Cluster.CONCURRENCY_PAGE,
      //   maxConcurrency: 24,
      //   puppeteerOptions: {
      //     headless: 'new'
      //   },
      //   monitor: true
      // });

      // await cluster.task(async ({ page, data: url }) => {
      //   const response = await page.goto(url);

      //   if(response.status() !== 200) {
      //     results.push(`✗ ${url} (${response.status()})`);
      //   }
      // });

      // for(let i = 0; i < data.length; i++) {
      //   cluster.queue(data[i].image);
      // }
    }

    if(answer.test === 'Page Status') {
      // FIXME:
      // cluster = await Cluster.launch({
      //   concurrency: Cluster.CONCURRENCY_PAGE,
      //   maxConcurrency: 8,
      //   puppeteerOptions: {
      //     headless: 'new'
      //   },
      //   monitor: true
      // });
  
      // await cluster.task(async ({ page, data: url }) => {
      //   const response = await page.goto(url);
  
      //   if(response.status() !== 200) {
      //     results.push(`✗ ${url} (${response.status()})`);
      //   }
      // });
  
      // for(let i = 0; i < data.length; i++) {
      //   cluster.queue(data[i].link);
      // }
    }

    await cluster.idle();
    await cluster.close();
    prompt();
  }

  prompt();
})();
