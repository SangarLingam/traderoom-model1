import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import StorySection from '@/components/about/StorySection';
import StatsBar from '@/components/about/StatsBar';
import TeamSection from '@/components/about/TeamSection';
import OfficeSection from '@/components/about/OfficeSection';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About — Traderoom Digital Services</title>
        <meta name="description" content="Learn about Traderoom — our story, our team, and why 200+ brands trust us to grow their digital presence." />
      </Head>
      <Layout>

        {/* Page Hero Banner */}
        <section className="ph">
          <div className="con">
            <p className="ph-tag">Our Story</p>
            <h1 className="ph-h1">
              We Are Traderoom —<br />Built to <em>Elevate</em>
            </h1>
            <p className="ph-sub">
              A creative studio that blends strategy, design, and technology to build brands that grow.
            </p>
          </div>
        </section>

        <StorySection />
        <StatsBar />
        <TeamSection />
        <OfficeSection />

      </Layout>
    </>
  );
}
