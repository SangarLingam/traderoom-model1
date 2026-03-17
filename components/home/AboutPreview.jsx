import { useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useScrollAnim } from '@/hooks/useScrollAnim';

const Globe = dynamic(() => import('../shared/Globe'), { ssr: false });

const STATS = [
  ['200+', 'Brands Served'],
  ['₹10Cr+', 'Ad Budgets'],
  ['500+', 'Projects'],
  ['7 Yrs', 'Experience'],
];

export default function AboutPreview() {
  useScrollAnim();

  return (
    <section className="sec ap">
      <div className="ap-g con">

        {/* Globe image placeholder */}
        <div className="ap-left afi">
          <Globe size={230} small />
          <div className="ap-caption">Since 2019</div>
        </div>

        {/* Text content */}
        <div className="asr">
          <p className="tag">Who We Are</p>
          <h2 className="st" style={{ marginBottom: '1.4rem' }}>
            A Creative Studio<br />Obsessed with Growth
          </h2>
          <p style={{ fontSize: '.93rem', lineHeight: 1.8, color: '#555', marginBottom: '1.1rem' }}>
            Traderoom is a Chennai-based digital services agency that has partnered with over
            200 brands across India and the Middle East. We combine strategic thinking with
            exceptional creative execution.
          </p>
          <p style={{ fontSize: '.93rem', lineHeight: 1.8, color: '#555', marginBottom: '2rem' }}>
            From Meta Ads that convert to brand identities that endure — we are the growth
            partner that ambitious brands deserve.
          </p>
          <Link href="/about" className="btn btn-p">Our Story →</Link>

          <div className="ap-stats">
            {STATS.map(([n, l]) => (
              <div key={l} className="ap-stat">
                <div className="ap-n">{n}</div>
                <div className="ap-l">{l}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
