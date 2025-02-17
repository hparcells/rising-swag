import { ActionIcon, Anchor, Button, Image, Pagination, Table, Text } from '@mantine/core';
import { IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';

import { useFilter } from '@/hooks/filter';

function ItemsTab() {
  const { items, page, pages, isLoading, setPage } = useFilter();

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
                  <Table.Tr key={item.id}>
                    <Table.Td>
                      <Image w={30} h={30} src={item.image} alt={item.name} />
                    </Table.Td>
                    <Table.Td>
                      <Anchor href={item.link} target='_blank'>
                        {item.name}
                      </Anchor>
                    </Table.Td>
                    <Table.Td>
                      <Anchor href={item.link} target='_blank'>
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
