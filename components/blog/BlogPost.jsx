import Link from 'next/link';
import { useScrollAnim } from '@/hooks/useScrollAnim';

export default function BlogPost({ post }) {
  useScrollAnim();

  const paragraphs = post.body.split('\n\n');

  return (
    <section className="sec" style={{ background: 'var(--s)' }}>
      <div className="con">
        <div className="bp-inner">

          <Link href="/blog" className="bp-back">← Back to Blog</Link>

          {/* Hero banner */}
          <div
            className="bp-hero afu"
            style={{
              background: `linear-gradient(135deg, ${post.c}, ${post.c}88)`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontFamily: 'var(--fd)', fontSize: '5rem', fontWeight: 700, color: 'rgba(255,255,255,.14)' }}>
              {post.cat.slice(0, 2).toUpperCase()}
            </span>
          </div>

          {/* Body */}
          <div className="bp-body afu d1">
            {paragraphs.map((p, i) => {
              if (p.startsWith('## ')) return <h2 key={i}>{p.slice(3)}</h2>;
              return <p key={i}>{p}</p>;
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
