export type PetSpecies = 'pas' | 'macka'
export type PetSize = 'mali' | 'srednji' | 'veliki'
export type PetGender = 'musko' | 'zensko'

export interface Pet {
  id: number
  name: string
  species: PetSpecies
  breed: string
  gender: PetGender
  ageYears: number
  size: PetSize
  location: string
  description: string
  imageUrl: string
  /** Naziv rase na engleskom, koristi se za pretragu na TheDogAPI/TheCatAPI. */
  breedApiQuery: string
}
