// stores/auth
import { defineStore } from 'pinia'
import users from '../utils/users.json' // Mock user list

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
  }),

  actions: {
    async authenticateUser({ username, password }) {
      this.loading = true

      // Simulate API authentication using mock data
      const user = users.find(u => u.username === username && u.password === password)

      if (user) {
        const token = this.generateToken(user)
        localStorage.setItem('token', token) // Store token in localStorage
        this.authenticated = true
        this.loading = false

        return { authenticated: true }
      }
      else {
        localStorage.removeItem('token')
        this.authenticated = false
        this.loading = false

        return { authenticated: false }
      }
    },

    logUserOut() {
      localStorage.removeItem('token')
      this.authenticated = false
    },

    generateToken(user) {
      // Simulated token generation
      return `Bearer-${user.id}-${user.username}`
    },

    checkAuthOnStartup() {
      const token = localStorage.getItem('token')
      this.authenticated = !!token
    },
  },
})
