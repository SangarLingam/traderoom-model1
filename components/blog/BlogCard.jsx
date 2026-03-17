import { useRouter } from 'next/router';

export default function BlogCard({ post, delay }) {
  const router = useRouter();

  return (
    <div
      className={`bc afu d${delay}`}
      onClick={() => router.push(`/blog/${post.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && router.push(`/blog/${post.id}`)}
    >
      <div className="bc-img">
        <div
          className="bc-ph"
          style={{
            height: '100%',
            background: `linear-gradient(135deg, ${post.c}, ${post.c}88)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontFamily: 'var(--fd)', fontSize: '2.5rem', fontWeight: 700, color: 'rgba(255,255,255,.14)' }}>
            {post.cat.slice(0, 2).toUpperCase()}
          </span>
        </div>
      </div>

      <div className="bc-body">
        <div className="bc-meta">
          <span>{post.cat}</span>
          <span>·</span>
          <span>{post.date}</span>
        </div>
        <h3 className="bc-t">{post.title}</h3>
        <p className="bc-e">{post.exc}</p>
      </div>
    </div>
  );
}
