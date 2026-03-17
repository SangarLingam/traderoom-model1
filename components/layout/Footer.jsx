import Link from 'next/link';

const NAV = ['Home', 'About', 'Services', 'Gallery', 'Blog', 'Contact'];
const SERVICES = ['Digital Marketing', 'Meta Ads', 'Video Editing', 'Graphic Design', 'Social Media', 'Website Services'];
const SOCIALS = [
  { label: 'fb', href: '#' },
  { label: 'ig', href: '#' },
  { label: 'in', href: '#' },
  { label: 'yt', href: '#' },
];

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-g">

        {/* Brand */}
        <div>
          <Link href="/" className="foot-brand">Traderoom</Link>
          <p className="foot-desc">
            A full-service digital agency delivering growth through creative strategy,
            performance marketing, and exceptional design. Trusted by 200+ brands.
          </p>
          <div className="foot-soc">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} className="soc-a" aria-label={s.label}>
                <span style={{ fontSize: '10px', fontWeight: 600 }}>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="foot-h">Navigation</h4>
          <ul className="foot-ul">
            {NAV.map((n) => (
              <li key={n}>
                <Link href={n === 'Home' ? '/' : `/${n.toLowerCase()}`}>{n}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="foot-h">Services</h4>
          <ul className="foot-ul">
            {SERVICES.map((s) => (
              <li key={s}><Link href="/services">{s}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="foot-h">Contact</h4>
          <ul className="foot-ul" style={{ cursor: 'default' }}>
            {['42 Anna Salai, Guindy', 'Chennai, TN 600032', 'hello@traderoom.in', '+91 98765 43210'].map((t) => (
              <li key={t} style={{ cursor: 'default', color: 'rgba(255,255,255,0.6)' }}>{t}</li>
            ))}
          </ul>
          <h4 className="foot-h" style={{ marginTop: '1.3rem' }}>Careers</h4>
          <ul className="foot-ul">
            <li><a href="#">Open Positions</a></li>
            <li><a href="#">Internships</a></li>
          </ul>
        </div>

      </div>

      <div className="foot-btm">
        <span>© {new Date().getFullYear()} Traderoom Digital Services. All rights reserved.</span>
        <span>Made with care in Chennai 🇮🇳</span>
      </div>
    </footer>
  );
}
