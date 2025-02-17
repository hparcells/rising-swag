import {
  ActionIcon,
  Anchor,
  Button,
  Checkbox,
  Image,
  Pagination,
  Table,
  Text
} from '@mantine/core';
import { IconEye, IconEyeOff, IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';

import { toggleExpiry } from '@/actions/item';

import { useFilter } from '@/hooks/filter';

function ItemsTab() {
  const { filter, items, page, pages, isLoading, updateFilter, setPage, fetchData } = useFilter();

  async function handleExpiryClick(itemId: string) {
    await toggleExpiry(itemId);
    fetchData();
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1em 0.5em'
      }}
    >
      <Button leftSection={<IconPlus size={14} />}>Add Item</Button>

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
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={20}></Table.Th>
                <Table.Th>Item</Table.Th>
                <Table.Th>Shop</Table.Th>
                <Table.Th>Actions</Table.Th>
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
                        <ActionIcon variant='filled'>
                          <IconPencil style={{ width: '70%', height: '70%' }} />
                        </ActionIcon>
                        <ActionIcon variant='filled' color='red'>
                          <IconTrash style={{ width: '70%', height: '70%' }} />
                        </ActionIcon>
                      </div>
                    </Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
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
  );
}

export default ItemsTab;
