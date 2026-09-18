import { useState } from 'react'
import iceShaker26 from '../assets/images/bottle-26oz-ice-shaker.png'
import skinny20 from '../assets/images/bottle-20oz-skinny-shaker.png'
import flex26 from '../assets/images/bottle-26oz-flex.png'
import legend40 from '../assets/images/bottle-40oz-legend-tumbler.png'
import ProductModal from './ProductModal'
import './ProductSection.css'

export type Bottle = {
  img: string
  name: string
  desc: [string, string]
  capacity: string
  detail: string
}

const BOTTLES: Bottle[] = [
  {
    img: iceShaker26,
    name: '26oz Ice Shaker',
    desc: ['The original. As seen', 'on Shark Tank.'],
    capacity: '26 oz capacity',
    detail: 'Shaker lid with a fold-down carry handle.',
  },
  {
    img: skinny20,
    name: '20oz Skinny Shaker',
    desc: ['Slim fit for', 'cup holders.'],
    capacity: '20 oz capacity',
    detail: 'Slim profile that drops into a standard cup holder.',
  },
  {
    img: flex26,
    name: '26oz Flex Bottle',
    desc: ['Everyday carry', 'with a flex lid.'],
    capacity: '26 oz capacity',
    detail: 'Flex lid with a carry loop for everyday use.',
  },
  {
    img: legend40,
    name: '40oz Legend Tumbler',
    desc: ['Big tumbler with', 'handle and straw.'],
    capacity: '40 oz capacity',
    detail: 'Large tumbler with a side handle and a straw.',
  },
]

export default function ProductSection() {
  const [active, setActive] = useState<Bottle | null>(null)

  return (
    <section className="products" id="bottles">
      <div className="shell">
        <header className="products__head">
          <h2 className="display products__title">Choose Your Bottle</h2>
          <p className="products__sub">
            The Buford logo looks great on every Ice Shaker. Here are some of the most popular
            options.
          </p>
        </header>

        <ul className="products__grid">
          {BOTTLES.map((b) => (
            <li className="pcard" key={b.name}>
              <div className="pcard__media">
                <img src={b.img} alt={`${b.name} with the Buford Roofing logo`} loading="lazy" />
              </div>
              <h3 className="pcard__name">{b.name}</h3>
              <p className="pcard__desc">
                {b.desc[0]}
                <br />
                {b.desc[1]}
              </p>
              <button
                type="button"
                className="pcard__hit"
                aria-label={`View ${b.name} details`}
                onClick={() => setActive(b)}
              />
            </li>
          ))}
        </ul>
      </div>

      <ProductModal bottle={active} onClose={() => setActive(null)} />
    </section>
  )
}
