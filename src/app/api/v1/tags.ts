import { NextApiRequest, NextApiResponse } from 'next';
import { unique } from '@reverse/array';

import { ALL_DATA } from '@/data/data';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const tags = ALL_DATA.flatMap((item) => {
    return item.tags;
  });
  const uniqueTags = unique(tags).sort();

  res.send(
    uniqueTags.map((tag) => {
      return {
        tag,
        itemCount: ALL_DATA.filter((item) => {
          return item.tags.includes(tag);
        }).length
      };
    })
  );
}
export default handler;
