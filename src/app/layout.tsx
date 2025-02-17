import { Metadata, type Viewport } from 'next';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@/styles/global.scss';

import DevNotice from '@/components/DevNotice/DevNotice';
import TheProviderProvider from '@/components/TheProviderProvider';

const DESCRIPTION =
  "Looking for the perfect gift? Represent the world of Pierce Brown's Red Rising with style with a curated list of merch and other Red Rising related items from members across the community, all in one place.";

export const metadata: Metadata = {
  title: 'Rising Swag',
  description: DESCRIPTION,
  keywords: 'red,rising,bookish,merch,stores,small,business,pin,pins,howler,jacket,pierce,brown',
  authors: [
    {
      name: 'Hunter Parcells'
    }
  ],
  openGraph: {
    description: DESCRIPTION,
    url: 'https://risingswag.com/',
    images: ['/icon/favicon-310.png']
  }
};

export const viewport: Viewport = {
  themeColor: '#C20116'
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        {process.env.DATABASE_URL?.includes('dev') && <DevNotice />}
        <TheProviderProvider>{children}</TheProviderProvider>
      </body>
    </html>
  );
}

export default RootLayout;
