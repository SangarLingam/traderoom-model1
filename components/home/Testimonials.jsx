import { useState } from 'react';
import { useScrollAnim } from '@/hooks/useScrollAnim';
import { TESTIMONIALS } from '@/data';

export default function Testimonials() {
  useScrollAnim();
  const [cur, setCur] = useState(0);
  const prev = () => setCur((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCur((c) => (c + 1) % TESTIMONIALS.length);

  return (
    <section className="sec test">
      <div className="con">
        <div className="test-h">
          <div className="afu">
            <p className="tag-w">Client Voices</p>
            <h2 className="st-w">What Our Clients Say</h2>
          </div>
          <p className="afu d2" style={{ color: 'rgba(255,255,255,.35)', fontSize: '.82rem' }}>
            Trusted by 200+ brands worldwide
          </p>
        </div>

        <div className="test-car">
          <div className="test-track" style={{ transform: `translateX(-${cur * 100}%)` }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="tc">
                <div className="tc-q">&ldquo;</div>
                <div className="tc-stars">
                  {[...Array(t.stars)].map((_, i) => (
                    <span key={i} style={{ color: '#FFD700', fontSize: '.95rem' }}>★</span>
                  ))}
                </div>
                <p className="tc-txt">{t.txt}</p>
                <div className="tc-auth">
                  <div className="tc-av">{t.init}</div>
                  <div>
                    <div className="tc-name">{t.name}</div>
                    <div className="tc-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="test-nav">
            <button className="t-btn" onClick={prev} aria-label="Previous">←</button>
            <button className="t-btn" onClick={next} aria-label="Next">→</button>
            <div style={{ display: 'flex', gap: '.45rem', marginLeft: '1rem', alignItems: 'center' }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className="t-dot"
                  onClick={() => setCur(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  style={{ width: i === cur ? 18 : 6, background: i === cur ? 'white' : 'rgba(255,255,255,.22)' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
