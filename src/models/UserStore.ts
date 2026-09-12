import type { User } from '../types/User'

const STORAGE_KEY = 'usvojime_users'

export class UserStore {
  private read(): User[] {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    try {
      return JSON.parse(raw) as User[]
    } catch {
      return []
    }
  }

  private write(users: User[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users))
  }

  getAll(): User[] {
    return this.read()
  }

  findByUsername(username: string): User | undefined {
    return this.read().find(
      (user) => user.username.toLowerCase() === username.toLowerCase(),
    )
  }

  add(user: User): void {
    const current = this.read()
    current.push(user)
    this.write(current)
  }
}
