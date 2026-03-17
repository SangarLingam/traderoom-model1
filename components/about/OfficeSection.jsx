import { useScrollAnim } from '@/hooks/useScrollAnim';

const OFFICES = [
  { c: '#004743', label: 'Chennai HQ'       },
  { c: '#1b4332', label: 'Creative Studio'  },
  { c: '#2d6a4f', label: 'Strategy Room'    },
];

export default function OfficeSection() {
  useScrollAnim();

  return (
    <section className="sec" style={{ background: 'var(--s)' }}>
      <div className="con">
        <div className="afu" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="tag" style={{ textAlign: 'center' }}>Our Office</p>
          <h2 className="st" style={{ textAlign: 'center' }}>Where We Work</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {OFFICES.map(({ c, label }, i) => (
            <div
              key={label}
              className={`afu d${i + 1}`}
              style={{
                height: 220,
                background: `linear-gradient(135deg, ${c}, ${c}88)`,
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.4rem',
              }}
            >
              <span style={{ fontFamily: 'var(--fd)', color: 'white', fontSize: '1rem', fontStyle: 'italic' }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
