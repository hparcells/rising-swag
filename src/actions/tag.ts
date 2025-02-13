'use server';

import { Tag } from '@prisma/client';

import prisma from '@/database/database';

export async function getTag(tag: string): Promise<Tag | null> {
  return await prisma.tag.findFirst({
    where: {
      name: tag
    }
  });
}

export async function getTagStrings(): Promise<string[]> {
  const tags = await prisma.tag.findMany({
    orderBy: {
      name: 'asc'
    }
  });

  return tags.map((tag) => {
    return tag.name;
  });
}

export async function createTag(name: string): Promise<Tag> {
  return await prisma.tag.create({
    data: {
      name
    }
  });
}

export async function ensureTag(name: string): Promise<Tag> {
  const tag = await getTag(name);
  if (!tag) {
    return createTag(name);
  }

  return tag;
}

export async function ensureTags(names: string[]): Promise<Tag[]> {
  const tags: Tag[] = [];
  for (const name of names) {
    const tag = await ensureTag(name);
    tags.push(tag);
  }

  return tags;
}
