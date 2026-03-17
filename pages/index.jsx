import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import AboutPreview from '@/components/home/AboutPreview';
import ProjectsSection from '@/components/home/ProjectsSection';
import OurWorks from '@/components/home/OurWorks';
import FeaturesSection from '@/components/home/FeaturesSection';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Traderoom — Digital Services Portfolio</title>
        <meta name="description" content="Traderoom is a full-service digital agency delivering growth through creative strategy, performance marketing, and compelling design." />
      </Head>
      <Layout>
        <Hero />
        <AboutPreview />
        <ProjectsSection />
        <OurWorks />
        <FeaturesSection />
        <Testimonials />
        <CTASection />
      </Layout>
    </>
  );
}
