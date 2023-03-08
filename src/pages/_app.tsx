import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/global.scss';
import { ProvideFilter } from '@/hooks/filter';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <ProvideFilter>
          <Component {...pageProps} />
        </ProvideFilter>
      </MantineProvider>
    </div>
  );
}

export default App;
