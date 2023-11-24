import { createGetInitialProps } from '@mantine/next';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

const DESCRIPTION =
  "Looking for the perfect gift? Represent the world of Pierce Brown's Red Rising with style with a curated list of merch and other Red Rising related items from members across the community, all in one place.";

const getInitialProps = createGetInitialProps();

class Document extends NextDocument {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='UTF-8' />
          <meta name='language' content='EN' />
          <meta
            name='keywords'
            content='red,rising,bookish,merch,stores,small,business,pin,pins,howler,jacket,pierce,brown'
          />
          <meta name='author' content='Hunter Parcells' />

          <meta name='description' content={DESCRIPTION} />
          <meta property='og:description' content={DESCRIPTION} />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://risingswag.com/' />
          <meta property='og:image' content='/icon/favicon-310.png' />
          <meta name='theme-color' content='#C20116' />

          <link rel='shortcut icon' href='/icon/favicon.ico' />
          <link rel='icon' sizes='16x16 32x32 64x64' href='/icon/favicon.ico' />
          <link rel='icon' type='image/png' sizes='196x196' href='/icon/favicon-192.png' />
          <link rel='icon' type='image/png' sizes='160x160' href='/icon/favicon-160.png' />
          <link rel='icon' type='image/png' sizes='96x96' href='/icon/favicon-96.png' />
          <link rel='icon' type='image/png' sizes='64x64' href='/icon/favicon-64.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/icon/favicon-32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/icon/favicon-16.png' />
          <link rel='apple-touch-icon' href='/icon/favicon-57.png' />
          <link rel='apple-touch-icon' sizes='114x114' href='/icon/favicon-114.png' />
          <link rel='apple-touch-icon' sizes='72x72' href='/icon/favicon-72.png' />
          <link rel='apple-touch-icon' sizes='144x144' href='/icon/favicon-144.png' />
          <link rel='apple-touch-icon' sizes='60x60' href='/icon/favicon-60.png' />
          <link rel='apple-touch-icon' sizes='120x120' href='/icon/favicon-120.png' />
          <link rel='apple-touch-icon' sizes='76x76' href='/icon/favicon-76.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='/icon/favicon-152.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/icon/favicon-180.png' />
          <meta name='msapplication-TileColor' content='#C20116' />
          <meta name='msapplication-TileImage' content='/icon/favicon-144.png' />
          <meta name='msapplication-config' content='/icon/browserconfig.xml' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
