import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="container py-5">
      <div className="text-center">
        <h1 className="display-5 fw-bold">Pronađi svog novog najboljeg druga</h1>
        <p className="lead text-secondary col-lg-8 mx-auto">
          Pregledaj ljubimce koji čekaju usvajanje, filtriraj ih po vrsti,
          veličini i starosti, i pošalji upit za onog koji ti legne za oko.
        </p>
        <Link to="/ljubimci" className="btn btn-primary btn-lg mt-3">
          Pogledaj galeriju ljubimaca
        </Link>
      </div>
    </div>
  )
}

export default HomePage
