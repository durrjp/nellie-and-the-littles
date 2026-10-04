import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { SHOP_URL } from '../config'

const YEAR = new Date().getFullYear()

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/nellie', label: 'Meet Nellie' },
  { to: '/about', label: 'About Jessica' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link className="brand" to="/" onClick={onClick}>
      <strong>NELLIE</strong>
      <span>&amp; THE LITTLES</span>
    </Link>
  )
}

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="announcement">Meant to chew. Made to love.</div>

      <header className="site-header">
        <div className="container">
          <Brand onClick={closeMenu} />
          <nav id="site-nav" className={menuOpen ? 'nav open' : 'nav'}>
            {NAV.map(({ to, label }) => (
              <NavLink key={to} to={to} end onClick={closeMenu}>
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="header-actions">
            <a className="button" href={SHOP_URL} target="_blank" rel="noreferrer">
              Shop
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="site-nav"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <Brand />
          <div className="footer-links">
            {NAV.slice(1).map(({ to, label }) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
            <a href={SHOP_URL} target="_blank" rel="noreferrer">
              Shop
            </a>
          </div>
          <span>© {YEAR} Nellie &amp; the Littles. All rights reserved.</span>
        </div>
      </footer>
    </>
  )
}

export default Layout
