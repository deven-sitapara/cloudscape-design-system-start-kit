import { create } from 'zustand'

export const useAuth = create((set) => ({
  user: null,
  login: async (credentials) => {
    const response = await fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify(credentials)
    })
    const data = await response.json()
    set({ user: data.user })
  },
  logout: () => set({ user: null })
}))
