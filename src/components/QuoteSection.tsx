import { useState } from 'react'
import type { FormEvent } from 'react'
import envelope from '../assets/icons/icon-envelope-white.png'
import clock from '../assets/icons/icon-clock-white.png'
import './QuoteSection.css'

export default function QuoteSection() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="quote" id="quote">
      <div className="quote__inner shell">
        <div className="quote__copy">
          <p className="kicker quote__kicker">Ready to Get Started?</p>

          <h2 className="quote__title">
            Let&rsquo;s Put Your Logo
            <br />
            on the Ultimate Bottle.
          </h2>

          <p className="quote__lede">
            Send your logo and the Ice Shaker sales team will reply with wholesale pricing and a
            production mockup, usually within 1 business day.
          </p>

          <p className="quote__contact">
            <img src={envelope} alt="" />
            <a href="mailto:sales@iceshaker.com">sales@iceshaker.com</a>
          </p>

          <p className="quote__contact quote__contact--hours">
            <img src={clock} alt="" />
            <span>
              Customer service available
              <br />
              Monday &ndash; Friday, 8:00am to 4:00pm CST.
            </span>
          </p>
        </div>

        <div className="quote__card">
          <h3 className="quote__cardTitle">Request Your Bulk Quote</h3>

          <form className="qform" onSubmit={handleSubmit}>
            <input className="qform__field" type="text" name="name" placeholder="Name" required />
            <input className="qform__field" type="text" name="company" placeholder="Company Name" />
            <input className="qform__field" type="email" name="email" placeholder="Email" required />
            <textarea
              className="qform__field qform__field--area"
              name="bottles"
              rows={2}
              placeholder="Bottle Type(s) &amp; Quantity"
            />

            <div className="qform__upload">
              <svg className="qform__clip" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  d="M20.5 11.5l-8.3 8.3a5 5 0 01-7.1-7.1l8.8-8.8a3.3 3.3 0 114.7 4.7l-8.8 8.8a1.6 1.6 0 11-2.3-2.3l7.9-7.9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <label className="qform__uploadLabel" htmlFor="logo">
                Attach Your Logo{' '}
                <span>(PNG preferred)</span>
              </label>
              <input className="qform__file" id="logo" type="file" name="logo" accept="image/*" />
            </div>

            <button className="qform__submit" type="submit">
              {sent ? 'Request Sent' : 'Submit Request'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
