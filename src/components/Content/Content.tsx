import { useEffect, useRef, useState } from 'react';
import { Alert, Pagination, Text } from '@mantine/core';
import { IconTrafficCone } from '@tabler/icons-react';
import clsx from 'clsx';

import FilterBox from '../FilterBox/FilterBox';
import ItemCard from '../ItemCard/ItemCard';

import { useFilter } from '@/hooks/filter';

import { ALL_DATA } from '@/data/data';

import classes from './Content.module.scss';
import { IItem } from '@/types/item';
import SkeletonCard from '../SkeletonCard/SkeletonCard';

function Content() {
  const { filter } = useFilter();

  const topCards = useRef<HTMLDivElement>(null);

  const [filteredData, setFilteredData] = useState<IItem[]>(null as any);
  const [pages, setPages] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    setFilteredData(
      ALL_DATA.filter((item) => {
        // Filter by search.
        const search = filter.search.toLowerCase().trim();

        return (
          item.name.toLowerCase().trim().includes(search) ||
          item.description.toLowerCase().trim().includes(search) ||
          item.shop.name.toLowerCase().trim().includes(search)
        );
      })
        .sort((a, b) => {
          // Order by filters.
          if (filter.sort.by === 'name') {
            if (filter.sort.order === 'descending') {
              return b.name.localeCompare(a.name);
            }
            return a.name.localeCompare(b.name);
          }
          if (filter.sort.by === 'shop') {
            if (filter.sort.order === 'descending') {
              return b.shop.name.localeCompare(a.shop.name);
            }
            return a.shop.name.localeCompare(b.shop.name);
          }
          if (filter.sort.by === 'added') {
            if (filter.sort.order === 'descending') {
              return new Date(b.date).getTime() - new Date(a.date).getTime();
            }
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          }
          return 0;
        })
        .filter((item) => {
          // Filter by tags.
          if (filter.tags.length > 0) {
            return filter.tags.every((tag) => {
              return item.tags.includes(tag);
            });
          }
          return true;
        })
        .sort((a, b) => {
          // Put featured first.
          return a.tags.includes('featured') ? -1 : 1;
        })
    );
  }, [filter]);
  useEffect(() => {
    if (!filteredData) {
      return;
    }
    setPages(
      Math.ceil(
        filteredData.filter((item) => {
          return !item.expired;
        }).length / 30
      )
    );
  }, [filteredData]);
  useEffect(() => {
    setPage(1);
  }, [filter]);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={clsx(classes.aboveCards, classes.squeeze)}>
          {filteredData && <FilterBox />}

          {/* This has got to be the worst code I've written. */}
          {filteredData && (
            <Text mb='sm' ref={topCards}>
              Showing{' '}
              {
                filteredData.filter((item) => {
                  return !item.expired || (item.expired && filter.showExpired);
                }).length
              }{' '}
              {filteredData.filter((isExpired) => {
                return !isExpired;
              }).length !== ALL_DATA.length && ` of ${ALL_DATA.length} `}
              items
              {!filter.showExpired &&
                filteredData
                  .map((item) => {
                    return item.expired;
                  })
                  .filter((isExpired) => {
                    return isExpired;
                  }).length > 0 &&
                ` (hiding ${
                  filteredData
                    .map((item) => {
                      return item.expired;
                    })
                    .filter((isExpired) => {
                      return isExpired;
                    }).length
                } expired)`}
            </Text>
          )}
        </div>

        <div className={clsx(classes.cards, !filter.fullWidth && classes.squeeze)}>
          {filteredData ? (
            filteredData.length > 0 ? (
              <>
                {filteredData
                  .filter((item) => {
                    return !item.expired || (item.expired && filter.showExpired);
                  })
                  .map((item, i) => {
                    return <ItemCard item={item} key={i} />;
                  })
                  .splice((page - 1) * 30, 30)}
              </>
            ) : (
              <p>No results</p>
            )
          ) : (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
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

export default Content;
