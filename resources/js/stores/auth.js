import { defineStore } from 'pinia'
import { usePage } from '@inertiajs/vue3'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loading: false,
    errors: null
  }),

  getters: {
    isAuthenticated: () => {
      const page = usePage()
      return !!page.props.auth?.user
    },
    currentUser: () => {
      const page = usePage()
      return page.props.auth?.user
    }
  },

  actions: {
    async authenticateUser(credentials) {
      this.loading = true
      this.errors = null

      // Direct Inertia post call
      return new Promise((resolve) => {
        window.axios.post('/login', credentials)
          .then(() => {
            this.loading = false
            resolve({ authenticated: true })
          })
          .catch((error) => {
            this.loading = false
            this.errors = error.response?.data?.errors || {
              username: ['Invalid credentials']
            }
            resolve({ authenticated: false, errors: this.errors })
          })
      })
    },

    clearErrors() {
      this.errors = null
    }
  }
})