import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import BlogList from '@/components/blog/BlogList';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog — Traderoom Digital Services</title>
        <meta name="description" content="Marketing insights, creative strategy, and industry perspectives from the Traderoom team." />
      </Head>
      <Layout>

        {/* Page Hero Banner */}
        <section className="ph">
          <div className="con">
            <p className="ph-tag">Insights &amp; Ideas</p>
            <h1 className="ph-h1">
              The Traderoom <em>Blog</em>
            </h1>
            <p className="ph-sub">
              Marketing insights, creative strategy, and industry perspectives from our team.
            </p>
          </div>
        </section>

        <BlogList />

      </Layout>
    </>
  );
}
