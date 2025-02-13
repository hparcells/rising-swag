'use client';

/* eslint-disable no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { getItems } from '@/actions/item';

import { IFilter } from '@/types/filter';
import { FullItem } from '@/types/item';

type IFilterUpdate = { [key in keyof IFilter]?: IFilter[key] };

// Context
const FilterContext = createContext({
  filter: {
    search: '',
    tags: [],
    sort: {
      by: 'date',
      order: 'desc'
    },
    showExpired: false
  } as IFilter,
  items: [] as FullItem[] | null,
  page: 1,
  pages: 1,
  updateFilter: (filterUpdate: IFilterUpdate) => {},
  resetFilter: () => {},
  setPage: (page: number) => {}
});

// Our hook.
export function useFilter(): {
  filter: IFilter;
  items: FullItem[] | null;
  page: number;
  pages: number;
  updateFilter: (filterUpdate: IFilterUpdate) => void;
  resetFilter: () => void;
  setPage: (page: number) => void;
} {
  return useContext(FilterContext);
}

// Our hook logic.
function useProvideFilter() {
  const [filter, setFilter] = useState<IFilter>({
    search: '',
    tags: [],
    sort: {
      by: 'date',
      order: 'desc'
    },
    showExpired: false
  });
  const [debouncedFilter] = useDebounce(filter, 500);
  const [items, setItems] = useState<FullItem[] | null>(null);
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(1);

  function updateFilter(filterUpdate: IFilterUpdate) {
    setFilter({ ...filter, ...filterUpdate });
  }

  function resetFilter() {
    setFilter({
      search: '',
      tags: [],
      sort: {
        by: 'date',
        order: 'desc'
      },
      showExpired: false
    });
  }

  useEffect(() => {
    (async () => {
      const { items, total } = await getItems(debouncedFilter, page);
      setItems(items);
      setPage(1);
      setPages(Math.ceil(total / 30));
    })();
  }, [debouncedFilter]);

  useEffect(() => {
    (async () => {
      const { items } = await getItems(debouncedFilter, page);
      setItems(items);
    })();
  }, [page]);

  return {
    filter,
    items,
    page,
    pages,
    updateFilter,
    resetFilter,
    setPage
  };
}

// The context we provide.
export function ProvideFilter({ children }: { children: React.ReactNode }) {
  const filter = useProvideFilter();

  return <FilterContext.Provider value={filter}>{children}</FilterContext.Provider>;
}
