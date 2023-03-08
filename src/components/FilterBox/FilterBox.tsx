import { Paper, Input, Select, Group, Checkbox, MultiSelect } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { unique } from '@reverse/array';

import { useFilter } from '@/hooks/filter';

import { ALL_DATA } from '@/data/data';

function FilterBox() {
  const { filter, updateFilter } = useFilter();

  return (
    <Paper shadow='sm' p='md' mb='1em' withBorder>
      <Group grow>
        <Input
          icon={<IconSearch />}
          placeholder='Search'
          value={filter.search}
          onChange={(event) => {
            updateFilter({ search: event.target.value });
          }}
        />
        <MultiSelect
          data={unique(
            ALL_DATA.reduce((acc: string[], item) => {
              return [...acc, ...item.tags];
            }, [])
          ).sort((a: string, b: string) => {
            return a.localeCompare(b);
          })}
          value={filter.tags}
          onChange={(value) => {
            updateFilter({ tags: value });
          }}
          placeholder='Filter by tags'
          searchable
          nothingFound='No results'
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
              updateFilter({ sort: { ...filter.sort, by: value } });
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
              updateFilter({ sort: { ...filter.sort, order: value } });
            }}
          />
        </Group>
        <Group>
          <Checkbox
            label='Show expired items'
            checked={filter.tags.includes('expired')}
            onChange={(event) => {
              if (event.target.checked) {
                updateFilter({ tags: [...filter.tags, 'expired'] });
              } else {
                updateFilter({
                  tags: filter.tags.filter((tag) => {
                    return tag !== 'expired';
                  })
                });
              }
            }}
          />
        </Group>
      </Group>
    </Paper>
  );
}

export default FilterBox;
