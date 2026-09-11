import { Link, useParams } from 'react-router-dom'

function PetDetailsPage() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="container py-4">
      <h1 className="mb-3">Detalji ljubimca #{id}</h1>
      <p className="text-secondary">
        Ovde će se prikazivati svi podaci o odabranom ljubimcu
        (implementira se u Fazi 5).
      </p>
      <Link to={`/ljubimci/${id}/usvoji`} className="btn btn-primary rounded-pill">
        Pošalji upit za usvajanje
      </Link>
    </div>
  )
}

export default PetDetailsPage
