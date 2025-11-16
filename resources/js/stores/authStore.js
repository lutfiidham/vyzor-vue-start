import { usePage } from '@inertiajs/vue3'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),

  getters: {
    isAuthenticated: state => !!state.user,
    currentUser: state => state.user,
  },

  actions: {
    setUser(user) {
      this.user = user
    },

    fetchUser() {
      const page = usePage()
      this.user = page.props.auth?.user || null
    },

    clearUser() {
      this.user = null
    },
  },
})
