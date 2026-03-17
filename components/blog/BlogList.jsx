import { useScrollAnim } from '@/hooks/useScrollAnim';
import { BLOGS } from '@/data';
import BlogCard from './BlogCard';

export default function BlogList() {
  useScrollAnim();

  return (
    <section className="sec" style={{ background: 'var(--s)' }}>
      <div className="con">
        <div className="afu">
          <p className="tag">Latest Articles</p>
          <h2 className="st">Fresh from the Team</h2>
        </div>

        <div className="blog-g">
          {BLOGS.map((post, i) => (
            <BlogCard key={post.id} post={post} delay={(i % 3) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
