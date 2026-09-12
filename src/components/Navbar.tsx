import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/kteh-logo.png'
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
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="UsvojiMe" height={32} />
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
          <ul className="navbar-nav ms-auto align-items-lg-center">
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
              <NavLink className={navLinkClass} to="/profil">
                Profil
              </NavLink>
            </li>
            <li className="nav-item">
              <span
                className="nav-link"
                aria-label={`${favoriteIds.length} omiljenih ljubimaca`}
              >
                ♥ {favoriteIds.length}
              </span>
            </li>
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <Link to="/#neki-od-ljubimaca" className="btn btn-dark rounded-pill">
                Usvoji Ljubimca
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
