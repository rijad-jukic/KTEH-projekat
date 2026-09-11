import { useEffect, useMemo, useState } from 'react'
import PetCard from '../components/PetCard'
import Pagination from '../components/Pagination'
import { mockPets } from '../data/pets'
import { PetCatalog } from '../models/PetCatalog'
import type { PetGender, PetSize, PetSpecies } from '../types/Pet'

const PAGE_SIZE = 6
const catalog = new PetCatalog(mockPets)

function GalleryPage() {
  const [species, setSpecies] = useState<PetSpecies | 'sve'>('sve')
  const [size, setSize] = useState<PetSize | 'sve'>('sve')
  const [gender, setGender] = useState<PetGender | 'sve'>('sve')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredPets = useMemo(
    () =>
      catalog.filter({
        species: species === 'sve' ? undefined : species,
        size: size === 'sve' ? undefined : size,
        gender: gender === 'sve' ? undefined : gender,
      }),
    [species, size, gender],
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [species, size, gender])

  const totalPages = Math.max(1, Math.ceil(filteredPets.length / PAGE_SIZE))
  const petsOnPage = catalog.paginate(filteredPets, currentPage, PAGE_SIZE)

  return (
    <div className="container py-4">
      <h1 className="mb-4">Galerija ljubimaca</h1>

      <div className="row g-3 mb-4">
        <div className="col-sm-4">
          <label className="form-label" htmlFor="filter-vrsta">
            Vrsta
          </label>
          <select
            id="filter-vrsta"
            className="form-select"
            value={species}
            onChange={(event) => setSpecies(event.target.value as PetSpecies | 'sve')}
          >
            <option value="sve">Sve vrste</option>
            <option value="pas">Psi</option>
            <option value="macka">Mačke</option>
          </select>
        </div>
        <div className="col-sm-4">
          <label className="form-label" htmlFor="filter-velicina">
            Veličina
          </label>
          <select
            id="filter-velicina"
            className="form-select"
            value={size}
            onChange={(event) => setSize(event.target.value as PetSize | 'sve')}
          >
            <option value="sve">Sve veličine</option>
            <option value="mali">Mala</option>
            <option value="srednji">Srednja</option>
            <option value="veliki">Velika</option>
          </select>
        </div>
        <div className="col-sm-4">
          <label className="form-label" htmlFor="filter-pol">
            Pol
          </label>
          <select
            id="filter-pol"
            className="form-select"
            value={gender}
            onChange={(event) => setGender(event.target.value as PetGender | 'sve')}
          >
            <option value="sve">Svi</option>
            <option value="musko">Mužjaci</option>
            <option value="zensko">Ženke</option>
          </select>
        </div>
      </div>

      {filteredPets.length === 0 ? (
        <p className="text-secondary">Nema ljubimaca koji odgovaraju izabranim filterima.</p>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-4">
          {petsOnPage.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default GalleryPage
