import { NextApiRequest, NextApiResponse } from 'next';

import { ALL_DATA } from '@/data/data';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const shops = ALL_DATA.map((item) => {
    return item.shop;
  });

  const uniqueShops = shops
    .filter((shop, index, self) => {
      return (
        self.findIndex((s) => {
          return s.name === shop.name;
        }) === index
      );
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

  res.send(
    uniqueShops.map((shop) => {
      return {
        ...shop,
        itemCount: ALL_DATA.filter((item) => {
          return item.shop.name === shop.name;
        }).length
      };
    })
  );
}
export default handler;
