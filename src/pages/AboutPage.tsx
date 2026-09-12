import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <div>
      <section className="bg-dark text-white text-center">
        <div className="container col-lg-8 py-5">
          <h1 className="display-5 fw-bold mb-3">
            Upoznaj <span className="text-primary">naš rad</span> i našu ideju
          </h1>
          <p className="mb-4 opacity-75">
            UsvojiMe je mesto gde napušteni i nezbrinuti ljubimci dobijaju novu priliku
            za život, a ljudi pronalaze iskrenog prijatelja za svaki dan.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link to="/ljubimci" className="btn btn-primary rounded-pill px-4">
              Galerija ljubimaca
            </Link>
            <Link to="/" className="btn btn-outline-light rounded-pill px-4">
              Početna stranica
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
