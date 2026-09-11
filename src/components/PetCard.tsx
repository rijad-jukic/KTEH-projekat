import { Link } from 'react-router-dom'
import type { Pet } from '../types/Pet'

interface PetCardProps {
  pet: Pet
}

const speciesLabel: Record<Pet['species'], string> = {
  pas: 'Pas',
  macka: 'Mačka',
}

function PetCard({ pet }: PetCardProps) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img
          src={pet.imageUrl}
          className="card-img-top"
          alt={pet.name}
          style={{ height: 200, objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{pet.name}</h5>
          <p className="card-text text-secondary mb-1">
            {speciesLabel[pet.species]} · {pet.breed}
          </p>
          <p className="card-text text-secondary small mb-3">
            {pet.ageYears} god. · {pet.location}
          </p>
          <Link to={`/ljubimci/${pet.id}`} className="btn btn-outline-success mt-auto">
            Vidi profil
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PetCard
