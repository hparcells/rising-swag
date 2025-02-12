'use server';

import prisma from '@/database/database';

export async function urlExists(url: string): Promise<boolean> {
  const item = await prisma.item.findFirst({
    where: {
      link: url
    }
  });

  return item !== null;
}

export async function getUrls(): Promise<string[]> {
  const items = await prisma.item.findMany();

  return items.map((item) => {
    return item.link;
  });
}
