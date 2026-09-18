import heroBottles from '../assets/images/hero-bottles.jpg'
import bufordLogo from '../assets/logos/buford-logo-white.png'
import envelope from '../assets/icons/icon-envelope-white.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media">
        <img
          src={heroBottles}
          alt="Buford Roofing branded Ice Shaker bottles on a stone wall in front of a home"
        />
        <span className="hero__scrim" />
      </div>

      <div className="hero__inner shell">
        <div className="hero__content">
          <img className="hero__logo" src={bufordLogo} alt="Buford Roofing &amp; Construction Inc." />

          <p className="kicker hero__kicker">Built Stronger Together</p>

          <h1 className="hero__title">
            Your Logo.
            <br />
            The Ultimate Bottle.
          </h1>

          <p className="hero__copy">
            Put the Buford Roofing &amp; Construction brand on the insulated bottle from Shark Tank.
            Built for your customers, your crew, and your community.
          </p>

          <div className="hero__actions">
            <a className="btn btn--blue hero__btn hero__btn--primary" href="#quote">
              Request a Quote
            </a>
            <a className="btn btn--outline hero__btn hero__btn--ghost" href="#bottles">
              See Your Bottles
            </a>
          </div>

          <p className="hero__email">
            <img src={envelope} alt="" />
            <span>
              Questions? Email <strong>sales@iceshaker.com</strong>
              <br />
              and the Ice Shaker team will get back to you fast.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
