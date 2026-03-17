import Link from 'next/link';
import { useScrollAnim } from '@/hooks/useScrollAnim';
import { PROJECTS } from '@/data';

export default function ProjectsSection() {
  useScrollAnim();

  return (
    <section className="sec proj">
      <div className="con">
        <div className="proj-h">
          <div className="afu">
            <p className="tag">Featured Work</p>
            <h2 className="st">Projects We&apos;re Proud Of</h2>
          </div>
          <Link href="/gallery" className="btn btn-o afu d3">View Full Gallery →</Link>
        </div>

        <div className="pg">
          {PROJECTS.map((p, i) => (
            <div key={p.id} className={`pc afu d${i + 1}`}>
              {/* Placeholder image */}
              <div className="pc-img" style={{ background: `linear-gradient(135deg, ${p.c}, ${p.c}88)` }}>
                <span style={{ fontFamily: 'var(--fd)', fontSize: '3.5rem', fontWeight: 700, color: 'rgba(255,255,255,.14)' }}>
                  {String(p.id).padStart(2, '0')}
                </span>
              </div>

              <div className="pc-info">
                <div className="pc-cat">{p.cat}</div>
                <div className="pc-ttl">{p.title}</div>
              </div>

              {/* Hover overlay */}
              <div className="pc-ov">
                <div className="pc-ov-in">
                  <h3>{p.title}</h3>
                  <p>{p.cat}</p>
                  <button className="btn btn-w" style={{ padding: '.45rem 1.1rem', fontSize: '.68rem' }}>
                    Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
