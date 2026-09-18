import black from '../assets/images/color-black.png'
import navy from '../assets/images/color-navy.png'
import white from '../assets/images/color-white.png'
import red from '../assets/images/color-red.png'
import caribbean from '../assets/images/color-caribbean-blue.png'
import './ColorSection.css'

const COLORS = [
  { img: black, name: 'Black' },
  { img: navy, name: 'Navy' },
  { img: white, name: 'White' },
  { img: red, name: 'Red' },
  { img: caribbean, name: 'Caribbean Blue' },
]

export default function ColorSection() {
  return (
    <section className="colors" id="colors">
      <div className="shell">
        <header className="colors__head">
          <h2 className="display colors__title">Pick Your Color</h2>
          <p className="colors__sub">
            Shown on the 26oz Ice Shaker. The Buford logo is applied with a high-quality, durable
            wrap so it looks great and lasts.
          </p>
        </header>

        <ul className="colors__row">
          {COLORS.map((c) => (
            <li className="swatch" key={c.name}>
              <div className="swatch__media">
                <img src={c.img} alt={`${c.name} 26oz Ice Shaker with the Buford Roofing logo`} loading="lazy" />
              </div>
              <p className="swatch__name">{c.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
