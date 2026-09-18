import quality from '../assets/icons/benefit-quality.png'
import custom from '../assets/icons/benefit-custom.png'
import shipping from '../assets/icons/benefit-shipping.png'
import warranty from '../assets/icons/benefit-warranty.png'
import './BenefitsSection.css'

/* the icons sit on a shared baseline and keep their own heights,
   exactly as they do in the reference */
const BENEFITS = [
  {
    icon: quality,
    h: '3.73rem',
    title: 'Premium Quality',
    lines: ['Insulated, durable,', 'and built to perform.'],
  },
  {
    icon: custom,
    h: '3.9rem',
    title: 'Customized In House',
    lines: ['Personalized at the', 'Ice Shaker facility', 'in Southlake, TX.'],
  },
  {
    icon: shipping,
    h: '3.38rem',
    title: 'Fast Turnaround',
    lines: ['Most bulk orders ship', 'in 3–5 business days.'],
  },
  {
    icon: warranty,
    h: '4.02rem',
    title: 'Logo That Lasts',
    lines: ['Won’t chip, fade, or rub off.', 'Backed by a 1 year', 'limited warranty.'],
  },
]

export default function BenefitsSection() {
  return (
    <section className="benefits">
      <div className="shell">
        <ul className="benefits__row">
          {BENEFITS.map((b) => (
            <li className="benefit" key={b.title}>
              <div className="benefit__icon">
                <img src={b.icon} alt="" style={{ height: b.h }} />
              </div>
              <h3 className="benefit__title">{b.title}</h3>
              <p className="benefit__desc">
                {b.lines.map((l, i) => (
                  <span key={l}>
                    {l}
                    {i < b.lines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
