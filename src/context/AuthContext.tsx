import { createContext, useEffect, useState, type ReactNode } from 'react'
import { UserStore } from '../models/UserStore'
import type { User } from '../types/User'

const SESSION_KEY = 'usvojime_current_user'
const userStore = new UserStore()

interface AuthResult {
  success: boolean
  error?: string
}

export interface AuthContextValue {
  currentUser: User | null
  register: (user: User) => AuthResult
  login: (username: string, password: string) => AuthResult
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    const username = localStorage.getItem(SESSION_KEY)
    if (!username) return
    const user = userStore.findByUsername(username)
    if (user) setCurrentUser(user)
  }, [])

  const register = (user: User): AuthResult => {
    if (userStore.findByUsername(user.username)) {
      return { success: false, error: 'Korisničko ime je već zauzeto.' }
    }
    userStore.add(user)
    localStorage.setItem(SESSION_KEY, user.username)
    setCurrentUser(user)
    return { success: true }
  }

  const login = (username: string, password: string): AuthResult => {
    const user = userStore.findByUsername(username)
    if (!user || user.password !== password) {
      return { success: false, error: 'Pogrešno korisničko ime ili lozinka.' }
    }
    localStorage.setItem(SESSION_KEY, user.username)
    setCurrentUser(user)
    return { success: true }
  }

  const logout = () => {
    localStorage.removeItem(SESSION_KEY)
    setCurrentUser(null)
  }

  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
