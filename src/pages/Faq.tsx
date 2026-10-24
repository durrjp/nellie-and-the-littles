import { Link } from 'react-router-dom'
import { FAQS } from '../content'
import logoImg from '../assets/images/nellie-logo-transparent.webp'

function Faq() {
  return (
    <section className="section container faq-page">
      <div>
        <h1>Frequently Asked Questions</h1>
        <div className="faq">
          {FAQS.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
        <p className="faq-more">
          Still have a question? <Link to="/contact">Get in touch</Link>.
        </p>
      </div>
      <img className="faq-logo" src={logoImg} alt="Nellie the Elephant logo" />
    </section>
  )
}

export default Faq
