import { useScrollAnim } from '@/hooks/useScrollAnim';
import { SERVICES } from '@/data';
import ServiceCard from './ServiceCard';

export default function ServicesGrid() {
  useScrollAnim();

  return (
    <section className="sec" style={{ background: 'var(--s)' }}>
      <div className="con">
        <div className="afu">
          <p className="tag">Our Services</p>
          <h2 className="st" style={{ marginBottom: '.5rem' }}>Everything You Need</h2>
        </div>

        <div className="sv-g">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={(i % 3) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
