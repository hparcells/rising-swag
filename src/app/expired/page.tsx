'use client';

import { useEffect, useRef, useState } from 'react';
import { Anchor, Pagination, Text } from '@mantine/core';
import Link from 'next/link';

import SkeletonCard from '@/components/SkeletonCard/SkeletonCard';
import ItemCard from '@/components/ItemCard/ItemCard';
import Layout from '@/components/Layout';
import FilterBox from '@/components/FilterBox/FilterBox';

import { IItem } from '@/types/item';

import classes from '@/components/Content/Content.module.scss';

import { useFilter } from '@/hooks/filter';

import { ALL_DATA } from '@/data/data';

function Expired() {
  const { filter, resetFilter } = useFilter();

  const topCards = useRef<HTMLDivElement>(null);
  const [filteredData, setFilteredData] = useState<IItem[]>(null as any);
  const [pages, setPages] = useState<number>(1);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    resetFilter();
  }, []);
  useEffect(() => {
    setFilteredData(
      ALL_DATA.filter((item) => {
        return item.expired;
      })
        .filter((item) => {
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
  }, [filter.search, filter.tags, filter.sort, filter.showExpired]);
  useEffect(() => {
    if (!filteredData) {
      return;
    }
    setPages(Math.ceil(filteredData.length / 30));
  }, [filteredData]);

  return (
    <Layout title='Expired Items'>
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

          <Text mb='sm'>Showing {filteredData && filteredData.length.toString()} items.</Text>

          <div className={classes.cards} ref={topCards}>
            {filteredData ? (
              filteredData.length > 0 ? (
                filteredData
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
    </Layout>
  );
}

export default Expired;
