'use server';

import { headers } from 'next/headers';
import axios from 'axios';
import isUrl from 'is-url';

import prisma from '@/database/database';

export async function getRequestByUrl(url: string) {
  return await prisma.request.findFirst({
    where: {
      url
    }
  });
}

export async function createRequest(url: string) {
  if (!isUrl(url)) {
    return;
  }

  const existingRequest = await getRequestByUrl(url);
  if (existingRequest) {
    return;
  }

  const ip = (await headers()).get('x-forwarded-for') || 'Unknown';

  await prisma.request.create({
    data: {
      url,
      requestedBy: ip
    }
  });

  if (!process.env.DISCORD_WEBHOOK_URL) {
    return;
  }

  await axios.post(process.env.DISCORD_WEBHOOK_URL, {
    content: '',
    embeds: [
      {
        id: 652627557,
        title: 'New Item Request',
        description: 'A new request has been submitted.',
        color: 2353969,
        fields: [
          {
            id: 228679967,
            name: 'URL',
            value: url
          }
        ],
        url: url,
        thumbnail: {
          url: 'https://em-content.zobj.net/source/twitter/408/sparkles_2728.png'
        }
      }
    ]
  });
}

export async function getRequests() {
  return await prisma.request.findMany({
    orderBy: {
      timestamp: 'asc'
    }
  });
}

export async function deleteRequest(requestId: string) {
  await prisma.request.delete({
    where: {
      id: requestId
    }
  });
}
