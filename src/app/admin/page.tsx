'use client';

import { useState } from 'react';
import { Tabs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconAlertTriangle, IconBox, IconPlus } from '@tabler/icons-react';

import CreateItemModal from '@/components/CreateItemModal/CreateItemModal';
import ItemsTab from '@/components/tabs/ItemsTab';
import ReportsTab from '@/components/tabs/ReportsTab';
import RequestsTab from '@/components/tabs/RequestsTab';

import { FullItem } from '@/types/item';

function AdminPage() {
  const [opened, { open, close }] = useDisclosure(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [editingItem, setEditingItem] = useState<FullItem | null>(null);

  return (
    <>
      <Tabs defaultValue='items'>
        <Tabs.List>
          <Tabs.Tab value='items' leftSection={<IconBox size={12} />}>
            Items
          </Tabs.Tab>
          <Tabs.Tab value='requests' leftSection={<IconPlus size={12} />}>
            Requests
          </Tabs.Tab>
          <Tabs.Tab value='reports' leftSection={<IconAlertTriangle size={12} />}>
            Reports
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value='items'>
          <ItemsTab setModalMode={setModalMode} setEditingItem={setEditingItem} open={open} />
        </Tabs.Panel>
        <Tabs.Panel value='requests'>
          <RequestsTab />
        </Tabs.Panel>
        <Tabs.Panel value='reports'>
          <ReportsTab setModalMode={setModalMode} setEditingItem={setEditingItem} open={open} />
        </Tabs.Panel>
      </Tabs>
      <CreateItemModal isOpen={opened} close={close} mode={modalMode} item={editingItem} />
    </>
  );
}

export default AdminPage;
