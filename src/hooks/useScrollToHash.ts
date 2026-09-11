import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const element = document.querySelector(location.hash)
    element?.scrollIntoView({ behavior: 'smooth' })
  }, [location])
}
