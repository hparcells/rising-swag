'use client';

import { Tabs } from '@mantine/core';
import { IconAlertTriangle, IconBox } from '@tabler/icons-react';

import ItemsTab from '@/components/tabs/ItemsTab';
import ReportsTab from '@/components/tabs/ReportsTab';

function AdminPage() {
  return (
    <Tabs defaultValue='items'>
      <Tabs.List>
        <Tabs.Tab value='items' leftSection={<IconBox size={12} />}>
          Items
        </Tabs.Tab>
        <Tabs.Tab value='reports' leftSection={<IconAlertTriangle size={12} />}>
          Reports
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value='items'>
        <ItemsTab />
      </Tabs.Panel>
      <Tabs.Panel value='reports'>
        <ReportsTab />
      </Tabs.Panel>
    </Tabs>
  );
}

export default AdminPage;
