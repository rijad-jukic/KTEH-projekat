import { Link } from 'react-router-dom'
import PetCard from '../components/PetCard'
import { mockPets } from '../data/pets'

const featuredPets = mockPets.slice(0, 4)

function HomePage() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">Pronađi svog novog najboljeg druga</h1>
        <p className="lead text-secondary col-lg-8 mx-auto">
          Pregledaj ljubimce koji čekaju usvajanje, filtriraj ih po vrsti,
          veličini i polu, i pošalji upit za onog koji ti legne za oko.
        </p>
        <Link to="/ljubimci" className="btn btn-primary btn-lg rounded-pill mt-3">
          Pogledaj galeriju ljubimaca
        </Link>
      </div>

      <div id="neki-od-ljubimaca" style={{ scrollMarginTop: '90px' }}>
        <h2 className="h4 mb-3">Neki od ljubimaca</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
          {featuredPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
