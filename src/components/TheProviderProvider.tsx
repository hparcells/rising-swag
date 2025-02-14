import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import { ProvideFilter } from '@/hooks/filter';

function TheProviderProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider>
      <Notifications />
      <ProvideFilter>{children}</ProvideFilter>
    </MantineProvider>
  );
}

export default TheProviderProvider;
