import { useEffect, useState } from 'react';
import { ActionIcon, Anchor, Button, Image, Pagination, Table, Text } from '@mantine/core';
import { IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';

import { getItems } from '@/actions/item';

import { FullItem } from '@/types/item';

function ItemsTab() {
  const [items, setItems] = useState<FullItem[]>(null as any);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  async function fetchItems() {
    const { total, items: fetchedItems } = await getItems(
      {
        search: '',
        tags: [],
        sort: {
          by: 'date',
          order: 'desc'
        },
        showExpired: true
      },
      page
    );

    setItems(fetchedItems);
    setPages(Math.ceil(total / 30));
  }

  useEffect(() => {
    fetchItems();
  }, [page]);

  return items ? (
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
          // topCards.current?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </div>
  ) : (
    <Text m='sm'>Loading...</Text>
  );
}

export default ItemsTab;
