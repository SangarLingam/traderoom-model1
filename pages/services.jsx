import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import ServicesGrid from '@/components/services/ServicesGrid';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services — Traderoom Digital Services</title>
        <meta name="description" content="Full-service digital solutions — Meta Ads, video editing, graphic design, social media management, website services, and more." />
      </Head>
      <Layout>

        {/* Page Hero Banner */}
        <section className="ph">
          <div className="con">
            <p className="ph-tag">What We Do</p>
            <h1 className="ph-h1">
              Full-Service Digital<br /><em>Solutions</em>
            </h1>
            <p className="ph-sub">
              From strategy to execution — everything your brand needs to grow in the digital age.
            </p>
          </div>
        </section>

        <ServicesGrid />

        {/* Bottom CTA */}
        <section style={{ background: 'var(--p)', padding: '5rem 5%', textAlign: 'center' }}>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <h2 className="st-w" style={{ marginBottom: '1rem' }}>Ready to Get Started?</h2>
            <p style={{ color: 'rgba(255,255,255,.55)', marginBottom: '2rem', lineHeight: 1.7, fontSize: '.92rem' }}>
              Tell us about your project and we&apos;ll recommend the right services to achieve your goals.
            </p>
            <Link href="/contact" className="btn btn-w">Get a Free Consultation →</Link>
          </div>
        </section>

      </Layout>
    </>
  );
}
