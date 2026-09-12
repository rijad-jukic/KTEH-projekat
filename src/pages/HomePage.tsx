import { Link } from 'react-router-dom'
import heroImage from '../assets/images/hero-pets.png'
import AskQuestionSection from '../components/AskQuestionSection'
import PetCard from '../components/PetCard'
import { mockPets } from '../data/pets'

const featuredPets = mockPets.slice(0, 4)

function HomePage() {
  return (
    <div>
      <section className="bg-dark text-white">
        <div className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold mb-3">
                Pronađi svog novog <span className="text-primary">najboljeg</span> prijatelja
              </h1>
              <p className="mb-4 opacity-75">
                Usvoji ljubimca danas i pruži mu siguran, srećan i topao dom ispunjen
                ljubavlju, pažnjom i brigom!
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/ljubimci" className="btn btn-primary rounded-pill px-4">
                  Galerija ljubimaca
                </Link>
                <Link to="/o-nama" className="btn btn-outline-light rounded-pill px-4">
                  O nama
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src={heroImage}
                alt="Mačka i fenek lisica"
                className="img-fluid"
                style={{ maxHeight: 320 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container col-lg-8 text-center">
          <h2 className="text-uppercase text-secondary fw-bold small mb-3">
            Upoznajte naš rad
          </h2>
          <p className="fs-4 fw-semibold">
            UsvojiMe je mesto gde ljubimci dobijaju drugu šansu, a ljudi pravog
            prijatelja za celi život. Spajamo napuštene i nezbrinute životinje sa
            toplim domovima, donoseći sigurnost, ljubav i poverenje na obe strane. Jer
            svaki ljubimac zaslužuje svoj sretan dom.
          </p>
        </div>
      </section>

      <div className="container py-5">
        <div id="neki-od-ljubimaca" style={{ scrollMarginTop: '90px' }}>
          <h2 className="h4 mb-3">Neki od ljubimaca</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
            {featuredPets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        </div>
      </div>

      <AskQuestionSection />
    </div>
  )
}

export default HomePage
