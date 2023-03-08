import Head from 'next/head';

function Layout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta property='og:title' content={`${title ? `${title} - ` : ''}Red Rising Swag`} />

        <title>{`${title ? `${title} - ` : ''}Red Rising Swag`}</title>
      </Head>
      {children}
    </>
  );
}

export default Layout;
