import FilterBox from '../FilterBox/FilterBox';

import { useFilter } from '@/hooks/filter';

import classes from './Content.module.scss';
import { ALL_DATA } from '@/data/data';
import ItemCard from '../ItemCard/ItemCard';
import { useEffect, useState } from 'react';

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
          return true;
        })
    );
  }, [filter]);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <FilterBox />

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
