import { NextApiRequest, NextApiResponse } from 'next';

import { ITag } from '@/types/item';

import { ALL_DATA } from '@/data/data';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tag } = req.query;

  if (!tag) {
    res.send(ALL_DATA);
  }

  const items = ALL_DATA.filter((item) => {
    return item.tags.includes(tag as ITag);
  });

  res.send(items);
}
export default handler;
