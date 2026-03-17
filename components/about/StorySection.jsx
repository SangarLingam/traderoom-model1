import dynamic from 'next/dynamic';
import { useScrollAnim } from '@/hooks/useScrollAnim';

const Globe = dynamic(() => import('../shared/Globe'), { ssr: false });

export default function StorySection() {
  useScrollAnim();

  return (
    <section className="sec" style={{ background: 'var(--s)' }}>
      <div className="ab-sg con">

        <div className="ab-body asr">
          <p className="tag">Our Journey</p>
          <h2 className="st" style={{ marginBottom: '1.5rem' }}>
            From a Small Studio to a Regional Powerhouse
          </h2>
          <p>
            Founded in 2019 in Chennai, Traderoom began as a boutique creative studio with a
            singular mission: to give growing brands access to agency-quality marketing that
            actually moves the needle.
          </p>
          <p>
            What started as a two-person operation quickly grew as word spread about our
            results-driven approach. By 2021, we had expanded into the Middle East, partnering
            with brands in Dubai, Riyadh, and Abu Dhabi.
          </p>
          <p>
            Today, Traderoom is a team of 25+ specialists spanning strategy, creative,
            technology, and performance marketing. We&apos;ve served over 200 brands and
            managed over ₹10 crore in advertising budgets — always with the same commitment
            to craft and results.
          </p>
          <p>
            Our edge is simple: we think like business owners. Every creative decision,
            every campaign strategy, every optimization is grounded in — does this grow
            the business?
          </p>
          <button className="btn btn-p" style={{ marginTop: '1.2rem' }}>
            Download Our Credentials
          </button>
        </div>

        <div className="ab-img asl">
          <Globe size={300} />
        </div>

      </div>
    </section>
  );
}
