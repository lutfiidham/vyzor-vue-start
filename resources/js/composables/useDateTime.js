import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'

export function useDateTime() {
  const page = usePage()
  
  const timezone = computed(() => page.props.settings?.timezone || 'UTC')
  const dateFormat = computed(() => page.props.settings?.date_format || 'Y-m-d')

  /**
   * Format date according to application settings
   */
  const formatDate = (date, format = null) => {
    if (!date) return ''
    
    try {
      const d = new Date(date)
      const fmt = format || dateFormat.value
      
      // Basic format mapping
      const formatMap = {
        'Y-m-d': { year: 'numeric', month: '2-digit', day: '2-digit' },
        'd/m/Y': { year: 'numeric', month: '2-digit', day: '2-digit' },
        'm/d/Y': { year: 'numeric', month: '2-digit', day: '2-digit' },
        'd-m-Y': { year: 'numeric', month: '2-digit', day: '2-digit' },
      }
      
      const options = formatMap[fmt] || formatMap['Y-m-d']
      options.timeZone = timezone.value
      
      let formatted = d.toLocaleDateString('en-CA', options)
      
      // Apply format pattern
      if (fmt === 'd/m/Y') {
        const [year, month, day] = formatted.split('-')
        formatted = `${day}/${month}/${year}`
      } else if (fmt === 'm/d/Y') {
        const [year, month, day] = formatted.split('-')
        formatted = `${month}/${day}/${year}`
      } else if (fmt === 'd-m-Y') {
        const [year, month, day] = formatted.split('-')
        formatted = `${day}-${month}-${year}`
      }
      
      return formatted
    } catch (e) {
      console.error('Date format error:', e)
      return date
    }
  }

  /**
   * Format datetime according to application settings
   */
  const formatDateTime = (date, format = null) => {
    if (!date) return ''
    
    try {
      const d = new Date(date)
      const fmt = format || dateFormat.value
      
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: timezone.value
      }
      
      const formatted = d.toLocaleString('en-CA', options)
      
      // Apply format pattern
      if (fmt === 'd/m/Y') {
        const [datePart, timePart] = formatted.split(', ')
        const [year, month, day] = datePart.split('-')
        return `${day}/${month}/${year} ${timePart}`
      } else if (fmt === 'm/d/Y') {
        const [datePart, timePart] = formatted.split(', ')
        const [year, month, day] = datePart.split('-')
        return `${month}/${day}/${year} ${timePart}`
      } else if (fmt === 'd-m-Y') {
        const [datePart, timePart] = formatted.split(', ')
        const [year, month, day] = datePart.split('-')
        return `${day}-${month}-${year} ${timePart}`
      }
      
      return formatted.replace(', ', ' ')
    } catch (e) {
      console.error('DateTime format error:', e)
      return date
    }
  }

  /**
   * Format date for humans (relative time)
   */
  const diffForHumans = (date) => {
    if (!date) return ''
    
    try {
      const d = new Date(date)
      const now = new Date()
      const diff = now - d
      
      const seconds = Math.floor(diff / 1000)
      const minutes = Math.floor(seconds / 60)
      const hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)
      const months = Math.floor(days / 30)
      const years = Math.floor(days / 365)
      
      if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`
      if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`
      if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`
      if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`
      if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
      if (seconds > 30) return `${seconds} second${seconds > 1 ? 's' : ''} ago`
      return 'just now'
    } catch (e) {
      console.error('Diff for humans error:', e)
      return date
    }
  }

  /**
   * Get current date/time in application timezone
   */
  const now = () => {
    return new Date().toLocaleString('en-US', { timeZone: timezone.value })
  }

  return {
    timezone,
    dateFormat,
    formatDate,
    formatDateTime,
    diffForHumans,
    now
  }
}
