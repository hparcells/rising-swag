'use server';

import { Shop } from '@prisma/client';

import prisma from '@/database/database';

export async function getShop(name: string): Promise<Shop | null> {
  return await prisma.shop.findFirst({
    where: {
      name
    }
  });
}

export async function getShops() {
  return await prisma.shop.findMany({
    orderBy: {
      name: 'asc'
    },
    include: {
      _count: {
        select: {
          items: true
        }
      }
    }
  });
}

export async function getShopNames(): Promise<string[]> {
  const shops = await prisma.shop.findMany();

  return shops.map((shop) => {
    return shop.name;
  });
}

export async function createShop(name: string, url: string): Promise<Shop> {
  return await prisma.shop.create({
    data: {
      name,
      url
    }
  });
}

export async function ensureShop(name: string, url: string): Promise<Shop> {
  const shop = await getShop(name);
  if (!shop) {
    return createShop(name, url);
  }

  return shop;
}
