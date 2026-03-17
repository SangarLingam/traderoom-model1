import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NAV_ITEMS = [
  { label: 'Home',     href: '/'        },
  { label: 'About',    href: '/about'   },
  { label: 'Services', href: '/services'},
  { label: 'Gallery',  href: '/gallery' },
  { label: 'Blog',     href: '/blog'    },
  { label: 'Contact',  href: '/contact' },
];

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className={`nav${scrolled ? ' sc' : ''}`}>
        <Link href="/" className="nav-logo">Traderoom</Link>

        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={router.pathname === item.href ? 'ac' : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="ham" onClick={() => setOpen(true)} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mob${open ? ' op' : ''}`}>
        <button className="mob-x" onClick={() => setOpen(false)} aria-label="Close menu">✕</button>
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
