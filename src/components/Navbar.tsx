import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useFavorites } from '../hooks/useFavorites'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `nav-link${isActive ? ' active fw-semibold' : ''}`

function Navbar() {
  const location = useLocation()
  const { favoriteIds } = useFavorites()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          🐾 UsvojiMe
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-controls="glavni-meni"
          aria-expanded={isOpen}
          aria-label="Otvori meni"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${isOpen ? ' show' : ''}`} id="glavni-meni">
          <ul className="navbar-nav ms-auto align-items-md-center">
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/" end>
                Početna
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/ljubimci">
                Galerija ljubimaca
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/o-nama">
                O nama
              </NavLink>
            </li>
            <li className="nav-item">
              <span
                className="nav-link text-white-50"
                aria-label={`${favoriteIds.length} omiljenih ljubimaca`}
              >
                ♥ {favoriteIds.length}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
