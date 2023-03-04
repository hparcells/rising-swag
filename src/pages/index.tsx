import Layout from '@/components/Layout';

import { ALL_DATA } from '@/data/data';

function Index() {
  return (
    <Layout>
      <p>Home</p>
      {JSON.stringify(ALL_DATA)}
    </Layout>
  );
}

export default Index;
