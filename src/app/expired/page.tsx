'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { Anchor, Pagination, Text } from '@mantine/core';

import classes from '@/components/Content/Content.module.scss';
import FilterBox from '@/components/FilterBox/FilterBox';
import ItemCard from '@/components/ItemCard/ItemCard';
import SkeletonCard from '@/components/SkeletonCard/SkeletonCard';

import { useFilter } from '@/hooks/filter';

function Expired() {
  const { items, page, pages, setPage } = useFilter();

  const topCards = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div
        className={classes.squeeze}
        style={{
          padding: '1em 0.5em'
        }}
      >
        <Anchor href='/' component={Link} passHref>
          Back
        </Anchor>

        <FilterBox />

        <Text mb='sm'>Showing {items && items.length.toString()} items.</Text>

        <div className={classes.cards} ref={topCards}>
          {items ? (
            items.length > 0 ? (
              items
                .map((item) => {
                  return <ItemCard key={item.link} item={item} fadeExpired={false} />;
                })
                .splice((page - 1) * 30, 30)
            ) : (
              <Text>No results.</Text>
            )
          ) : (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          )}
        </div>

        <Pagination
          total={pages}
          value={page}
          onChange={(newPage) => {
            setPage(newPage);
            topCards.current?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={classes.pagination}
          color='red'
        />
      </div>
    </div>
  );
}

export default Expired;
