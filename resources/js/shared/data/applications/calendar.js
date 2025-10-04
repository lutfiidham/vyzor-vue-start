const transparentColors = [
  'rgba(255, 99, 132, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(255, 206, 86, 0.5)',
  'rgba(75, 192, 192, 0.5)',
  'rgba(153, 102, 255, 0.5)',
  'rgba(255, 159, 64, 0.5)',
  'rgba(201, 203, 207, 0.5)',
  'rgba(100, 255, 218, 0.5)',
  'rgba(220, 53, 69, 0.5)',
  'rgba(40, 167, 69, 0.5)',
]

const year = new Date().getFullYear()

const officeEventTitles = [
  'Monthly Team Meeting',
  'Project Deadline',
  'Client Presentation',
  'Office Cleanup Day',
  'Staff Training Session',
  'Budget Review',
  'Quarterly Planning',
  'HR Interview Day',
  'Tech Workshop',
  'Monthly Social Gathering',
]

export const INITIAL_EVENTS = Array.from({ length: 10 }, (_, i) => {
  const day = Math.floor(Math.random() * 28) + 1 // Days 1 to 28 of the month
  const color = transparentColors[i % transparentColors.length]
  return {
    title: officeEventTitles[i],
    rrule: {
      freq: 'monthly',
      bymonthday: day,
      dtstart: `${year}-01-${day.toString().padStart(2, '0')}T00:00:00`,
    },
    color,
    textColor: '#fff',
    borderColor: color,
    allDay: true,
  }
})
