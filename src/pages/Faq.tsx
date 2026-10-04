import { Link } from 'react-router-dom'
import { FAQS } from '../content'

function Faq() {
  return (
    <section className="section container narrow">
      <h1 className="section-title">Frequently Asked Questions</h1>
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
    </section>
  )
}

export default Faq
