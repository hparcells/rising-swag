/* eslint-disable no-console */
'use server';

import prisma from '@/database/database';

import { ALL_DATA } from '@/data/data';

import { getUrls } from './item';
import { createShop, getShopNames } from './shop';
import { createTag, getTagStrings } from './tag';

export async function resetDatabase() {
  console.log('Resetting database...');

  await prisma.item.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.shop.deleteMany();

  console.log('Database reset!');
}

export async function migrateData() {
  const data = ALL_DATA;

  console.log(`Migrating ${data.length} items...`);

  let migrated = 0;
  let duplicates = 0;
  const errored: string[] = [];
  const skipped: string[] = [];

  const tags = await getTagStrings();
  const shops = await getShopNames();
  const urls = await getUrls();

  const start = Date.now();
  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    if (urls.includes(item.link)) {
      skipped.push(item.link);
      duplicates++;
      continue;
    }

    if (!shops.includes(item.shop.name)) {
      await createShop(item.shop.name, item.shop.url);
      shops.push(item.shop.name);
    }
    for (const tag of item.tags) {
      if (!tags.includes(tag)) {
        await createTag(tag);
        tags.push(tag);
      }
    }

    try {
      await prisma.item.create({
        data: {
          date: new Date(item.date),
          image: item.image,
          name: item.name,
          tags: {
            connect: item.tags.map((tag) => {
              return {
                name: tag
              };
            })
          },
          shop: {
            connect: {
              name: item.shop.name
            }
          },
          description: item.description,
          link: item.link
        }
      });
    } catch (e) {
      errored.push(item.link);
      console.error(e);

      continue;
    }

    migrated++;
    if (migrated % 25 === 0) {
      const elapsed = Date.now() - start;
      const itemsPerSecond = migrated / (elapsed / 1000);
      const remaining = (data.length - migrated) / itemsPerSecond;

      console.log(
        `Migrated ${migrated}/${data.length} items... (${itemsPerSecond.toFixed(2)} items/s, ~${remaining.toFixed(2)} seconds remaining)`
      );
    }
  }

  console.log(`Migrated ${migrated}/${data.length} items!`);
  if (duplicates > 0) {
    console.log(`Skipped ${duplicates} existing items.`);
  }
  if (skipped.length > 0) {
    console.log('Skipped items:');
    for (const skip of skipped) {
      console.log(`- ${skip}`);
    }
  }
  if (errored.length > 0) {
    console.log('Errored items:');
    for (const error of errored) {
      console.log(`- ${error}`);
    }
  }
}
