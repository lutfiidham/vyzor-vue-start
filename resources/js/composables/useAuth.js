import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'

export function useAuth() {
  const page = usePage()

  const user = computed(() => page.props.auth?.user)

  const isAuthenticated = computed(() => !!user.value)

  const hasRole = (role) => {
    const userRoles = user.value?.roles || []
    if (Array.isArray(role)) {
      return role.some(r => userRoles.includes(r))
    }

    return userRoles.includes(role)
  }

  const hasAnyRole = (roles) => {
    const userRoles = user.value?.roles || []

    return roles.some(role => userRoles.includes(role))
  }

  const hasAllRoles = (roles) => {
    const userRoles = user.value?.roles || []

    return roles.every(role => userRoles.includes(role))
  }

  const isSuperAdmin = computed(() => {
    const userRoles = user.value?.roles || []

    return userRoles.includes('Super Admin')
  })

  const isAdmin = computed(() => {
    const userRoles = user.value?.roles || []

    return userRoles.includes('Admin')
  })

  const isManager = computed(() => {
    const userRoles = user.value?.roles || []

    return userRoles.includes('Manager')
  })

  const isUser = computed(() => {
    const userRoles = user.value?.roles || []

    return userRoles.includes('User')
  })

  // Helper to check if user has admin-level access (Super Admin or Admin)
  const isAdminLevel = computed(() => {
    const userRoles = user.value?.roles || []

    return userRoles.includes('Super Admin') || userRoles.includes('Admin')
  })

  return {
    user,
    isAuthenticated,
    hasRole,
    hasAnyRole,
    hasAllRoles,
    isSuperAdmin,
    isAdmin,
    isAdminLevel,
    isManager,
    isUser,
  }
}
