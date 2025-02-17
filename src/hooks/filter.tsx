'use client';

/* eslint-disable no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';
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
  items: [] as FullItem[],
  page: 1,
  pages: 1,
  isLoading: false,
  updateFilter: (filterUpdate: IFilterUpdate) => {},
  resetFilter: () => {},
  setPage: (page: number) => {},
  fetchData: () => {}
});

// Our hook.
export function useFilter(): {
  filter: IFilter;
  items: FullItem[];
  page: number;
  pages: number;
  isLoading: boolean;
  updateFilter: (filterUpdate: IFilterUpdate) => void;
  resetFilter: () => void;
  setPage: (page: number) => void;
  fetchData: () => void;
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
  const [items, setItems] = useState<FullItem[]>(null as any);
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  async function fetchData() {
    const { items, total } = await getItems(debouncedFilter, page);
    setItems(items);
    setPages(Math.ceil(total / 30));
  }

  useEffect(() => {
    setIsLoading(true);
  }, [page]);

  useEffect(() => {
    setPage(1);
    setIsLoading(true);
  }, [debouncedFilter]);

  // This is a stupid workaround but it works.
  useEffect(() => {
    (async () => {
      if (!isLoading) {
        return;
      }

      await fetchData();

      setIsLoading(false);
    })();
  }, [isLoading]);

  return {
    filter,
    items,
    page,
    pages,
    isLoading,
    updateFilter,
    resetFilter,
    setPage,
    fetchData
  };
}

// The context we provide.
export function ProvideFilter({ children }: { children: React.ReactNode }) {
  const filter = useProvideFilter();

  return <FilterContext.Provider value={filter}>{children}</FilterContext.Provider>;
}
