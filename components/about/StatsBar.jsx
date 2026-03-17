import { useState, useEffect, useRef } from 'react';

function CountUp({ target, suffix, visible }) {
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;
    let cur = 0;
    const steps = 60;
    const step = target / steps;
    const iv = setInterval(() => {
      cur += step;
      if (cur >= target) { setN(target); clearInterval(iv); }
      else setN(Math.floor(cur));
    }, 2000 / steps);
    return () => clearInterval(iv);
  }, [visible, target]);

  return <span>{n}{suffix}</span>;
}

const STATS = [
  { n: 200, s: '+',    l: 'Brands Served'        },
  { n: 500, s: '+',    l: 'Projects Delivered'   },
  { n: 7,   s: ' Yrs', l: 'Industry Experience'  },
  { n: 25,  s: '+',    l: 'Team Members'          },
];

export default function StatsBar() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section className="stats-bar" ref={ref}>
      <div className="stats-g">
        {STATS.map((st) => (
          <div key={st.l}>
            <div className="sn">
              <CountUp target={st.n} suffix={st.s} visible={visible} />
            </div>
            <div className="sl-label">{st.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
