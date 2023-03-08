import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

import { ProvideFilter } from '@/hooks/filter';

import '@/styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('G-BC7Q0LC162');
      ReactGA.send({
        hitType: 'pageview',
        page: window.location.pathname
      });
    }
  }, []);

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
