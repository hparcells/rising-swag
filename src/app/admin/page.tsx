'use client';

import { Tabs } from '@mantine/core';
import { IconAlertTriangle, IconBox, IconPlus } from '@tabler/icons-react';

import ItemsTab from '@/components/tabs/ItemsTab';
import ReportsTab from '@/components/tabs/ReportsTab';
import RequestsTab from '@/components/tabs/RequestsTab';

function AdminPage() {
  return (
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
        <ItemsTab />
      </Tabs.Panel>
      <Tabs.Panel value='requests'>
        <RequestsTab />
      </Tabs.Panel>
      <Tabs.Panel value='reports'>
        <ReportsTab />
      </Tabs.Panel>
    </Tabs>
  );
}

export default AdminPage;
