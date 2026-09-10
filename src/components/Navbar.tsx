import { NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `nav-link${isActive ? ' active fw-semibold' : ''}`

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          🐾 Usvoji ljubimca
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#glavni-meni"
          aria-controls="glavni-meni"
          aria-expanded="false"
          aria-label="Otvori meni"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="glavni-meni">
          <ul className="navbar-nav ms-auto">
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
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
