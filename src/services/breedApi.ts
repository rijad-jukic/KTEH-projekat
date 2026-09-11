import type { BreedInfo } from '../types/BreedInfo'
import type { Pet } from '../types/Pet'

interface RawBreed {
  name: string
  temperament?: string
  life_span?: string
  origin?: string
  reference_image_id?: string
}

const DOG_API_CONFIG = {
  searchUrl: 'https://api.thedogapi.com/v1/breeds/search',
  imageBaseUrl: 'https://cdn2.thedogapi.com/images',
  apiKey: import.meta.env.VITE_DOG_API_KEY,
}

const CAT_API_CONFIG = {
  searchUrl: 'https://api.thecatapi.com/v1/breeds/search',
  imageBaseUrl: 'https://cdn2.thecatapi.com/images',
  apiKey: import.meta.env.VITE_CAT_API_KEY,
}

export class MissingApiKeyError extends Error {
  constructor() {
    super('Nedostaje API ključ za spoljni servis.')
    this.name = 'MissingApiKeyError'
  }
}

function mapBreed(raw: RawBreed, imageBaseUrl: string): BreedInfo {
  return {
    name: raw.name,
    temperament: raw.temperament,
    lifeSpan: raw.life_span,
    origin: raw.origin,
    referenceImageUrl: raw.reference_image_id
      ? `${imageBaseUrl}/${raw.reference_image_id}.jpg`
      : undefined,
  }
}

export async function fetchBreedInfo(pet: Pet): Promise<BreedInfo | null> {
  const config = pet.species === 'pas' ? DOG_API_CONFIG : CAT_API_CONFIG

  if (!config.apiKey) {
    throw new MissingApiKeyError()
  }

  const response = await fetch(`${config.searchUrl}?q=${encodeURIComponent(pet.breedApiQuery)}`, {
    headers: { 'x-api-key': config.apiKey },
  })

  if (!response.ok) {
    throw new Error('Neuspešno preuzimanje podataka o rasi.')
  }

  const results = (await response.json()) as RawBreed[]
  return results.length > 0 ? mapBreed(results[0], config.imageBaseUrl) : null
}
