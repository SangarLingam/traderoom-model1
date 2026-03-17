import { useEffect } from 'react';

export default function Lightbox({ item, items, onClose, onPrev, onNext }) {
  const idx = items.findIndex((i) => i.id === item.id);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape')      onClose();
      if (e.key === 'ArrowLeft')   onPrev();
      if (e.key === 'ArrowRight')  onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lb" onClick={onClose}>
      <div className="lb-wrap" onClick={(e) => e.stopPropagation()}>

        <button className="lb-close" onClick={onClose} aria-label="Close">✕</button>

        <button className="lb-arr lb-prev" onClick={onPrev} aria-label="Previous">←</button>

        <div
          className="lb-ph"
          style={{ background: `linear-gradient(135deg, ${item.c}, ${item.c}88)` }}
        >
          <div className="lb-ph-i">
            {item.title.split(' ').slice(0, 2).map((w) => w[0]).join('')}
          </div>
          <div className="lb-ph-t">{item.title}</div>
          <div className="lb-ph-s">{item.cat}</div>
        </div>

        <button className="lb-arr lb-next" onClick={onNext} aria-label="Next">→</button>

        <div className="lb-cap">{item.title} — {item.cat}</div>
        <div className="lb-cnt">
          {idx + 1} / {items.length} &nbsp;·&nbsp; Press ← → to navigate &nbsp;·&nbsp; Esc to close
        </div>

      </div>
    </div>
  );
}
