import { Prisma } from '@prisma/client';

export type FullReport = Prisma.ReportGetPayload<{
  include: {
    item: {
      include: {
        shop: true;
        tags: true;
      };
    };
  };
}>;
