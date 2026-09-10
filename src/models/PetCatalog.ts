import type { Pet, PetGender, PetSize, PetSpecies } from '../types/Pet'

export interface PetFilters {
  species?: PetSpecies
  size?: PetSize
  gender?: PetGender
}

export class PetCatalog {
  private readonly pets: Pet[]

  constructor(pets: Pet[]) {
    this.pets = pets
  }

  getAll(): Pet[] {
    return this.pets
  }

  getById(id: number): Pet | undefined {
    return this.pets.find((pet) => pet.id === id)
  }

  filter(filters: PetFilters): Pet[] {
    return this.pets.filter((pet) => {
      if (filters.species && pet.species !== filters.species) return false
      if (filters.size && pet.size !== filters.size) return false
      if (filters.gender && pet.gender !== filters.gender) return false
      return true
    })
  }

  paginate(pets: Pet[], page: number, pageSize: number): Pet[] {
    const start = (page - 1) * pageSize
    return pets.slice(start, start + pageSize)
  }
}
