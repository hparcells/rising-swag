'use client';

import { useRef } from 'react';
import { Pagination, Text } from '@mantine/core';
import clsx from 'clsx';

import FilterBox from '@/components/FilterBox/FilterBox';
import ItemCard from '@/components/ItemCard/ItemCard';
import SkeletonCard from '@/components/SkeletonCard/SkeletonCard';

import { useFilter } from '@/hooks/filter';

import classes from './Content.module.scss';

function Content() {
  const { items, page, pages, isLoading, setPage } = useFilter();

  const topCards = useRef<HTMLDivElement>(null);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={clsx(classes.aboveCards, classes.squeeze)}>
          <FilterBox />
        </div>

        <div className={clsx(classes.cards, classes.squeeze)} ref={topCards}>
          {!isLoading ? (
            items.length > 0 ? (
              <>
                {items.map((item, i) => {
                  return <ItemCard item={item} key={i} />;
                })}
              </>
            ) : (
              <Text>No results.</Text>
            )
          ) : (
            <>
              {Array.from({ length: 30 }).map((_, i) => {
                return <SkeletonCard key={i} />;
              })}
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

export default Content;
