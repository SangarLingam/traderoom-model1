import dynamic from 'next/dynamic';
import Link from 'next/link';

// Globe uses Three.js (browser-only) — disable SSR
const Globe = dynamic(() => import('../shared/Globe'), { ssr: false });

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-c">
        <p className="hero-label">Digital Services Studio · Est. 2019</p>
        <h1 className="hero-h1">
          We Build <em>Brands</em><br />That Matter
        </h1>
        <p className="hero-p">
          Traderoom is a full-service digital agency delivering growth through
          creative strategy, performance marketing, and compelling design.
        </p>
        <div className="hero-btns">
          <Link href="/contact" className="btn btn-w">Start a Project →</Link>
          <Link href="/services" className="btn btn-g">Our Services</Link>
        </div>
      </div>

      <div className="hero-globe">
        <Globe size={480} />
      </div>

      <div className="hero-bg">TR</div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-line" />
      </div>
    </section>
  );
}
