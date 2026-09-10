import { useParams } from 'react-router-dom'

function AdoptionRequestPage() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="container py-4">
      <h1 className="mb-3">Upit za usvajanje ljubimca #{id}</h1>
      <p className="text-secondary">
        Ovde će se nalaziti forma za slanje upita i potvrda o uspešnom slanju
        (implementira se u Fazi 6).
      </p>
    </div>
  )
}

export default AdoptionRequestPage
