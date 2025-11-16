export const statCards = [
  {
    id: '1',
    title: 'Total Customers',
    value: '32,152',
    iconClass: 'ti ti-users',
    color: 'bg-primary avatar-rounded',
    crmpercentChange: '4.21%',
    crmicon: 'up',
    percentageColorClass: 'text-success',
    crmbadge: true,
    crmiconColor: 'success',
    endText: 'text-end',
    divClass: 'flex-wrap',
  },
  {
    id: '2',
    title: 'Total Deals',
    value: '5,543',
    iconClass: 'ti ti-briefcase',
    color: 'bg-secondary avatar-rounded',
    crmpercentChange: '2.35%',
    crmicon: 'up',
    percentageColorClass: 'text-success',
    crmbadge: true,
    crmiconColor: 'success',
    endText: 'text-end',
    divClass: 'flex-wrap',
  },
  {
    id: '3',
    title: 'Conversion Ratio',
    value: '12.34%',
    iconClass: 'ti ti-wave-square',
    color: 'bg-success avatar-rounded',
    crmpercentChange: '4.75%',
    crmicon: 'down',
    percentageColorClass: 'text-danger',
    crmbadge: true,
    crmiconColor: 'danger',
    endText: 'text-end',
    divClass: 'flex-wrap',
  },
  {
    id: '4',
    title: 'Total Revenue',
    value: '$53,276',
    valueClass: 'mb-0',
    iconClass: 'ti ti-wallet',
    color: 'bg-warning avatar-rounded',
    crmpercentChange: '0.59%',
    crmicon: 'up',
    percentageColorClass: 'text-success',
    crmbadge: true,
    crmiconColor: 'success',
    endText: 'text-end',
    divClass: 'flex-wrap',
  },
]
export const crmSeries = [
  {
    name: 'Revenue',
    type: 'column',
    data: [161, 255, 322, 750, 353, 200, 415, 225, 673, 413, 504, 441],
  },
  {
    name: 'Profit',
    type: 'line',
    data: [118, 410, 225, 820, 235, 115, 620, 445, 525, 438, 640, 325],
  },
]
export const crmOptions = {
  chart: {
    height: 318,
    animations: {
      speed: 500,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ['var(--primary-color)', 'rgba(255, 73, 205)'],
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: '#f1f1f1',
    strokeDashArray: 3,
  },
  stroke: {
    width: [0, 2],
    curve: 'smooth',
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '30%',
      borderRadius: 3,
    },
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'sep',
      'oct',
      'nov',
      'dec',
    ],
  },
  yaxis: {
    labels: {
      formatter(value) {
        return `$${value}`
      },
    },
  },
  tooltip: {
    y: [
      {
        formatter(e) {
          return void 0 !== e ? `$${e.toFixed(0)}` : e
        },
      },
      {
        formatter(e) {
          return void 0 !== e ? `$${e.toFixed(0)}` : e
        },
      },
    ],
  },
  legend: {
    show: true,
    customLegendItems: ['Revenue', 'Profit'],
    inverseOrder: true,
  },
  title: {
    align: 'left',
    style: {
      fontSize: '.8125rem',
      fontWeight: 'semibold',
      color: '#8c9097',
    },
  },
  markers: {
    hover: {
      sizeOffset: 5,
    },
  },
}
export const tasks = [
  {
    id: '1',
    title: 'Follow up with Acme Corp',
    status: 'In Progress',
    code: '#SPK - 101',
    assignee: 'John Doe',
    priority: 'High',
    dueTime: '11:00 AM',
    completed: true,
  },
  {
    id: '2',
    title: 'Send proposal to Beta Industries',
    status: 'Pending',
    code: '#SPK - 102',
    assignee: 'Sarah Lee',
    priority: 'Medium',
    dueTime: '2:00 PM',
    completed: false,
  },
  {
    id: '3',
    title: 'Call Gamma LLC for contract renewal',
    status: 'Pending',
    code: '#SPK - 103',
    assignee: 'Mark Smith',
    priority: 'High',
    dueTime: '10:30 AM',
    completed: true,
  },
  {
    id: '4',
    title: 'Schedule meeting with Delta Ltd.',
    status: 'In Progress',
    code: '#SPK - 104',
    assignee: 'Emma Johnson',
    priority: 'Low',
    dueTime: '4:00 PM',
    completed: false,
  },
  {
    id: '5',
    title: 'Review Epsilon Inc. payment terms',
    status: 'In Progress',
    code: '#SPK - 105',
    assignee: 'Chris Brown',
    priority: 'High',
    dueTime: '5:30 PM',
    completed: false,
  },
  {
    id: '6',
    title: 'Update lead status in CRM',
    status: 'Not Started',
    code: '#SPK - 106',
    assignee: 'Anna Wilson',
    priority: 'Medium',
    dueTime: '1:00 PM',
    completed: true,
  },
]
export const upcomming = [
  {
    id: '107',
    title: 'Prepare pitch for new client',
    status: 'Not Started',
    code: '#SPK - 107',
    assignee: 'John Doe',
    priority: 'High',
    dueDate: '2025-02-16',
    completed: true,
  },
  {
    id: '108',
    title: 'Team meeting for Q1 strategy',
    status: 'Scheduled',
    code: '#SPK - 108',
    assignee: 'Sarah Lee',
    priority: 'Medium',
    dueDate: '2025-02-18',
    completed: false,
  },
  {
    id: '109',
    title: 'Update CRM data for leads',
    status: 'Not Started',
    code: '#SPK - 109',
    assignee: 'Mark Smith',
    priority: 'Low',
    dueDate: '2025-02-20',
    completed: true,
  },
  {
    id: '110',
    title: 'Conduct market research',
    status: 'In Progress',
    code: '#SPK - 110',
    assignee: 'Emma Johnson',
    priority: 'Medium',
    dueDate: '2025-02-22',
    completed: false,
  },
  {
    id: '111a',
    title: 'Review contract terms for new partnership',
    status: 'Not Started',
    code: '#SPK - 111',
    assignee: 'Chris Brown',
    priority: 'High',
    dueDate: '2025-02-25',
    completed: false,
  },
  {
    id: '111b',
    title: 'Follow up with investors',
    status: 'Pending',
    code: '#SPK - 111',
    assignee: 'Anna Wilson',
    priority: 'High',
    dueDate: '2025-02-28',
    completed: true,
  },
]
export const leadSeries = [14, 23, 21, 17, 15, 10]
export const leadOptions = {
  chart: {
    type: 'polarArea',
    height: 205,
  },
  stroke: {
    colors: ['#fff'],
  },
  fill: {
    opacity: 1,
  },
  legend: {
    show: false,
    position: 'bottom',
    itemMargin: {
      horizontal: 5,
      vertical: 5,
    },
    markers: {
      size: 5,
    },
  },
  labels: [
    'Organic Search',
    'Paid Search',
    'Direct Traffic',
    'Social Media',
    'Referrals',
    'Others',
  ],
  colors: [
    'var(--primary-color)',
    'rgb(255, 73, 205)',
    'rgb(50, 212, 132)',
    'rgb(250, 129, 40)',
    'rgb(0, 201, 255)',
    'rgb(253, 175, 34)',
  ],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
}
export const trafficSources = [
  { name: 'Organic Search', percentage: '0.64%', count: '1,754', trend: 'up' },
  { name: 'Paid Search', percentage: '2.75%', count: '1,234', trend: 'down' },
  { name: 'Direct Traffic', percentage: '1.54%', count: '878', trend: 'up' },
  { name: 'Social Media', percentage: '1.54%', count: '270', trend: 'up' },
  { name: 'Referrals', percentage: '1.54%', count: '878', trend: 'up' },
  { name: 'Others', percentage: '1.54%', count: '270', trend: 'up' },
]
export const deals = [
  {
    name: 'John Doe',
    email: 'jhondoe@example.com',
    avatar: '/images/faces/10.jpg',
    amount: '$2,893',
  },
  {
    name: 'Sarah Lee',
    email: 'sarah.lee@gmail.com',
    avatar: '/images/faces/1.jpg',
    amount: '$4,289',
  },
  {
    name: 'Mark Smith',
    email: 'mark.smith23@gmail.com',
    avatar: '/images/faces/12.jpg',
    amount: '$6,347',
  },
  {
    name: 'Emma Johnson',
    email: 'emmajhonson@gmail.com',
    avatar: '/images/faces/6.jpg',
    amount: '$3,894',
  },
  {
    name: 'Chris Brown',
    email: 'chrisbrown214@gmail.com',
    avatar: null,
    initials: 'CB',
    amount: '$2,679',
  },
  {
    name: 'Anna Wilson',
    email: 'annawilson238@gmail.com',
    avatar: '/images/faces/3.jpg',
    amount: '$2,679',
  },
]
export const staticSeries = [
  {
    name: 'Sessions',
    data: [400, 430, 470, 540, 1100, 1200, 1380],
  },
]
export const staticOptions = {
  chart: {
    fontFamily: 'Poppins, Arial, sans-serif',
    toolbar: {
      show: false,
    },
    type: 'bar',
    height: 351,
  },
  grid: {
    borderColor: '#f2f6f7',
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '30%',
      borderRadius: 2,
    },
  },
  colors: ['var(--primary-color)'],
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      'New Deal',
      'Qualified Deal',
      'Renewal Deal',
      'Referral Deal',
      'Won Deal',
      'Lost Deal',
      'Neotiation',
    ],
  },
}
export const overviewtable = [
  {
    name: 'John Carter',
    company: 'Acme Corp',
    status: { label: 'New', colorClass: 'bg-primary' },
    source: 'Website Form',
    avatar: '/images/faces/11.jpg',
    assignedTo: 'Sarah Lee',
    assignedAvatar: '/images/faces/1.jpg',
  },
  {
    name: 'Lisa Brown',
    company: 'Beta Ltd',
    status: { label: 'Contacted', colorClass: 'bg-info' },
    source: 'Referral',
    avatar: '/images/faces/11.jpg',
    assignedTo: 'Mark Smith',
    assignedAvatar: '/images/faces/1.jpg',
  },
  {
    name: 'Michael Green',
    company: 'Gamma LLC',
    status: { label: 'Proposal Sent', colorClass: 'bg-warning' },
    source: 'LinkedIn',
    avatar: '/images/faces/11.jpg',
    assignedTo: 'Emma Johnson',
    assignedAvatar: '/images/faces/1.jpg',
  },
  {
    name: 'Sophia Wilson',
    company: 'Delta Enterprises',
    status: { label: 'Negotiation', colorClass: 'bg-secondary' },
    source: 'Cold Call',
    avatar: '/images/faces/11.jpg',
    assignedTo: 'Chris Brown',
    assignedAvatar: '/images/faces/1.jpg',
  },
  {
    name: 'David Miller',
    company: 'Epsilon Inc.',
    status: { label: 'Won', colorClass: 'bg-success' },
    source: 'Email Campaign',
    avatar: '/images/faces/11.jpg',
    assignedTo: 'John Doe',
    assignedAvatar: '/images/faces/1.jpg',
    tdClass: 'border-bottom-0',
  },
]
export const topdealsTable = [
  {
    id: '#SPK-1001',
    title: 'Enterprise Package',
    companyLogo: '/images/company-logos/1.png',
    companyName: 'Acme Corp',
    amount: '$50,000',
    status: { label: 'In Progress', colorClass: 'bg-primary-transparent' },
    closeDate: '2025-02-25',
    owner: 'John Doe',
    priority: 'High',
  },
  {
    id: '#SPK-1002',
    title: 'Annual Contract',
    companyLogo: '/images/company-logos/2.png',
    companyName: 'Beta Ltd',
    amount: '$75,000',
    status: { label: 'Closed Won', colorClass: 'bg-success-transparent' },
    closeDate: '2025-02-15',
    owner: 'Sarah Lee',
    priority: 'High',
  },
  {
    id: '#SPK-1003',
    title: 'Software Upgrade',
    companyLogo: '/images/company-logos/3.png',
    companyName: 'Gamma LLC',
    amount: '$30,000',
    status: { label: 'Closed Lost', colorClass: 'bg-danger-transparent' },
    closeDate: '2025-01-30',
    owner: 'Mark Smith',
    priority: 'Medium',
  },
  {
    id: '#SPK-1004',
    title: 'Premium Services',
    companyLogo: '/images/company-logos/4.png',
    companyName: 'Delta Ltd',
    amount: '$60,000',
    status: { label: 'In Progress', colorClass: 'bg-primary-transparent' },
    closeDate: '2025-03-05',
    owner: 'Emma Johnson',
    priority: 'High',
  },
  {
    id: '#SPK-1005',
    title: 'Subscription Plan',
    companyLogo: '/images/company-logos/5.png',
    companyName: 'Epsilon Inc',
    amount: '$40,000',
    status: { label: 'Closed Won', colorClass: 'bg-success-transparent' },
    closeDate: '2025-02-10',
    owner: 'Chris Brown',
    priority: 'Medium',
  },
  {
    id: '#SPK-1006',
    title: 'Custom Integration',
    companyLogo: '/images/company-logos/6.png',
    companyName: 'Zeta Solutions',
    amount: '$55,000',
    status: { label: 'Proposal Sent', colorClass: 'bg-warning-transparent' },
    closeDate: '2025-02-20',
    owner: 'Anna Wilson',
    priority: 'High',
    tdClass: 'border-bottom-0',
  },
]
