import { useScrollAnim } from '@/hooks/useScrollAnim';

const FEATURES = [
  { ico: '🏆', t: '7 Years Excellence',  d: 'Over half a decade of deep digital expertise across industries — FMCG, real estate, hospitality, and technology startups.' },
  { ico: '👥', t: '200+ Happy Clients',  d: 'Lasting partnerships with brands across India and the Middle East, from first-time founders to established enterprises.' },
  { ico: '📈', t: 'Performance Driven',  d: 'Every campaign is measured and held accountable to real business outcomes — never just vanity metrics.' },
  { ico: '🎨', t: 'Creative Excellence', d: 'Our in-house creative team produces exceptional work across brand design, video production, and digital content.' },
];

export default function FeaturesSection() {
  useScrollAnim();

  return (
    <section className="sec feat">
      <div className="con">
        <div className="afu" style={{ textAlign: 'center' }}>
          <p className="tag" style={{ textAlign: 'center' }}>Why Traderoom</p>
          <h2 className="st" style={{ textAlign: 'center' }}>Built Different. Built to Win.</h2>
        </div>

        <div className="feat-g">
          {FEATURES.map((f, i) => (
            <div key={f.t} className={`fc afu d${i + 1}`}>
              <div className="fc-ico">{f.ico}</div>
              <h3 className="fc-t">{f.t}</h3>
              <p className="fc-d">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
