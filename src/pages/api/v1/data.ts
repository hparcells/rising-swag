import { NextApiRequest, NextApiResponse } from 'next';

import { ALL_DATA } from '@/data/data';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.send(ALL_DATA);
}
export default handler;
