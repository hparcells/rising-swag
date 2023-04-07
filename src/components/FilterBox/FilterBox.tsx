import { Paper, Input, Select, Group, Checkbox, MultiSelect } from '@mantine/core';
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
  const [debounced] = useDebouncedValue(search, 250, { leading: true });

  useEffect(() => {
    updateFilter({ search: debounced });
  }, [debounced]);

  return (
    <Paper shadow='sm' p='md' mt='1em' mb='1em' withBorder>
      <Group grow>
        <Input
          icon={<IconSearch />}
          placeholder='Search items, stores, etc...'
          value={search}
          onChange={(event) => {
            setSearch(event.currentTarget.value);
          }}
          styles={(theme) => {
            return {
              input: {
                '&:focus-within': {
                  borderColor: theme.colors.red[6]
                }
              }
            };
          }}
        />
        <MultiSelect
          data={unique(
            ALL_DATA.reduce((acc: string[], item) => {
              return [...acc, ...item.tags];
            }, [])
          )
            .sort((a: string, b: string) => {
              return a.localeCompare(b);
            })
            .map((tag) => {
              let group;
              if (MERCH_TYPE.includes(tag as any)) {
                group = 'Merch Type';
              }
              // if (BOOKS.includes(tag as any)) {
              //   group = 'Book';
              // }
              // if (COLORS.includes(tag as any)) {
              //   group = 'Color';
              // }
              // if (CHARACTERS.includes(tag as any)) {
              //   group = 'Character';
              // }

              return { label: tag, value: tag, group };
            })}
          value={filter.tags}
          onChange={(value) => {
            updateFilter({ tags: value as ITag[] });
          }}
          placeholder='Filter by tags'
          searchable
          nothingFound='No results'
          styles={(theme) => {
            return {
              input: {
                '&:focus-within': {
                  borderColor: theme.colors.red[6]
                }
              }
            };
          }}
        />
      </Group>

      <Group mt='xs' position='apart'>
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
                  '&:focus-within': {
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
                  '&:focus-within': {
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
          <Checkbox
            label='Full width'
            checked={filter.fullWidth}
            onChange={(event) => {
              updateFilter({ fullWidth: event.currentTarget.checked });
            }}
            color='red'
          />
        </Group>
      </Group>
    </Paper>
  );
}

export default FilterBox;
