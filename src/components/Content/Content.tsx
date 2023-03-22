import { useEffect, useState } from 'react';
import { Alert, Text } from '@mantine/core';
import { IconTrafficCone } from '@tabler/icons-react';

import FilterBox from '../FilterBox/FilterBox';
import ItemCard from '../ItemCard/ItemCard';

import { useFilter } from '@/hooks/filter';

import { ALL_DATA } from '@/data/data';

import classes from './Content.module.scss';

function Content() {
  const { filter } = useFilter();

  const [filteredData, setFilteredData] = useState(ALL_DATA);
  useEffect(() => {
    setFilteredData(
      ALL_DATA.filter((item) => {
        const search = filter.search.toLowerCase().trim();

        return (
          item.name.toLowerCase().trim().includes(search) ||
          item.description.toLowerCase().trim().includes(search) ||
          item.shop.name.toLowerCase().trim().includes(search)
        );
      })
        .sort((a, b) => {
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
          if (filter.tags.length > 0) {
            return filter.tags.every((tag) => {
              return item.tags.includes(tag);
            });
          }
          return true;
        })
    );
  }, [filter]);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {/* TODO: Remove this. */}
        <Alert
          icon={<IconTrafficCone size='1rem' />}
          title="I can't find what I'm looking for!"
          color='orange'
          variant='filled'
          mb='sm'
        >
          This website is still a work in progress. As you probably suspect, there's a lot of
          content out there, and finding it all and putting it on here takes time. Check back later!
        </Alert>

        <FilterBox />

        {/* This has got to be the worst code I've written. */}
        <Text mb='sm'>
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

        <div className={classes.cards}>
          {filteredData.length > 0 ? (
            filteredData
              .filter((item) => {
                return !item.expired || (item.expired && filter.showExpired);
              })
              .map((item, i) => {
                return <ItemCard item={item} key={i} />;
              })
          ) : (
            <p>No results</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Content;
