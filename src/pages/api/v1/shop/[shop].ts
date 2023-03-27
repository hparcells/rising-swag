import { NextApiRequest, NextApiResponse } from 'next';

import { ALL_DATA } from '@/data/data';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { shop } = req.query;

  const items = ALL_DATA.filter((item) => {
    return item.shop.name === shop;
  });
  const name = items[0].shop.name;
  const url = items[0].shop.url;

  res.send({
    name,
    url,
    items
  });
}
export default handler;

// TODO: https://stackoverflow.com/questions/66955625/next-js-with-swagger
