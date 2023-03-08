import { Text, Paper, Input } from '@mantine/core';

import { useFilter } from '@/hooks/filter';
import { IconSearch } from '@tabler/icons-react';

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
    </Paper>
  );
}

export default FilterBox;
