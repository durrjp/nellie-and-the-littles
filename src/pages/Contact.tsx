import { AtSign, Clock, Mail, MapPin } from 'lucide-react'
import { CONTACT } from '../content'
import boxImg from '../assets/images/product-box.webp'

function Contact() {
  return (
    <section className="section container contact">
      <div>
        <h1>Contact Us</h1>
        <p className="lead">We’re here to help with anything you need.</p>

        <ul className="contact-details">
          <li>
            <Mail size={20} strokeWidth={1.5} />
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </li>
          <li>
            <AtSign size={20} strokeWidth={1.5} />
            <a href={`https://instagram.com/${CONTACT.instagram}`} target="_blank" rel="noreferrer">
              @{CONTACT.instagram} on Instagram
            </a>
          </li>
          <li>
            <MapPin size={20} strokeWidth={1.5} />
            {CONTACT.location}
          </li>
          <li>
            <Clock size={20} strokeWidth={1.5} />
            {CONTACT.hours}
          </li>
        </ul>

        <a className="button" href={`mailto:${CONTACT.email}`}>
          Email us
        </a>

        <p className="fine-print">
          We typically respond within 24-48 hours. If you have any concerns about safety or product
          quality, please reach out. We’re always happy to help.
        </p>
      </div>
      <img src={boxImg} alt="Nellie the Elephant teether in its box" />
    </section>
  )
}

export default Contact
