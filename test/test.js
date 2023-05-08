import('node-fetch');
const fs = require('fs');

const { Cluster } = require('puppeteer-cluster');

const etsyExpiredConditions = [
  'Sorry, this item is unavailable.',
  'This shop is taking a short break.',
  'Sorry, this item is sold out',
  'Sorry, the item listing you are looking for does not exist.',
  'Sorry, this item and shop are currently unavailable'
];

(async () => {
  const fetched = await fetch('http://localhost:8000/api/v1/data');
  const data = await fetched.json();

  const badItems = [];

  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_PAGE,
    maxConcurrency: 8,
    puppeteerOptions: {
      headless: 'new'
    },
    monitor: true
  });

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

  await cluster.idle();
  await cluster.close();
})();
