import Head from 'next/head';

function Layout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <meta property='og:title' content={`${title ? `${title} - ` : ''}Red Rising Merch`} />

        <title>{`${title ? `${title} - ` : ''}Red Rising Merch`}</title>
      </Head>
      {children}
    </div>
  );
}

export default Layout;
