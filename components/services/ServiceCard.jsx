import { useState } from 'react';

export default function ServiceCard({ service, delay }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`sc afu d${delay}${expanded ? ' ex' : ''}`}>
      <div className="sc-ico">{service.ico}</div>
      <h3 className="sc-t">{service.title}</h3>
      <p className="sc-d">{service.desc}</p>

      <div className="sc-more">
        <div className="sc-more-in">
          <ul>
            {service.more.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <button
        className="sc-lm"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
      >
        {expanded ? 'Show Less ↑' : 'Learn More →'}
      </button>
    </div>
  );
}
