import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites mora biti korišćen unutar FavoritesProvider-a.')
  }
  return context
}
