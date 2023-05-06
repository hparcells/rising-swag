import('node-fetch');

const puppeteer = require('puppeteer');
const fs = require('fs');


const etsyExpiredConditions = [
  'Sorry, this item is unavailable.',
  'This shop is taking a short break.',
  'Sorry, this item is sold out',
  'Sorry, the item listing you are looking for does not exist.'
];

const data = require('./data.json');

(async () => {
  const badItems = [];

  const browser = await puppeteer.launch({
    headless: 'new'
  });
  const page = await browser.newPage();

  // Etsy Items
  const etsyItems = data.filter(item => {
    return item.shop.url.includes('etsy');
  });
  for(let i = 0; i < etsyItems.length; i++) {
    await page.goto(etsyItems[i].link);
    const content = await page.content();

    const progress = `(${i + 1}/${etsyItems.length})`;

    // If the item is expired.
    if(etsyExpiredConditions.some(condition => content.includes(condition))) {
      if(!etsyItems[i].expired) {
        console.log(`${progress} ✗ (Expired) ${etsyItems[i].link}`);
        badItems.push(etsyItems[i]);
      }else {
        console.log(`${progress} ✓ (Expired, Good) ${etsyItems[i].link}`);
      }
      continue;
    }

    // If the item is good but is marked as expired.
    if(etsyItems[i].expired) {
      console.log(`${progress} ✗ (Not Expired) ${etsyItems[i].link}`);
      badItems.push(etsyItems[i]);
      continue;
    }

    // If the item is good.
    console.log(`${progress} ✓ (Good) ${etsyItems[i].link}`);
  }

  await browser.close();

  console.log();
  if(badItems.length > 0) {
    console.log('Bad Items:');
    badItems.forEach(item => {
      console.log(item.link);
    });
  }else {
    console.log('All items are good!');
  }
})();
