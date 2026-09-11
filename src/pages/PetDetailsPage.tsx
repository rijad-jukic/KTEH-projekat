import { useEffect, useState, type FormEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FormField from '../components/FormField'
import Modal from '../components/Modal'
import { useFavorites } from '../hooks/useFavorites'
import { mockPets } from '../data/pets'
import { AdoptionRequestStore } from '../models/AdoptionRequestStore'
import { PetCatalog } from '../models/PetCatalog'
import type { AdoptionRequest } from '../types/AdoptionRequest'
import type { PetGender, PetSize } from '../types/Pet'

const catalog = new PetCatalog(mockPets)
const requestStore = new AdoptionRequestStore()

const genderLabel: Record<PetGender, string> = {
  musko: 'Muški',
  zensko: 'Ženski',
}

const sizeLabel: Record<PetSize, string> = {
  mali: 'Mala',
  srednji: 'Srednja',
  veliki: 'Velika',
}

interface FormValues {
  applicantName: string
  email: string
  message: string
}

const initialValues: FormValues = { applicantName: '', email: '', message: '' }

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function PetDetailsPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const pet = id ? catalog.getById(Number(id)) : undefined
  const { isFavorite, toggleFavorite } = useFavorites()

  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<Partial<FormValues>>({})
  const [showConfirmation, setShowConfirmation] = useState(false)

  useEffect(() => {
    if (!pet) {
      navigate('/ljubimci', { replace: true })
    }
  }, [pet, navigate])

  if (!pet) {
    return null
  }

  const updateField = (field: keyof FormValues) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  const validate = (): boolean => {
    const nextErrors: Partial<FormValues> = {}
    if (!values.applicantName.trim()) {
      nextErrors.applicantName = 'Unesi svoje ime i prezime.'
    }
    if (!values.email.trim() || !isValidEmail(values.email)) {
      nextErrors.email = 'Unesi ispravnu email adresu.'
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      nextErrors.message = 'Napiši bar par rečenica (minimum 10 karaktera).'
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!validate()) return

    const request: AdoptionRequest = {
      id: crypto.randomUUID(),
      petId: pet.id,
      applicantName: values.applicantName.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
      submittedAt: new Date().toISOString(),
    }
    requestStore.add(request)

    setValues(initialValues)
    setErrors({})
    setShowConfirmation(true)
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
              <div className="d-flex justify-content-between align-items-start mb-4">
                <h1 className="card-title mb-0">{pet.name}</h1>
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-circle"
                  onClick={() => toggleFavorite(pet.id)}
                  aria-pressed={isFavorite(pet.id)}
                  aria-label={
                    isFavorite(pet.id)
                      ? `Ukloni ${pet.name} iz omiljenih`
                      : `Dodaj ${pet.name} u omiljene`
                  }
                >
                  {isFavorite(pet.id) ? '♥' : '♡'}
                </button>
              </div>
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

      <div className="col-lg-8 mx-auto mb-5">
        <h2 className="h4 text-center mb-2">Zašto želiš usvojiti ovog ljubimca?</h2>
        <p className="text-secondary text-center mb-4">
          Napiši nekoliko rečenica o tome zašto želiš da usvojiš {pet.name} i kakav dom
          možeš da mu pružiš. Tvoj odgovor nam pomaže da osiguramo da ljubimac ide u
          sigurnu i brižnu sredinu.
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <FormField
            id="applicantName"
            label="Ime i prezime"
            value={values.applicantName}
            onChange={updateField('applicantName')}
            placeholder="Unesi svoje ime i prezime"
            error={errors.applicantName}
          />
          <FormField
            id="email"
            label="Email adresa"
            type="email"
            value={values.email}
            onChange={updateField('email')}
            placeholder="ime@primer.com"
            error={errors.email}
          />
          <FormField
            id="message"
            label="Tvoja poruka"
            type="textarea"
            value={values.message}
            onChange={updateField('message')}
            placeholder="Tvoj razlog zašto želiš da usvojiš ovog ljubimca..."
            error={errors.message}
          />
          <div className="text-center">
            <button type="submit" className="btn btn-primary rounded-pill px-4">
              Pošalji
            </button>
          </div>
        </form>
      </div>

      <Modal
        show={showConfirmation}
        title="Uspešno ste poslali upit!"
        onClose={() => setShowConfirmation(false)}
      >
        <p className="mb-0">
          Uskoro ćete dobiti odgovor na vaš upit za usvajanje ljubimca {pet.name}. Hvala
          vam na ukazanom poverenju.
        </p>
      </Modal>
    </div>
  )
}

export default PetDetailsPage
