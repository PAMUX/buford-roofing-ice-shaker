import { useEffect, useState } from 'react'
import logo from '../assets/logos/iceshaker-logo.png'
import './Header.css'

export const NAV_LINKS = [
  { label: 'Bottles', href: '#bottles' },
  { label: 'Custom', href: '#colors' },
  { label: 'Shop', href: '#bottles' },
  { label: 'About Us', href: '#use-cases' },
  { label: 'Contact Us', href: '#quote' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="header">
      <div className="announce">
        <p>FREE GROUND SHIPPING ON ORDERS $80 AND UP (USA ONLY)</p>
      </div>

      <div className="nav">
        <div className="nav__inner shell">
          <a href="#top" className="nav__brand" aria-label="Ice Shaker home">
            <img src={logo} alt="Ice Shaker" />
          </a>

          <nav className="nav__links" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#quote" className="btn btn--blue nav__cta">
            Request a Quote
          </a>

          <button
            type="button"
            className="nav__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? ' is-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#quote" className="mobile-menu__cta" onClick={() => setOpen(false)}>
          Request a Quote
        </a>
      </div>
    </header>
  )
}
