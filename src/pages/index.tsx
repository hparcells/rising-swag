import Content from '@/components/Content/Content';
import Hero from '@/components/Hero/Hero';
import Layout from '@/components/Layout';

function Index() {
  return (
    <Layout>
      <div>
        <Hero />
        <Content />
      </div>
    </Layout>
  );
}

export default Index;
