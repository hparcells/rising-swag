import { useState, useContext, createContext, Context } from 'react';

import { IFilter } from '@/types/filter';

// Context
const FilterContext = createContext({
  filter: {
    search: '',
    tags: [],
    sort: {
      sort: 'added',
      order: 'descending'
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
      sort: 'added',
      order: 'descending'
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
