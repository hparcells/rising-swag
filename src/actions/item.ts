'use server';

import prisma from '@/database/database';

import { IFilter } from '@/types/filter';
import { SearchReturn } from '@/types/item';

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

export async function getItems(filter: IFilter, page: number): Promise<SearchReturn> {
  const whereFilter: any = {};
  if (filter.search.trim()) {
    whereFilter['OR'] = [
      {
        name: {
          contains: filter.search.trim()
        }
      },
      {
        description: {
          contains: filter.search.trim()
        }
      },
      {
        shop: {
          name: {
            contains: filter.search.trim()
          }
        }
      }
    ];
  }

  const tagFilter: any = {};
  if (filter.tags.length) {
    tagFilter['tags'] = {
      some: {
        name: {
          in: filter.tags
        }
      }
    };
  }

  let orderBy = null;
  if (filter.sort.by === 'date' || filter.sort.by === 'name') {
    orderBy = {
      [filter.sort.by]: filter.sort.order
    };
  } else if (filter.sort.by === 'shop') {
    orderBy = {
      shop: {
        name: filter.sort.order
      }
    };
  }

  const where = {
    AND: [whereFilter, tagFilter],
    expired: filter.showExpired ? undefined : false
  };
  const query = {
    include: {
      shop: true,
      tags: true
    },
    where,
    orderBy: orderBy as any,
    take: 30,
    skip: (page - 1) * 30
  };

  const [items, total] = await prisma.$transaction([
    prisma.item.findMany(query),
    prisma.item.count({
      where
    })
  ]);

  return {
    items,
    total
  };
}
