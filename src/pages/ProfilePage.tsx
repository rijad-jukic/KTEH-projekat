import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function ProfilePage() {
  const { currentUser, logout } = useAuth()

  if (!currentUser) {
    return (
      <div className="container py-5 text-center">
        <h1 className="mb-3">Profil</h1>
        <p className="text-secondary mb-4">
          Nisi prijavljen. Prijavi se ili napravi nalog da bi video svoj profil.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/login" className="btn btn-primary rounded-pill">
            Prijavi se
          </Link>
          <Link to="/register" className="btn btn-outline-dark rounded-pill">
            Registruj se
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <div className="card mx-auto" style={{ maxWidth: 480 }}>
        <div className="card-body p-4">
          <h1 className="h4 mb-4">Tvoji podaci na jednom mestu</h1>
          <p className="mb-1">
            <strong>Korisničko ime:</strong>
          </p>
          <p className="text-secondary mb-3">{currentUser.username}</p>
          <p className="mb-1">
            <strong>Email adresa</strong>
          </p>
          <p className="text-secondary mb-4">{currentUser.email}</p>
          <button
            type="button"
            className="btn btn-outline-dark rounded-pill"
            onClick={logout}
          >
            Odjavi se
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
