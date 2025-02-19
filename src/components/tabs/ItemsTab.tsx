import { useEffect, useState } from 'react';
import {
  ActionIcon,
  Anchor,
  Button,
  Checkbox,
  Image,
  Input,
  Pagination,
  Table,
  Text
} from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { IconEye, IconEyeOff, IconPencil, IconPlus, IconSearch } from '@tabler/icons-react';

import { toggleExpiry } from '@/actions/item';

import { useFilter } from '@/hooks/filter';

import { FullItem } from '@/types/item';

function ItemsTab({
  setModalMode,
  setEditingItem,
  open
}: {
  setModalMode: (mode: 'create' | 'edit') => void;
  setEditingItem: (item: FullItem | null) => void;
  open: () => void;
}) {
  const { filter, items, page, pages, isLoading, updateFilter, setPage, fetchData } = useFilter();

  const [search, setSearch] = useState('');
  const [debounced] = useDebouncedValue(search, 250, { leading: true });

  async function handleExpiryClick(itemId: string) {
    await toggleExpiry(itemId);
    fetchData();
  }

  function handleCreateClick() {
    setEditingItem(null);
    setModalMode('create');
    open();
  }

  function handleEditClick(item: FullItem) {
    setEditingItem(item);
    setModalMode('edit');
    open();
  }

  useEffect(() => {
    updateFilter({ search: debounced });
  }, [debounced]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '1em 0.5em'
        }}
      >
        <Input
          leftSection={<IconSearch />}
          placeholder='Search items, stores, etc...'
          value={search}
          onChange={(event) => {
            setSearch(event.currentTarget.value);
          }}
          mb='sm'
          w='100%'
        />
        <Button leftSection={<IconPlus size={14} />} onClick={handleCreateClick}>
          Add Item
        </Button>

        {!isLoading ? (
          <>
            <Checkbox
              label='Show expired items'
              checked={filter.showExpired}
              onChange={(event) => {
                updateFilter({ showExpired: event.currentTarget.checked });
              }}
              mt='sm'
            />
            {items.length > 0 ? (
              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th w={20}></Table.Th>
                    <Table.Th>Item</Table.Th>
                    <Table.Th>Shop</Table.Th>
                    <Table.Th w={0}>Actions</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {items.map((item) => {
                    return (
                      <Table.Tr
                        key={item.id}
                        style={{
                          opacity: item.expired ? 0.5 : 1
                        }}
                      >
                        <Table.Td>
                          <Image w={30} h={30} src={item.image} alt={item.name} />
                        </Table.Td>
                        <Table.Td>
                          <Anchor href={item.link} target='_blank'>
                            {item.name}
                          </Anchor>
                        </Table.Td>
                        <Table.Td>
                          <Anchor href={item.shop.url} target='_blank'>
                            {item.shop.name}
                          </Anchor>
                        </Table.Td>
                        <Table.Td>
                          <div
                            style={{
                              display: 'flex',
                              gap: '2px'
                            }}
                          >
                            <ActionIcon
                              variant='filled'
                              onClick={() => {
                                handleExpiryClick(item.id);
                              }}
                            >
                              {item.expired ? (
                                <IconEyeOff style={{ width: '70%', height: '70%' }} />
                              ) : (
                                <IconEye style={{ width: '70%', height: '70%' }} />
                              )}
                            </ActionIcon>
                            <ActionIcon
                              variant='filled'
                              onClick={() => {
                                handleEditClick(item);
                              }}
                            >
                              <IconPencil style={{ width: '70%', height: '70%' }} />
                            </ActionIcon>
                          </div>
                        </Table.Td>
                      </Table.Tr>
                    );
                  })}
                </Table.Tbody>
              </Table>
            ) : (
              <Text mt='sm'>No items.</Text>
            )}
            <Pagination
              total={pages}
              value={page}
              onChange={(newPage) => {
                setPage(newPage);
              }}
              mt='sm'
            />
          </>
        ) : (
          <Text mt='sm'>Loading...</Text>
        )}
      </div>
    </>
  );
}

export default ItemsTab;
