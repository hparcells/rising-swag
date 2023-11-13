/* eslint-disable no-empty-function */

import { useState, useContext, createContext } from 'react';

import { IFilter } from '@/types/filter';

type IFilterUpdate = { [key in keyof IFilter]?: IFilter[key] };

// Context
const FilterContext = createContext({
  filter: {
    search: '',
    tags: [],
    sort: {
      by: 'added',
      order: 'descending'
    },
    showExpired: false
  } as IFilter,
  updateFilter: (filterUpdate: IFilterUpdate) => {},
  resetFilter: () => {}
});

// Our hook.
export function useFilter(): {
  filter: IFilter;
  updateFilter: (filterUpdate: IFilterUpdate) => void;
  resetFilter: () => void;
} {
  return useContext(FilterContext);
}

// Our hook logic.
function useProvideFilter() {
  const [filter, setFilter] = useState<IFilter>({
    search: '',
    tags: [],
    sort: {
      by: 'added',
      order: 'descending'
    },
    showExpired: false
  });

  function updateFilter(filterUpdate: IFilterUpdate) {
    setFilter({ ...filter, ...filterUpdate });
  }

  function resetFilter() {
    setFilter({
      search: '',
      tags: [],
      sort: {
        by: 'added',
        order: 'descending'
      },
      showExpired: false
    });
  }

  return {
    filter,
    updateFilter,
    resetFilter
  };
}

// The context we provide.
export function ProvideFilter({ children }: { children: React.ReactNode }) {
  const filter = useProvideFilter();

  return <FilterContext.Provider value={filter}>{children}</FilterContext.Provider>;
}
