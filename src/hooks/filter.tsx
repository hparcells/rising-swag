import { useState, useContext, createContext } from 'react';

import { IFilter } from '@/types/filter';

// Context
const FilterContext = createContext({
  filter: {
    search: '',
    tags: [],
    sort: {
      by: 'added',
      order: 'ascending'
    }
  } as IFilter,
  // eslint-disable-next-line no-empty-function
  updateFilter: (filterUpdate: {}) => {}
});

// Our hook.
export function useFilter(): {
  filter: IFilter;
  updateFilter: (filterUpdate: {}) => void;
} {
  return useContext(FilterContext);
}

// Our hook logic.
function useProvideFilter() {
  const [filter, setFilter] = useState<IFilter>({
    search: '',
    tags: [],
    sort: {
      by: 'name',
      order: 'ascending'
    }
  });

  function updateFilter(filterUpdate: {}) {
    setFilter({ ...filter, ...filterUpdate });
  }

  return {
    filter,
    updateFilter
  };
}

// The context we provide.
export function ProvideFilter({ children }: { children: React.ReactNode }) {
  const filter = useProvideFilter();

  return <FilterContext.Provider value={filter}>{children}</FilterContext.Provider>;
}
