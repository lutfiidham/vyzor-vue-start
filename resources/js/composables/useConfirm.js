import { getCurrentInstance } from 'vue'

export function useConfirm() {
  const { proxy } = getCurrentInstance()

  const confirm = async (options = {}) => {
    const defaultOptions = {
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
      ...options,
    }

    const result = await proxy.$swal(defaultOptions)

    return result.isConfirmed
  }

  const confirmDelete = async (itemName = 'item') => {
    return await confirm({
      title: 'Delete Confirmation',
      text: `Are you sure you want to delete "${itemName}"? This action cannot be undone.`,
      icon: 'warning',
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#d33',
    })
  }

  const confirmAction = async (title, text, confirmText = 'Yes, proceed!') => {
    return await confirm({
      title,
      text,
      confirmButtonText: confirmText,
    })
  }

  return {
    confirm,
    confirmDelete,
    confirmAction,
  }
}
