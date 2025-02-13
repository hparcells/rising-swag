import { Card, Skeleton } from '@mantine/core';

import classes from './SkeletonCard.module.scss';

function SkeletonCard() {
  return (
    <Card className={classes.root} withBorder>
      <Skeleton width='auto' height={200} />

      <Skeleton mt='xs' height={16} width={150} />
      <Skeleton mt='xs' height={8} width={100} />
      <Skeleton mt='xs' height={8} width={50} />

      <Skeleton mt='md' height={8} />
      <Skeleton mt='xs' height={8} />
      <Skeleton mt='xs' height={8} width={50} />

      <Skeleton mt='lg' height={36} width='100%' />
    </Card>
  );
}
export default SkeletonCard;
