import { SHOP_URL } from './config'

const YEAR = new Date().getFullYear()

function App() {
  return (
    <>
      <header className="site-header">
        <span className="brand">Nellie and the Littles</span>
        <a className="button" href={SHOP_URL} target="_blank" rel="noreferrer">
          Shop
        </a>
      </header>

      <main>
        <section className="hero">
          <h1>Nellie and the Littles</h1>
          <p>Placeholder copy. Design and content to come.</p>
          <a className="button" href={SHOP_URL} target="_blank" rel="noreferrer">
            Shop now
          </a>
        </section>
      </main>

      <footer className="site-footer">
        © {YEAR} Nellie and the Littles
      </footer>
    </>
  )
}

export default App
