import { NextApiRequest, NextApiResponse } from 'next';

import { ALL_DATA } from '@/data/data';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const randomItem = ALL_DATA[Math.floor(Math.random() * ALL_DATA.length)];
  res.send(randomItem);
}
export default handler;
