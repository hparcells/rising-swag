import { Html, Head, Main, NextScript } from 'next/document';

const DESCRIPTION =
  'Portfolio website for Hunter Parcells, a computer science student and aspiring web developer out of southeast Michigan. Be sure to check out The Archives for more!';

function Document() {
  return (
    <Html>
      <Head>{/* TODO: All the meta tags. */}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
