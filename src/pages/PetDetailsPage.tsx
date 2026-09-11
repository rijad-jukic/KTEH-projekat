import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { mockPets } from '../data/pets'
import { PetCatalog } from '../models/PetCatalog'
import type { PetGender, PetSize } from '../types/Pet'

const catalog = new PetCatalog(mockPets)

const genderLabel: Record<PetGender, string> = {
  musko: 'Muški',
  zensko: 'Ženski',
}

const sizeLabel: Record<PetSize, string> = {
  mali: 'Mala',
  srednji: 'Srednja',
  veliki: 'Velika',
}

function PetDetailsPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const pet = id ? catalog.getById(Number(id)) : undefined

  useEffect(() => {
    if (!pet) {
      navigate('/ljubimci', { replace: true })
    }
  }, [pet, navigate])

  if (!pet) {
    return null
  }

  return (
    <div className="container py-4">
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <img
            src={pet.imageUrl}
            alt={pet.name}
            className="img-fluid rounded-4 w-100"
            style={{ objectFit: 'cover', maxHeight: 420 }}
          />
        </div>
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h1 className="card-title mb-4">{pet.name}</h1>
              <ul className="list-unstyled fs-5 mb-4">
                <li>
                  <strong>Rasa:</strong> {pet.breed}
                </li>
                <li>
                  <strong>Pol:</strong> {genderLabel[pet.gender]}
                </li>
                <li>
                  <strong>Godine:</strong> {pet.ageYears}
                </li>
                <li>
                  <strong>Veličina:</strong> {sizeLabel[pet.size]}
                </li>
                <li>
                  <strong>Lokacija:</strong> {pet.location}
                </li>
              </ul>
              <p className="mb-0">{pet.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h2 className="h4 text-center mb-2">Zašto želiš usvojiti ovog ljubimca?</h2>
        <p className="text-secondary text-center col-lg-8 mx-auto">
          Napiši nekoliko rečenica o tome zašto želiš da usvojiš {pet.name} i kakav dom
          možeš da mu pružiš. Forma za slanje upita dolazi u sledećoj fazi.
        </p>
      </div>
    </div>
  )
}

export default PetDetailsPage
