import { getCurrentInstance } from 'vue'

export function useToast() {
  const { proxy } = getCurrentInstance()

  const showToast = (type, message, options = {}) => {
    const defaultOptions = {
      theme: 'colored',
      icon: true,
      hideProgressBar: false,
      autoClose: 3000,
      position: 'top-right',
      ...options
    }

    proxy.$toast[type](message, defaultOptions)
  }

  return {
    success: (message, options) => showToast('success', message, options),
    error: (message, options) => showToast('error', message, options),
    info: (message, options) => showToast('info', message, options),
    warning: (message, options) => showToast('warning', message, options),
  }
}
