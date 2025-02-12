import Content from '@/components/Content/Content';
import Hero from '@/components/Hero/Hero';
import Layout from '@/components/Layout';
import SectionAdditional from '@/components/SectionAdditional/SectionAdditional';

function Index() {
  return (
    <Layout>
      <>
        <Hero />
        <Content />
        <SectionAdditional />
      </>
    </Layout>
  );
}

export default Index;
