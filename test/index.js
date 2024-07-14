const puppeteer = require('puppeteer-extra');
const fetch = require('node-fetch');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');

const etsyExpiredConditions = [
  'Sorry, this item is unavailable.',
  'This shop is taking a short break.',
  'Sorry, this item is sold out',
  'Sorry, the item listing you are looking for does not exist.',
  'Sorry, this item and shop are currently unavailable'
];

puppeteer.use(StealthPlugin());
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));

(async () => {
  const fetched = await fetch('http://localhost:8000/api/v1/data');
  const data = await fetched.json();
  const items = data.filter(item => {
    return item.link.includes('etsy');
  });

  // Setup.
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  for(let i = 0; i < items.length; i++) {
    const item = items[i];

    await page.goto(item.link);
    const content = await page.content();
    
    const containsCaptcha = content.includes('captcha-delivery');
    if(containsCaptcha) {
      console.log(`(${i + 1}/${items.length}) ✗ Captcha detected!`);
      continue;
    }

    const isExpired = etsyExpiredConditions.some(condition => {
      return content.includes(condition);
    });
    if(isExpired) {
      if(!item.isExpired) {
        console.log(`(${i + 1}/${items.length}) ✗ (Expired) ${item.link}`);
        continue;
      }
    }
    if(item.expired) {
      console.log(`(${i + 1}/${items.length}) ✗ (Not Expired) ${item.link}`);
    }
  }

  await browser.close();
  
})();
