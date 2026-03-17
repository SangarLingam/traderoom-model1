import { useScrollAnim } from '@/hooks/useScrollAnim';
import { TEAM } from '@/data';

export default function TeamSection() {
  useScrollAnim();

  return (
    <section className="sec" style={{ background: 'white' }}>
      <div className="con">
        <div className="afu" style={{ textAlign: 'center' }}>
          <p className="tag" style={{ textAlign: 'center' }}>The People</p>
          <h2 className="st" style={{ textAlign: 'center' }}>Meet the Team</h2>
        </div>

        <div className="team-g">
          {TEAM.map((m, i) => (
            <div key={m.name} className={`tm afu d${i + 1}`}>
              <div className="tm-in">

                {/* Front face */}
                <div className="tm-f">
                  <div
                    className="tm-f-img"
                    style={{ background: `linear-gradient(135deg, ${m.c}, ${m.c}aa)` }}
                  >
                    <span>{m.init}</span>
                  </div>
                  <div className="tm-f-info">
                    <div className="tm-f-name">{m.name}</div>
                    <div className="tm-f-role">{m.role}</div>
                  </div>
                </div>

                {/* Back face */}
                <div className="tm-b" style={{ background: m.c }}>
                  <h3>{m.name}</h3>
                  <div className="r">{m.role}</div>
                  <p>{m.bio}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '.75rem', color: '#bbb' }}>
          Hover each card to meet the team
        </p>
      </div>
    </section>
  );
}
