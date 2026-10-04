import { Link } from 'react-router-dom'
import { FOUNDER } from '../content'
import founderImg from '../assets/images/jessica-seated.webp'

function About() {
  return (
    <section className="section container about">
      <div>
        <h1>Meet the Founder</h1>
        <p className="founder-name">{FOUNDER.name}</p>
        <p className="eyebrow">{FOUNDER.role}</p>
        <p className="lead">{FOUNDER.intro}</p>
        {FOUNDER.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
        <Link className="button" to="/nellie">
          Meet Nellie
        </Link>
      </div>
      <img src={founderImg} alt={FOUNDER.name} />
    </section>
  )
}

export default About
