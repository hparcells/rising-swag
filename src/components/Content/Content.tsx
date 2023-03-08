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
        const search = filter.search.toLowerCase();

        return (
          item.name.toLowerCase().includes(search) ||
          item.description.toLowerCase().includes(search) ||
          item.shop.name.toLowerCase().includes(search)
        );
      })
    );
  }, [filter]);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <FilterBox />

        <div className={classes.cards}>
          {filteredData.length > 0 ? (
            filteredData.map((item) => {
              return <ItemCard item={item} />;
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
