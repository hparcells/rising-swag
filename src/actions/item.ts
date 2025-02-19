'use server';

import prisma from '@/database/database';

import { IFilter } from '@/types/filter';
import { ItemFormData, SearchReturn } from '@/types/item';

export async function getItem(itemId: string) {
  const item = await prisma.item.findFirst({
    where: {
      id: itemId
    }
  });

  return item;
}

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
          contains: filter.search.trim(),
          mode: 'insensitive'
        }
      },
      {
        description: {
          contains: filter.search.trim(),
          mode: 'insensitive'
        }
      },
      {
        shop: {
          name: {
            contains: filter.search.trim(),
            mode: 'insensitive'
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

export async function toggleExpiry(itemId: string) {
  const item = await prisma.item.findFirst({
    where: {
      id: itemId
    }
  });
  if (!item) {
    return;
  }

  await prisma.item.update({
    where: {
      id: itemId
    },
    data: {
      expired: !item.expired
    }
  });
}

export async function createItem(data: ItemFormData) {
  if (await urlExists(data.link.trim())) {
    return;
  }

  await prisma.item.create({
    data: {
      name: data.name.trim(),
      image: data.image.trim(),
      tags: {
        connectOrCreate: data.tags.split(',').map((tag) => {
          return {
            where: {
              name: tag.trim()
            },
            create: {
              name: tag.trim()
            }
          };
        })
      },
      shop: {
        connectOrCreate: {
          where: {
            name: data.shopName.trim()
          },
          create: {
            name: data.shopName.trim(),
            url: data.shopUrl.trim()
          }
        }
      },
      description: data.description.trim(),
      link: data.link.trim(),
      expired: data.expired,
      spoiler: data.spoiler,
      nsfw: data.nsfw
    }
  });

  await prisma.request.deleteMany({
    where: {
      url: data.link.trim()
    }
  });
}

export async function updateItem(data: ItemFormData, itemId: string) {
  if (await urlExists(data.link.trim())) {
    return;
  }

  await prisma.item.update({
    where: {
      id: itemId
    },
    data: {
      name: data.name.trim(),
      image: data.image.trim(),
      tags: {
        set: [],
        connectOrCreate: data.tags.split(',').map((tag) => {
          return {
            where: {
              name: tag.trim()
            },
            create: {
              name: tag.trim()
            }
          };
        })
      },
      shop: {
        connectOrCreate: {
          where: {
            name: data.shopName.trim()
          },
          create: {
            name: data.shopName.trim(),
            url: data.shopUrl.trim()
          }
        }
      },
      description: data.description.trim(),
      link: data.link.trim(),
      expired: data.expired,
      spoiler: data.spoiler,
      nsfw: data.nsfw
    }
  });

  await prisma.tag.deleteMany({
    where: {
      items: {
        none: {}
      }
    }
  });

  await prisma.shop.deleteMany({
    where: {
      items: {
        none: {}
      }
    }
  });
}

export async function deleteItem(itemId: string) {
  await prisma.item.deleteMany({
    where: {
      id: itemId
    }
  });

  await prisma.tag.deleteMany({
    where: {
      items: {
        none: {}
      }
    }
  });

  await prisma.shop.deleteMany({
    where: {
      items: {
        none: {}
      }
    }
  });
}
