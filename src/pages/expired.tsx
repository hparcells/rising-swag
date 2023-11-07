import { useEffect, useRef, useState } from 'react';
import { Anchor, Pagination } from '@mantine/core';
import Link from 'next/link';

import SkeletonCard from '@/components/SkeletonCard/SkeletonCard';
import ItemCard from '@/components/ItemCard/ItemCard';
import Layout from '@/components/Layout';

import { IItem } from '@/types/item';

import classes from '../components/Content/Content.module.scss';

import { ALL_DATA } from '@/data/data';

function Expired() {
  const topCards = useRef<HTMLDivElement>(null);
  const [filteredData, setFilteredData] = useState<IItem[]>(null as any);
  const [pages, setPages] = useState<number>(1);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setFilteredData(
      ALL_DATA.filter((item) => {
        return item.expired;
      }).sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      })
    );
  }, []);

  useEffect(() => {
    if (!filteredData) {
      return;
    }
    setPages(Math.ceil(filteredData.length / 30));
  }, [filteredData]);

  return (
    <Layout title='Expired Items'>
      <div
        className={classes.squeeze}
        style={{
          marginTop: '1em'
        }}
      >
        <Anchor href='/' component={Link} passHref>
          Back
        </Anchor>

        <p>Showing all expired items.</p>

        <div className={classes.cards} ref={topCards}>
          {filteredData ? (
            filteredData
              .map((item) => {
                return <ItemCard key={item.link} item={item} fadeExpired={false} />;
              })
              .splice((page - 1) * 30, 30)
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
    </Layout>
  );
}

export default Expired;
