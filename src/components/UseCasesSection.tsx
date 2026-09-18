import customers from '../assets/images/use-customers.jpg'
import crew from '../assets/images/use-crew.jpg'
import './UseCasesSection.css'

const PANELS = [
  {
    img: customers,
    alt: 'A hand holding a navy Buford Roofing Ice Shaker bottle outside a home',
    frame: 'is-customers',
    kicker: 'For Your Customers',
    title: ['Leave a Lasting', 'Impression'],
    items: [
      ['Perfect for estimates, inspections', 'and final walkthroughs'],
      ['Keeps Buford on their mind', 'long after the job is done'],
      ['Great for referrals and', 'word of mouth'],
    ],
  },
  {
    img: crew,
    alt: 'A Buford Roofing crew member holding a white branded Ice Shaker bottle on a job site',
    frame: 'is-crew',
    kicker: 'For Your Crew & Team',
    title: ['Fuel the Team', 'That Builds'],
    items: [
      ['Crew appreciation they’ll', 'actually use every day'],
      ['A great gift for new hires'],
      ['Helps keep your team hydrated', 'on the job site'],
    ],
  },
]

function CheckIcon() {
  return (
    <svg className="uc__check" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <circle cx="16" cy="16" r="14.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M9.5 16.4l4.6 4.5 8.6-9.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function UseCasesSection() {
  return (
    <section className="usecases" id="use-cases">
      {PANELS.map((p) => (
        <article className="uc" key={p.kicker}>
          <img className={`uc__img ${p.frame}`} src={p.img} alt={p.alt} loading="lazy" />
          <span className="uc__scrim" />
          <div className="uc__content">
            <p className="kicker uc__kicker">{p.kicker}</p>
            <h2 className="uc__title">
              {p.title[0]}
              <br />
              {p.title[1]}
            </h2>
            <ul className="uc__list">
              {p.items.map((lines) => (
                <li key={lines[0]}>
                  <CheckIcon />
                  <span>
                    {lines[0]}
                    {lines[1] ? <br /> : null}
                    {lines[1]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  )
}
