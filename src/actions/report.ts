'use server';

import { ReportType } from '@prisma/client';
import axios from 'axios';

import prisma from '@/database/database';

import { FullReport } from '@/types/report';

import { getItem } from './item';

function parseReportType(reportType: ReportType) {
  switch (reportType) {
    case ReportType.EXPIRED:
      return 'Expired';
    case ReportType.NOT_EXPIRED:
      return 'Not Expired';
    case ReportType.MISSING_IMAGE:
      return 'Missing Image';
    case ReportType.BROKEN_LINK:
      return 'Broken Link';
    case ReportType.OTHER:
      return 'Other';
    default:
      return 'Unknown';
  }
}

export async function findReport(itemId: string, type: ReportType) {
  const report = await prisma.report.findFirst({
    where: {
      itemId,
      type
    }
  });

  return report;
}

export async function createReport(itemId: string, type: ReportType) {
  const report = await findReport(itemId, type);
  if (report) {
    return;
  }

  const item = await getItem(itemId);
  if (!item) {
    return;
  }

  await prisma.report.create({
    data: {
      item: {
        connect: {
          id: itemId
        }
      },
      type
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
        title: 'New Item Report',
        description: 'A new report has been submitted.',
        color: 15409955,
        fields: [
          {
            id: 228679967,
            name: 'Item',
            value: item.name
          },
          {
            id: 979329315,
            name: 'Report Type',
            value: parseReportType(type)
          }
        ],
        url: item.link,
        thumbnail: {
          url: item.image
        }
      }
    ]
  });
}

export async function getReports(): Promise<FullReport[]> {
  const reports = await prisma.report.findMany({
    include: {
      item: {
        include: {
          shop: true,
          tags: true
        }
      }
    },
    orderBy: {
      timestamp: 'asc'
    }
  });

  return reports;
}

export async function deleteReport(reportId: string) {
  await prisma.report.delete({
    where: {
      id: reportId
    }
  });
}

export async function deleteItemReports(itemId: string) {
  await prisma.report.deleteMany({
    where: {
      itemId
    }
  });
}
