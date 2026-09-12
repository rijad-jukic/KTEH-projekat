import type { ContactMessage } from '../types/ContactMessage'

const STORAGE_KEY = 'usvojime_contact_messages'

export class ContactMessageStore {
  private read(): ContactMessage[] {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    try {
      return JSON.parse(raw) as ContactMessage[]
    } catch {
      return []
    }
  }

  private write(messages: ContactMessage[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
  }

  getAll(): ContactMessage[] {
    return this.read()
  }

  add(message: ContactMessage): void {
    const current = this.read()
    current.push(message)
    this.write(current)
  }
}
