import { Link } from 'react-router-dom'
import { Droplets, Hand, Leaf, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react'
import { PRODUCT_URL } from '../config'
import { FOUNDER } from '../content'
import heroImg from '../assets/images/jessica-laughing.webp'
import productImg from '../assets/images/jessica-holding-nellie.webp'
import founderImg from '../assets/images/jessica-portrait.webp'

const BADGES = [
  { icon: Leaf, label: '100% Food-Grade Silicone' },
  { icon: ShieldCheck, label: 'BPA-Free' },
  { icon: Stethoscope, label: 'Designed by a Family Nurse Practitioner' },
  { icon: Droplets, label: 'Dishwasher Safe' },
]

const REASONS = [
  { icon: ShieldCheck, title: 'Safe & Non-Toxic', text: 'BPA-free, PVC-free, and phthalate-free silicone.' },
  { icon: Hand, title: 'Easy to Hold', text: 'Perfectly sized for small hands to grasp.' },
  { icon: Leaf, title: 'Gentle Textures', text: 'Raised details for little gums to explore.' },
  { icon: Sparkles, title: 'Adorable Design', text: 'Just as cute as it is functional.' },
]

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>
            Meant to Chew.
            <br />
            Made to Love.
          </h1>
          <p>Thoughtfully designed for little hands. Safe, soothing, and made for every milestone.</p>
          <a className="button" href={PRODUCT_URL} target="_blank" rel="noreferrer">
            Shop Nellie
          </a>
        </div>
        <img src={heroImg} alt="Jessica Adams, founder of Nellie & the Littles, laughing" />
      </section>

      <div className="container">
        <ul className="badges">
          {BADGES.map(({ icon: Icon, label }) => (
            <li key={label}>
              <Icon size={30} strokeWidth={1.25} />
              {label}
            </li>
          ))}
        </ul>
      </div>

      <section className="section container">
        <h2 className="section-title">Why Parents Love Nellie</h2>
        <div className="reasons">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <Icon size={34} strokeWidth={1.25} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="container">
        <section className="feature">
          <img src={productImg} alt="Nellie the Elephant silicone teether held in hand" />
          <div className="feature-copy">
            <h2>Nellie the Elephant™ Teether</h2>
            <p>A soothing silicone teether designed for little wild hearts.</p>
            <Link className="button" to="/nellie">
              Meet Nellie
            </Link>
          </div>
        </section>

        <section className="feature reverse">
          <img src={founderImg} alt="Jessica Adams, FNP-C" />
          <div className="feature-copy">
            <h2>Designed with Love by Jessica Adams, FNP-C</h2>
            <p>{FOUNDER.paragraphs[0]}</p>
            <Link className="button" to="/about">
              Meet Jessica
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
