import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Home from './pages/Home'
import Product from './pages/Product'

function NotFound() {
  return (
    <section className="section container">
      <h1>Page not found</h1>
      <p>The link may be incorrect, or the page has been removed.</p>
      <Link className="button" to="/">
        Back to home
      </Link>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nellie" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
