import { createContext, useEffect, useState, type ReactNode } from 'react'

const STORAGE_KEY = 'usvojime_favorite_pets'

export interface FavoritesContextValue {
  favoriteIds: number[]
  isFavorite: (petId: number) => boolean
  toggleFavorite: (petId: number) => void
}

export const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined)

function readStoredFavorites(): number[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as number[]) : []
  } catch {
    return []
  }
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>(readStoredFavorites)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds))
  }, [favoriteIds])

  const isFavorite = (petId: number) => favoriteIds.includes(petId)

  const toggleFavorite = (petId: number) => {
    setFavoriteIds((prev) =>
      prev.includes(petId) ? prev.filter((existingId) => existingId !== petId) : [...prev, petId],
    )
  }

  return (
    <FavoritesContext.Provider value={{ favoriteIds, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}
