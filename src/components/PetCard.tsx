import { Link } from 'react-router-dom'
import { useFavorites } from '../hooks/useFavorites'
import type { Pet } from '../types/Pet'

interface PetCardProps {
  pet: Pet
}

const speciesLabel: Record<Pet['species'], string> = {
  pas: 'Pas',
  macka: 'Mačka',
}

function PetCard({ pet }: PetCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorite = isFavorite(pet.id)

  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <div className="position-relative">
          <img
            src={pet.imageUrl}
            className="card-img-top"
            alt={pet.name}
            style={{ height: 200, objectFit: 'cover' }}
          />
          <button
            type="button"
            className="btn btn-light btn-sm rounded-circle position-absolute top-0 end-0 m-2"
            onClick={() => toggleFavorite(pet.id)}
            aria-pressed={favorite}
            aria-label={
              favorite ? `Ukloni ${pet.name} iz omiljenih` : `Dodaj ${pet.name} u omiljene`
            }
          >
            {favorite ? '♥' : '♡'}
          </button>
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{pet.name}</h5>
          <p className="card-text text-secondary mb-1">
            {speciesLabel[pet.species]} · {pet.breed}
          </p>
          <p className="card-text text-secondary small mb-3">
            {pet.ageYears} god. · {pet.location}
          </p>
          <Link to={`/ljubimci/${pet.id}`} className="btn btn-primary rounded-pill mt-auto">
            Usvoji me
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PetCard
