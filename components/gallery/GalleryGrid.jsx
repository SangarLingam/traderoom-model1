import { useState } from 'react';
import { useScrollAnim } from '@/hooks/useScrollAnim';
import { GALLERY, GAL_CATS } from '@/data';

export default function GalleryGrid({ onSelect }) {
  useScrollAnim();
  const [tab, setTab] = useState('All');

  const filtered = tab === 'All' ? GALLERY : GALLERY.filter((g) => g.cat === tab);

  return (
    <section className="sec" style={{ background: 'var(--s)' }}>
      <div className="con">

        {/* Filter tabs */}
        <div className="gal-tabs">
          {GAL_CATS.map((c) => (
            <button
              key={c}
              className={`gt${tab === c ? ' ac' : ''}`}
              onClick={() => setTab(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="gal-g">
          {filtered.map((img) => (
            <div
              key={img.id}
              className="gi"
              style={{ height: img.h }}
              onClick={() => onSelect(img, filtered)}
            >
              <div
                className="gi-ph"
                style={{
                  height: '100%',
                  background: `linear-gradient(135deg, ${img.c}, ${img.c}88)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontFamily: 'var(--fd)', fontSize: '2rem', fontWeight: 700, color: 'rgba(255,255,255,.14)' }}>
                  {img.title.split(' ').slice(0, 2).map((w) => w[0]).join('')}
                </span>
              </div>
              <div className="gi-ov">
                <div className="gi-ov-t">{img.title}</div>
                <div className="gi-ov-s">{img.cat}</div>
                <div className="gi-ov-i">⊕</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
