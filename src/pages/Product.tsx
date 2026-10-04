import { useState } from 'react'
import { Leaf } from 'lucide-react'
import { PRODUCT_URL } from '../config'
import { PRODUCT, TAGLINE } from '../content'
import frontImg from '../assets/images/product-front.webp'
import boxImg from '../assets/images/product-box.webp'
import backImg from '../assets/images/product-back-white.webp'
import sideImg from '../assets/images/product-side-white.webp'
import heldImg from '../assets/images/jessica-holding-nellie.webp'

const GALLERY = [
  { src: frontImg, alt: 'Nellie the Elephant teether, front view' },
  { src: backImg, alt: 'Nellie the Elephant teether, back view' },
  { src: sideImg, alt: 'Nellie the Elephant teether, side view' },
  { src: boxImg, alt: 'Nellie the Elephant teether in its box' },
  { src: heldImg, alt: 'Nellie the Elephant teether held in hand' },
]

function Product() {
  const [active, setActive] = useState(0)

  return (
    <section className="section container product">
      <div className="gallery">
        <img className="gallery-main" src={GALLERY[active].src} alt={GALLERY[active].alt} />
        <div className="gallery-thumbs">
          {GALLERY.map(({ src, alt }, i) => (
            <button
              key={src}
              type="button"
              className={i === active ? 'active' : undefined}
              onClick={() => setActive(i)}
              aria-label={alt}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="eyebrow">{TAGLINE}</p>
        <h1>{PRODUCT.name}</h1>
        {PRODUCT.intro.map((text) => (
          <p key={text}>{text}</p>
        ))}
        <a className="button" href={PRODUCT_URL} target="_blank" rel="noreferrer">
          Shop Nellie
        </a>

        <h2 className="product-subhead">Why you’ll love Nellie</h2>
        <ul className="leaf-list">
          {PRODUCT.features.map((feature) => (
            <li key={feature}>
              <Leaf size={16} strokeWidth={1.5} />
              {feature}
            </li>
          ))}
        </ul>

        <p className="note">{PRODUCT.signoff}</p>
        <p className="fine-print">{PRODUCT.safety}</p>
      </div>
    </section>
  )
}

export default Product
