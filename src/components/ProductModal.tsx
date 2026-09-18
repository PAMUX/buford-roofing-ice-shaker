import { useEffect, useRef } from 'react'
import type { Bottle } from './ProductSection'
import './ProductModal.css'

type Props = {
  bottle: Bottle | null
  onClose: () => void
}

const SHARED_DETAILS = [
  'Insulated stainless steel, built to perform.',
  'Personalized in house at the Ice Shaker facility in Southlake, TX.',
  'Logo wrap won’t chip, fade, or rub off. Backed by a 1 year limited warranty.',
  'Most bulk orders ship in 3–5 business days.',
]

export default function ProductModal({ bottle, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!bottle) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [bottle, onClose])

  if (!bottle) return null

  return (
    <div className="pm" role="dialog" aria-modal="true" aria-label={bottle.name} onClick={onClose}>
      <div className="pm__panel" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeRef}
          type="button"
          className="pm__close"
          aria-label="Close"
          onClick={onClose}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M5 5l14 14M19 5L5 19"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="pm__media">
          <img src={bottle.img} alt={`${bottle.name} with the Buford Roofing logo`} />
        </div>

        <div className="pm__body">
          <p className="kicker pm__kicker">Choose Your Bottle</p>
          <h3 className="pm__name">{bottle.name}</h3>
          <span className="pm__rule" />
          <p className="pm__lede">
            {bottle.desc[0]} {bottle.desc[1]}
          </p>

          <ul className="pm__specs">
            <li>
              <strong>{bottle.capacity}</strong>
            </li>
            <li>{bottle.detail}</li>
            {SHARED_DETAILS.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>

          <a className="btn btn--blue pm__cta" href="#quote" onClick={onClose}>
            Request a Quote
          </a>
          <p className="pm__note">
            Send your logo and the Ice Shaker sales team will reply with wholesale pricing and a
            production mockup.
          </p>
        </div>
      </div>
    </div>
  )
}
