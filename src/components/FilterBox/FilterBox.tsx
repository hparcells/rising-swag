import { Paper, Input, Select, Group, Checkbox } from '@mantine/core';
import { IconArrowsSort, IconSearch } from '@tabler/icons-react';

import { useFilter } from '@/hooks/filter';

function FilterBox() {
  const { filter, updateFilter: update } = useFilter();

  return (
    <Paper shadow='sm' p='md' mb='1em' withBorder>
      <Input
        icon={<IconSearch />}
        placeholder='Search'
        value={filter.search}
        onChange={(event) => {
          update({ search: event.target.value });
        }}
      />

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
              update({ sort: { ...filter.sort, by: value } });
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
              update({ sort: { ...filter.sort, order: value } });
            }}
          />
        </Group>
        <Group>
          <Checkbox
            label='Show expired items'
            checked={filter.tags.includes('expired')}
            onChange={(event) => {
              if (event.target.checked) {
                update({ tags: [...filter.tags, 'expired'] });
              } else {
                update({
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
