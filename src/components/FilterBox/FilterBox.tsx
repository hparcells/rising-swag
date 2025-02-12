'use client';

import { Paper, Input, Select, Group, Checkbox, MultiSelect, ComboboxData } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { unique } from '@reverse/array';
import { useDebouncedValue } from '@mantine/hooks';
import { useEffect, useState } from 'react';

import { useFilter } from '@/hooks/filter';

import { ITag, MERCH_TYPE } from '@/types/item';

import { ALL_DATA } from '@/data/data';
import { IBy, IOrder } from '@/types/filter';

function FilterBox() {
  const { filter, updateFilter } = useFilter();

  const [search, setSearch] = useState('');
  const [tagGroups, setTagGroups] = useState<ComboboxData | undefined>();
  const [debounced] = useDebouncedValue(search, 250, { leading: true });

  useEffect(() => {
    const tags = unique(
      ALL_DATA.reduce((acc: string[], item) => {
        return [...acc, ...item.tags];
      }, [])
    ).sort((a: string, b: string) => {
      return a.localeCompare(b);
    });

    const groups: ComboboxData = [...tags];

    // TODO: Categorize tags.

    setTagGroups(groups);
  }, []);

  useEffect(() => {
    updateFilter({ search: debounced });
  }, [debounced]);

  return (
    <Paper shadow='sm' p='md' mt='1em' mb='1em' withBorder>
      <Group grow>
        <Input
          leftSection={<IconSearch />}
          placeholder='Search items, stores, etc...'
          value={search}
          onChange={(event) => {
            setSearch(event.currentTarget.value);
          }}
          styles={(theme) => {
            return {
              input: {
                '&:focusWithin': {
                  borderColor: theme.colors.red[6]
                }
              }
            };
          }}
        />
        <MultiSelect
          data={tagGroups}
          value={filter.tags}
          onChange={(value) => {
            updateFilter({ tags: value as ITag[] });
          }}
          placeholder='Filter by tags'
          searchable
          nothingFoundMessage='No results'
          styles={(theme) => {
            return {
              input: {
                '&:focusWithin': {
                  borderColor: theme.colors.red[6]
                }
              }
            };
          }}
        />
      </Group>

      <Group mt='xs'>
        <Group grow>
          <Select
            label='Sort by'
            data={[
              { label: 'Name', value: 'name' },
              { label: 'Shop', value: 'shop' },
              { label: 'Date Added', value: 'added' }
            ]}
            value={filter.sort.by}
            onChange={(value) => {
              updateFilter({ sort: { ...filter.sort, by: value as IBy } });
            }}
            styles={(theme) => {
              return {
                input: {
                  '&:focusWithin': {
                    borderColor: theme.colors.red[6]
                  }
                },
                item: {
                  '&[data-selected]': {
                    '&, &:hover': {
                      backgroundColor: theme.colors.red[6],
                      color: theme.white
                    }
                  },
                  '&[data-hovered]': {}
                }
              };
            }}
          />
          <Select
            label='Order by'
            data={[
              { label: 'Ascending', value: 'ascending' },
              { label: 'Descending', value: 'descending' }
            ]}
            value={filter.sort.order}
            onChange={(value) => {
              updateFilter({ sort: { ...filter.sort, order: value as IOrder } });
            }}
            styles={(theme) => {
              return {
                input: {
                  '&:focusWithin': {
                    borderColor: theme.colors.red[6]
                  }
                },
                item: {
                  '&[data-selected]': {
                    '&, &:hover': {
                      backgroundColor: theme.colors.red[6],
                      color: theme.white
                    }
                  },
                  '&[data-hovered]': {}
                }
              };
            }}
          />
        </Group>
        <Group style={{ flexDirection: 'column' }} align='flex-start'>
          <Checkbox
            label='Show expired items'
            checked={filter.showExpired}
            onChange={(event) => {
              updateFilter({ showExpired: event.currentTarget.checked });
            }}
            color='red'
          />
        </Group>
      </Group>
    </Paper>
  );
}

export default FilterBox;
