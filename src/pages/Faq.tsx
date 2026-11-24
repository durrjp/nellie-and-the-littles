import { Link } from 'react-router-dom'
import SpecList from '../components/SpecList'
import { FAQ_SIGNOFF, FAQS } from '../content'
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
              <div className="faq-answer">
                {answer.map((block, i) =>
                  typeof block === 'string' ? <p key={i}>{block}</p> : <SpecList key={i} specs={block} />,
                )}
              </div>
            </details>
          ))}
        </div>
        <p className="faq-more">
          Still have a question? <Link to="/contact">Get in touch</Link>.
        </p>
        <div className="faq-signoff">
          {FAQ_SIGNOFF.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p className="letter-signature">{FAQ_SIGNOFF.signature}</p>
        </div>
      </div>
      <img className="faq-logo" src={logoImg} alt="Nellie the Elephant logo" />
    </section>
  )
}

export default Faq
