import type { AdoptionRequest } from '../types/AdoptionRequest'

const STORAGE_KEY = 'usvojime_adoption_requests'

export class AdoptionRequestStore {
  private read(): AdoptionRequest[] {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    try {
      return JSON.parse(raw) as AdoptionRequest[]
    } catch {
      return []
    }
  }

  private write(requests: AdoptionRequest[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(requests))
  }

  getAll(): AdoptionRequest[] {
    return this.read()
  }

  getByPetId(petId: number): AdoptionRequest[] {
    return this.read().filter((request) => request.petId === petId)
  }

  add(request: AdoptionRequest): void {
    const current = this.read()
    current.push(request)
    this.write(current)
  }
}
