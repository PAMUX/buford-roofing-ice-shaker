import logoWhite from '../assets/logos/iceshaker-logo-white.png'
import instagram from '../assets/icons/social-instagram.png'
import facebook from '../assets/icons/social-facebook.png'
import tiktok from '../assets/icons/social-tiktok.png'
import youtube from '../assets/icons/social-youtube.png'
import linkedin from '../assets/icons/social-linkedin.png'
import { NAV_LINKS } from './Header'
import './Footer.css'

const SOCIALS = [
  { img: instagram, label: 'Instagram', cls: 'is-instagram' },
  { img: facebook, label: 'Facebook', cls: 'is-facebook' },
  { img: tiktok, label: 'TikTok', cls: 'is-tiktok' },
  { img: youtube, label: 'YouTube', cls: 'is-youtube' },
  { img: null, label: 'Pinterest', cls: 'is-pinterest' },
  { img: linkedin, label: 'LinkedIn', cls: 'is-linkedin' },
]

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M12.3 2.2C7 2.2 4.2 5.7 4.2 9.3c0 1.7.9 3.8 2.4 4.4.2.1.3 0 .4-.2l.3-1.2c0-.1 0-.2-.1-.3-.5-.6-.9-1.7-.9-2.7 0-2.6 2-5.2 5.4-5.2 2.9 0 5 2 5 4.8 0 3.2-1.6 5.4-3.7 5.4-1.2 0-2-1-1.8-2.2.3-1.4 1-2.9 1-3.9 0-.9-.5-1.7-1.5-1.7-1.2 0-2.1 1.2-2.1 2.9 0 1 .3 1.8.3 1.8l-1.4 5.8c-.4 1.7-.1 3.9 0 4.1 0 .1.2.2.3.1.1-.1 1.4-1.7 1.8-3.3.1-.5.7-2.7.7-2.7.4.7 1.4 1.3 2.5 1.3 3.3 0 5.6-3 5.6-7.1 0-3-2.6-5.9-6.6-5.9z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div className="footer__brand">
            <img className="footer__logo" src={logoWhite} alt="Ice Shaker" />
            <ul className="footer__socials">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a href="#top" aria-label={s.label} className={s.cls}>
                    {s.img ? <img src={s.img} alt="" /> : <PinterestIcon />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="footer__links" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#quote" className="btn btn--blue footer__cta">
            Request a Quote
          </a>
        </div>

        <div className="footer__rule" />

        <div className="footer__bottom">
          <p>&copy; 2024 Ice Shaker. All rights reserved.</p>
          <p>Ice Shaker is a registered trademark of its owner.</p>
        </div>
      </div>
    </footer>
  )
}
