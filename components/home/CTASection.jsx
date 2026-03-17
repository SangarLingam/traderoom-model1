import Link from 'next/link';
import { useScrollAnim } from '@/hooks/useScrollAnim';

export default function CTASection() {
  useScrollAnim();

  return (
    <section className="sec cta">
      <div className="cta-ring" />
      <div className="cta-in">
        <p className="tag afu" style={{ textAlign: 'center' }}>Ready to Grow?</p>
        <h2 className="st afu d1" style={{ textAlign: 'center', marginBottom: '1.1rem' }}>
          Let&apos;s Build Something{' '}
          <em style={{ fontFamily: 'var(--fd)', fontStyle: 'italic', color: 'var(--p)' }}>
            Extraordinary
          </em>{' '}
          Together
        </h2>
        <p className="afu d2" style={{ fontSize: '.93rem', lineHeight: 1.7, color: '#555', marginBottom: '2.3rem', textAlign: 'center' }}>
          Whether launching a brand, scaling a campaign, or redesigning your digital presence —
          Traderoom is your partner in growth.
        </p>
        <div className="afu d3" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn btn-p">Start a Conversation →</Link>
          <Link href="/services" className="btn btn-o">View Services</Link>
        </div>
      </div>
    </section>
  );
}
