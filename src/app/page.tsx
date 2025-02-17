import Content from '@/components/Content/Content';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import RequestSection from '@/components/RequestSection/RequestSection';

async function Index() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <Content />
      <RequestSection />
      <Footer />
    </>
  );
}

export default Index;
