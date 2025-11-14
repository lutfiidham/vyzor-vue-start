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
  
  const isAdmin = computed(() => hasRole('admin'))
  
  const isManager = computed(() => hasRole('manager'))
  
  const isUser = computed(() => hasRole('user'))

  return {
    user,
    isAuthenticated,
    hasRole,
    hasAnyRole,
    hasAllRoles,
    isAdmin,
    isManager,
    isUser,
  }
}
