import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-4 fw-bold">404</h1>
      <p className="lead">Stranica koju tražiš ne postoji.</p>
      <Link to="/" className="btn btn-primary rounded-pill mt-3">
        Nazad na početnu
      </Link>
    </div>
  )
}

export default NotFoundPage
