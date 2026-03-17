import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact — Traderoom Digital Services</title>
        <meta name="description" content="Get in touch with Traderoom. Tell us about your project and we'll respond within 24 hours." />
      </Head>
      <Layout>

        {/* Page Hero Banner */}
        <section className="ph">
          <div className="con">
            <p className="ph-tag">Get in Touch</p>
            <h1 className="ph-h1">
              Let&apos;s Talk <em>Growth</em>
            </h1>
            <p className="ph-sub">
              Tell us about your project and we&apos;ll be in touch within 24 hours.
            </p>
          </div>
        </section>

        <ContactForm />

      </Layout>
    </>
  );
}
