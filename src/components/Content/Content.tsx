import { useEffect, useState } from 'react';
import FilterBox from '../FilterBox/FilterBox';

import { useFilter } from '@/hooks/filter';

import ItemCard from '../ItemCard/ItemCard';

import { ALL_DATA } from '@/data/data';

import classes from './Content.module.scss';
import { Text } from '@mantine/core';

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
          if (item.tags.includes('expired') && !filter.tags.includes('expired')) {
            return false;
          }
          if (filter.tags.length > 0) {
            return filter.tags.every((tag) => {
              return item.tags.includes(tag) || tag === 'expired';
            });
          }
          return true;
        })
    );
  }, [filter]);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <FilterBox />

        <Text mb='sm'>
          Showing {filteredData.length}{' '}
          {filteredData.length !== ALL_DATA.length && ` of ${ALL_DATA.length} `} items
        </Text>

        <div className={classes.cards}>
          {filteredData.length > 0 ? (
            filteredData.map((item, i) => {
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
