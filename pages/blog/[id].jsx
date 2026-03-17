import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import BlogPost from '@/components/blog/BlogPost';
import { BLOGS } from '@/data';

// ── Static generation ────────────────────────────────────────────
export async function getStaticPaths() {
  const paths = BLOGS.map((post) => ({
    params: { id: String(post.id) },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = BLOGS.find((b) => String(b.id) === params.id) ?? null;
  if (!post) return { notFound: true };
  return { props: { post } };
}

// ── Page component ───────────────────────────────────────────────
export default function BlogPostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} — Traderoom Blog</title>
        <meta name="description" content={post.exc} />
      </Head>
      <Layout>

        {/* Page Hero Banner */}
        <section className="ph">
          <div className="con">
            <p className="ph-tag">{post.cat} · {post.date}</p>
            <h1 className="ph-h1" style={{ fontSize: 'clamp(1.9rem, 4vw, 3.4rem)' }}>
              {post.title}
            </h1>
          </div>
        </section>

        <BlogPost post={post} />

      </Layout>
    </>
  );
}
