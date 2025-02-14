'use server';

import { ReportType } from '@prisma/client';

import prisma from '@/database/database';

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
}
