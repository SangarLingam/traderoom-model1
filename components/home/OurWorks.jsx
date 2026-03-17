import { useRef } from 'react';
import { useScrollAnim } from '@/hooks/useScrollAnim';
import { WORKS } from '@/data';

export default function OurWorks() {
  useScrollAnim();
  const scrollRef = useRef(null);
  const drag = useRef({ on: false, x: 0, sl: 0 });

  const onDown  = (e) => { drag.current = { on: true, x: e.pageX - scrollRef.current.offsetLeft, sl: scrollRef.current.scrollLeft }; scrollRef.current.classList.add('gb'); };
  const onMove  = (e) => { if (!drag.current.on) return; scrollRef.current.scrollLeft = drag.current.sl - (e.pageX - scrollRef.current.offsetLeft - drag.current.x) * 1.5; };
  const onUp    = ()  => { drag.current.on = false; scrollRef.current?.classList.remove('gb'); };

  return (
    <section className="sec ow" style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: '2rem' }}>
      <div className="con" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '0 5%' }}>
        <div className="afu">
          <p className="tag-w">Portfolio</p>
          <h2 className="st-w">Our Works</h2>
        </div>
        <p className="afu d2" style={{ color: 'rgba(255,255,255,.28)', fontSize: '.7rem', letterSpacing: '.12em', textTransform: 'uppercase' }}>
          ← Drag →
        </p>
      </div>

      <div
        className="ow-sc"
        ref={scrollRef}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
      >
        <div className="ow-track">
          {WORKS.map((w, i) => (
            <div key={w.id} className="wi">
              <div className="wi-inner">
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${w.c}, ${w.c}88)` }} />
                <span className="wi-n">{String(i + 1).padStart(2, '0')}</span>
                <div className="wi-lbl">
                  <div className="wi-t">{w.title}</div>
                  <div className="wi-s">{w.sub}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
