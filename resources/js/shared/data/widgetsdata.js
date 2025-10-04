export const Employeesdata = [
  {
    title: 'Total Employees',
    value: '1,754',
    badgeText: 'This Month',
    iconClass: 'ri-group-3-fill',
    color: 'primary',
    cardColor: 'primary',
    percentChange: '+1.04%',
    percentageColorClass: 'fs-15 text-success',
    badge: true,
  },
  {
    title: 'Employees In Leave',
    value: '234',
    badgeText: 'This Month',
    iconClass: 'ri-user-minus-fill',
    color: 'secondary',
    cardColor: 'secondary',
    percentChange: '+0.36%',
    percentageColorClass: 'fs-15 text-success',
    badge: true,
  },
  {
    title: 'Total Clients',
    value: '664',
    badgeText: 'This Month',
    iconClass: 'ri-briefcase-fill',
    color: 'warning',
    cardColor: 'warning',
    percentChange: '-1.28%',
    percentageColorClass: 'fs-15 text-danger',
    badge: true,
  },
  {
    title: 'New Leads',
    value: '855',
    badgeText: 'This Month',
    iconClass: 'ri-id-card-fill',
    color: 'success',
    cardColor: 'success',
    percentChange: '+2.25%',
    percentageColorClass: 'fs-15 text-success',
    badge: true,
  },
  {
    title: 'Total Deals',
    value: '325',
    badgeText: 'This Month',
    iconClass: 'ri-id-card-fill',
    color: 'info',
    cardColor: 'info',
    percentChange: '-5.96%',
    percentageColorClass: 'fs-15 text-danger',
    badge: true,
  },
]

export const Salesseries = [
  {
    data: [25, 22, 41, 55, 30, 35, 25],
  },
]
export const Salesoptions = {
  chart: {
    type: 'bar',
    width: 70,
    height: 40,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '60%',
      borderRadius: '2',
    },
  },
  labels: [1, 2, 3, 4, 5, 6, 7],
  colors: ['var(--primary-color)'],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (_seriesName) {
          return ''
        },
      },
    },
    marker: {
      show: false,
    },
  },
}

export const Revenueseries = [
  {
    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
  },
]
export const Revenueoptions = {
  chart: {
    type: 'line',
    width: 70,
    height: 40,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: 'smooth',
    width: '2',
  },
  colors: ['rgb(255, 73, 205)'],
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return ''
        },
      },
    },
  },
}

export const Customerseries = [
  {
    data: [7, 2, 10, 1, 12, 44, 25, 63, 95, 41, 66, 30],
  },
]
export const Customeroptions = {
  chart: {
    type: 'line',
    width: 70,
    height: 40,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: 'smooth',
    width: '2',
  },
  colors: ['rgb(50, 212, 132)'],
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return ''
        },
      },
    },
    marker: {
      show: false,
    },
  },
}

export const Profitseries = [80, 32]

export const Profitoptions = {
  chart: {
    type: 'pie',
    width: 40,
    height: 40,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    width: 1,
  },
  colors: ['#f4f0f6', 'rgb(0, 201, 255)'],
  tooltip: {
    theme: false,
    fixed: {
      enabled: false,
    },
  },
}

export const Salesdata = [
  {
    id: 'chart-2',
    title: 'Total Sales',
    value: '12,432',
    inc: 'Increases Today',
    color: 'primary',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h8V136a8,8,0,0,1,8-8H72a8,8,0,0,1,8,8v64H96V88a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V200h16V40a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V200h8A8,8,0,0,1,232,208Z"></path>
            </svg>`,
    chartOptions: Salesoptions,
    chartSeries: Salesseries,
    height: '40',
    width: '70',
    type: 'bar',
  },
  {
    id: 'chart-3',
    title: 'Total Revenue',
    value: '$9,432',
    inc: 'Increases Today',
    color: 'secondary',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                <path d="M152,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,112Zm80-40V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM96,56h64V48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8Zm120,57.61V72H40v41.61A184,184,0,0,0,128,136,184,184,0,0,0,216,113.61Z"></path>
            </svg>`,
    chartOptions: Revenueoptions,
    chartSeries: Revenueseries,
    height: '40',
    width: '70',
    type: 'line',
  },
  {
    id: 'chart-4',
    title: 'Total Customers',
    value: '3,132',
    inc: 'Increases Today',
    color: 'success',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M164.47,195.63a8,8,0,0,1-6.7,12.37H10.23a8,8,0,0,1-6.7-12.37,95.83,95.83,0,0,1,47.22-37.71,60,60,0,1,1,66.5,0A95.83,95.83,0,0,1,164.47,195.63Zm87.91-.15a95.87,95.87,0,0,0-47.13-37.56A60,60,0,0,0,144.7,54.59a4,4,0,0,0-1.33,6A75.83,75.83,0,0,1,147,150.53a4,4,0,0,0,1.07,5.53,112.32,112.32,0,0,1,29.85,30.83,23.92,23.92,0,0,1,3.65,16.47,4,4,0,0,0,3.95,4.64h60.3a8,8,0,0,0,7.73-5.93A8.22,8.22,0,0,0,252.38,195.48Z"></path></svg>`,
    chartOptions: Customeroptions,
    chartSeries: Customerseries,
    height: '40',
    width: '70',
    type: 'line',
  },
  {
    id: 'chart-5',
    title: 'Total Profit',
    value: '$532',
    inc: 'Increases Today',
    color: 'info',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" className="svg-info" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm12,152h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24a28,28,0,0,1,0,56Z"></path></svg>`,
    chartOptions: Profitoptions,
    chartSeries: Profitseries,
    height: '40',
    width: '40',
    type: 'pie',
  },
]

export const Productsdata = [
  {
    color: 'primary',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm16,160h-8v8a8,8,0,0,1-16,0v-8h-8a32,32,0,0,1-32-32,8,8,0,0,1,16,0,16,16,0,0,0,16,16h32a16,16,0,0,0,0-32H116a32,32,0,0,1,0-64h4V64a8,8,0,0,1,16,0v8h4a32,32,0,0,1,32,32,8,8,0,0,1-16,0,16,16,0,0,0-16-16H116a16,16,0,0,0,0,32h28a32,32,0,0,1,0,64Z"></path></svg>`,
    title: 'Total Sales',
    value: '$54,320',
    percentage: '+ 0.54%',
    percentageColor: 'success',
  },
  {
    color: 'secondary',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,120,47.65,76,128,32l80.35,44Zm8,99.64V133.83l80-43.78v85.76Z"></path></svg>`,
    title: 'Total Products',
    value: '1,320',
    percentage: '- 3.96%',
    percentageColor: 'danger',
  },
  {
    color: 'warning',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"></path></svg>`,
    title: 'Pending Orders',
    value: '240',
    percentage: '+ 5.53%',
    percentageColor: 'success',
  },
  {
    color: 'info',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.35,44L178.57,92.29l-80.35-44Zm0,88L47.65,76,81.56,57.43l80.35,44Zm88,55.85h0l-80,43.79V133.83l32-17.51V152a8,8,0,0,0,16,0V107.56l32-17.51v85.76Z"></path></svg>`,
    title: 'Delivered Orders',
    value: '1,050',
    percentage: '+ 1.86%',
    percentageColor: 'success',
  },
  {
    color: 'success',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,112H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168a8,8,0,0,1,0,16Z"></path></svg>`,
    title: 'Returned Orders',
    value: '80',
    percentage: '- 4.43%',
    percentageColor: 'danger',
  },
  {
    color: 'danger',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"></path></svg>`,
    title: 'Total Customers',
    value: '1,540',
    percentage: '+ 6.12%',
    percentageColor: 'success',
  },
]

//Top Categories

export const Categoriesseries = [
  {
    name: 'Electronics',
    data: [
      52, 51, 56, 57, 62, 59, 56, 55, 56, 56, 58, 62, 63, 68, 65, 62, 62, 57, 60, 65, 64, 69, 70,
      69, 64, 68, 66, 66, 70, 73, 78,
    ],
  },
  {
    name: 'Fashion',
    data: [
      28, 28, 30, 32, 33, 38, 35, 39, 41, 41, 44, 39, 39, 44, 42, 44, 39, 44, 42, 45, 46, 38, 39,
      36, 41, 40, 44, 46, 43, 47, 50,
    ],
  },
  {
    name: 'Furniture',
    data: [
      10, 8, 12, 11, 14, 21, 17, 19, 18, 14, 10, 11, 6, 10, 13, 13, 18, 23, 22, 27, 23, 18, 19, 20,
      19, 23, 20, 25, 29, 29, 28,
    ],
  },
]
export const Categoriesoptions = {
  chart: {
    id: 'chartD',
    type: 'line',
    height: 155,
    zoom: {
      autoScaleYaxis: false,
    },
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 7,
      left: 1,
      blur: 3,
      color: '#000',
      opacity: 0.05,
    },
  },
  colors: ['var(--primary-color)', 'rgb(0, 201, 255)', 'rgb(255, 73, 205)'],
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
    style: 'hollow',
  },
  grid: {
    show: true,
    borderColor: '#f1f1f1',
    strokeDashArray: 2,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy',
    },
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 1.5,
    dashArray: 0,
  },
  fill: {
    type: 'solid',
  },
  legend: {
    position: 'top',
    show: false,
  },
}

export const Revenuesseries = [
  {
    name: 'Sales',
    data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
  },
  {
    name: 'OPEX Ratio',
    data: [74, 72, 87, 116, 88, 85, 100, 73, 53, 84, 107, 64],
  },
  {
    name: 'General & Admin',
    data: [84, 82, 97, 126, 98, 95, 110, 83, 63, 94, 117, 74],
  },
  {
    name: 'Marketing',
    data: [34, 22, 37, 56, 21, 35, 60, 34, 56, 78, 89, 53],
  },
]
export const Revenuesoptions = {
  chart: {
    stacked: true,
    type: 'bar',
    height: 365,
  },
  grid: {
    borderColor: '#f5f4f4',
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true, // Ensure y-axis grids are shown
      },
    },
  },
  colors: ['var(--primary-color)', 'var(--primary06)', 'var(--primary03)', 'var(--primary01)'],
  plotOptions: {
    bar: {
      columnWidth: '70%',
      borderRadius: 7,
      borderRadiusApplication: 'around',
      borderRadiusWhenStacked: 'all',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: 'top',
  },
  yaxis: {
    title: {
      text: 'Growth',
      style: {
        color: '#adb5be',
        fontSize: '14px',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 600,
        cssClass: 'apexcharts-yaxis-label',
      },
    },
    axisBorder: {
      show: true,
      color: 'rgba(119, 119, 142, 0.05)',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: 'rgba(119, 119, 142, 0.05)',
      width: 6,
      offsetX: 0,
      offsetY: 0,
    },
    labels: {
      formatter: function (y) {
        return y.toFixed(0) + ''
      },
    },
  },
  xaxis: {
    type: 'month',
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
    axisBorder: {
      show: false,
      color: 'rgba(119, 119, 142, 0.05)',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: false,
      borderType: 'solid',
      color: 'rgba(119, 119, 142, 0.05)',
      width: 6,
      offsetX: 0,
      offsetY: 0,
    },
    labels: {
      rotate: -90,
    },
  },
}

export const Countries = [
  {
    id: 1,
    name: 'Argentina',
    flag: '/images/flags/argentina_flag.jpg',
    population: 43765,
    now: 75,
  },
  {
    id: 2,
    name: 'France',
    flag: '/images/flags/french_flag.jpg',
    population: 36055,
    now: 64,
  },
  {
    id: 3,
    name: 'USA',
    flag: '/images/flags/us_flag.jpg',
    population: 26734,
    now: 60,
  },
]

export const Categoriesdataseries = [3160, 2127, 1556, 1026, 2321]
export const Categoriesdataoptions = {
  chart: {
    type: 'donut',
    sparkline: {
      enabled: true,
    },
  },
  legend: {
    show: false,
  },
  colors: [
    'var(--primary-color)',
    'rgb(255, 73, 205)',
    'rgb(0, 201, 255)',
    'rgb(253, 175, 34)',
    'rgb(50, 212, 132)',
  ],
  labels: ['Electronics', 'Fashion', 'Furniture', 'Appliances', 'Gaming'],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      offsetY: 10,
      expandOnClick: false,
      donut: {
        size: '80%',
        background: 'transparent',
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: '20px',
            color: '#495057',
            fontFamily: 'Montserrat, sans-serif',
            offsetY: -5,
          },
          value: {
            show: true,
            fontSize: '22px',
            color: undefined,
            offsetY: 5,
            fontWeight: 600,
            fontFamily: 'Montserrat, sans-serif',
            formatter: function (val) {
              return val + '%'
            },
          },
          total: {
            show: true,
            showAlways: true,
            label: 'Total Sales',
            fontSize: '14px',
            fontWeight: 400,
            color: '#495057',
          },
        },
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      type: 'vertical',
      colorStops: [
        [
          {
            offset: 0,
            color: 'var(--primary-color)',
            opacity: 1,
          },
          {
            offset: 90,
            color: 'var(--primary09)',
            opacity: 1,
          },
          {
            offset: 100,
            color: 'var(--primary08)',
            opacity: 1,
          },
        ],
        [
          {
            offset: 0,
            color: 'rgba(255, 73, 205, 1)',
            opacity: 1,
          },
          {
            offset: 90,
            color: 'rgba(255, 73, 205, 0.9)',
            opacity: 1,
          },
          {
            offset: 100,
            color: 'rgba(255, 73, 205, 0.8)',
            opacity: 1,
          },
        ],
        [
          {
            offset: 0,
            color: 'rgba(0, 201, 255, 1)',
            opacity: 1,
          },
          {
            offset: 90,
            color: 'rgba(0, 201, 255, 0.9)',
            opacity: 1,
          },
          {
            offset: 100,
            color: 'rgba(0, 201, 255, 0.8)',
            opacity: 1,
          },
        ],
        [
          {
            offset: 0,
            color: 'rgba(253, 175, 34, 1)',
            opacity: 1,
          },
          {
            offset: 90,
            color: 'rgba(253, 175, 34, 0.9)',
            opacity: 1,
          },
          {
            offset: 100,
            color: 'rgba(253, 175, 34, 0.8)',
            opacity: 1,
          },
        ],
        [
          {
            offset: 0,
            color: 'rgba(50, 212, 132, 1)',
            opacity: 1,
          },
          {
            offset: 90,
            color: 'rgba(50, 212, 132, 0.9)',
            opacity: 1,
          },
          {
            offset: 100,
            color: 'rgba(50, 212, 132, 0.8)',
            opacity: 1,
          },
        ],
      ],
    },
  },
}

export const CategoryItemsData = [
  { name: 'Electronics', percentage: '31%', colorClass: 'text-primary' },
  { name: 'Fashion', percentage: '26%', colorClass: 'text-secondary' },
  { name: 'Furniture', percentage: '18%', colorClass: 'text-info' },
  { name: 'Appliances', percentage: '14%', colorClass: 'text-warning' },
  { name: 'Gaming', percentage: '11%', colorClass: 'text-success' },
]

export const Ordersdata = [
  {
    id: '#ORD789ABC',
    method: 'Rupay Card ****2783',
    methodDetails: 'Card Payment',
    status: 'Completed',
    amount: '$1,234.78',
    date: 'Nov 22,2023',
    statusColor: 'success',
  },
  {
    id: '#ORD253SFW',
    method: 'Digital Wallet',
    methodDetails: 'Online Transaction',
    status: 'Pending',
    amount: '$623.99',
    date: 'Nov 22,2023',
    statusColor: 'warning',
  },
  {
    id: '#ORD356SKF',
    method: 'Mastro Card ****7893',
    methodDetails: 'Card Payment',
    status: 'Cancelled',
    amount: '$1,324',
    date: 'Nov 21,2023',
    statusColor: 'danger',
  },
  {
    id: '#ORD363ESD',
    method: 'Cash On Delivery',
    methodDetails: 'Pay On Delivery',
    status: 'Completed',
    amount: '$1,123.49',
    date: 'Nov 20,2023',
    statusColor: 'success',
  },
  {
    id: '#ORD253KSE',
    method: 'Visa Card ****2563',
    methodDetails: 'Card Payment',
    status: 'Completed',
    amount: '$1,289',
    date: 'Nov 18,2023',
    statusColor: 'success',
    tdclass: 'border-bottom-0',
  },
]

//Social Visitors

export const Visitorsseries = [
  {
    name: 'Visitors',
    data: [650, 770, 840, 890, 1100, 1380, 1500],
  },
]
export const Visitorsoptions = {
  chart: {
    height: 390,
    type: 'bar',
    events: {
      click: function () {},
    },
    toolbar: {
      show: false,
    },
  },
  colors: [
    'var(--primary-color)',
    'rgba(51, 182, 229, 1)',
    'rgba(255, 117, 170, 1)',
    'rgba(255, 187, 51, 1)',
    'rgba(0, 200, 80, 1)',
    'rgba(255, 68, 68, 0.9)',
    'rgba(0, 216, 216, 1)',
  ],
  plotOptions: {
    bar: {
      barHeight: '40%',
      distributed: true,
      horizontal: true,
      borderRadius: 3,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  grid: {
    borderColor: '#f1f1f1',
    strokeDashArray: 3,
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      style: 'slantedLines', // string or array of strings
    },
  },
  xaxis: {
    categories: ['Facebook', 'Instagram', 'Dribble', 'Twitter', 'Chrome', 'Pininterest', 'Reddit'],
    labels: {
      show: true,
      style: {
        colors: '#adb5be',
        fontSize: '12px',
        fontWeight: 500,
        cssClass: 'apexcharts-xaxis-label',
      },
    },
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        colors: '#adb5be',
        fontSize: '12px',
        fontWeight: 500,
        cssClass: 'apexcharts-yaxis-label',
      },
    },
  },
  tooltip: {
    enabled: true,
    shared: false,
    intersect: true,
    x: {
      show: false,
    },
    theme: 'dark',
  },
}

//Social Traffic

export const Trafficseries = [
  {
    name: 'Facebook',
    data: [44, 42, 57, 86, 58, 55, 70],
  },
  {
    name: 'Instagram',
    data: [74, 72, 87, 116, 88, 85, 100],
  },
  {
    name: 'Twitter',
    data: [84, 82, 97, 126, 98, 95, 110],
  },
  {
    name: 'linkedIn',
    data: [34, 22, 37, 56, 21, 35, 60],
  },
]
export const Trafficoptions = {
  chart: {
    stacked: true,
    type: 'bar',
    height: 315,
    toolbar: {
      show: false,
    },
  },
  grid: {
    borderColor: '#f5f4f4',
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true, // Ensure y-axis grids are shown
      },
    },
  },
  colors: ['var(--primary-color)', 'rgb(0, 201, 255)', 'rgb(253, 175, 34)', 'rgb(50, 212, 132)'],
  plotOptions: {
    bar: {
      columnWidth: '25%',
      borderRadius: '3',
      borderRadiusApplication: 'around',
      borderRadiusWhenStacked: 'all',
    },
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'round',
    colors: '#fff',
    width: 3,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: 'top',
    markers: {
      size: 4,
      shape: 'circle',
    },
  },
  yaxis: {
    title: {
      style: {
        color: '#adb5be',
        fontSize: '14px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        cssClass: 'apexcharts-yaxis-label',
      },
    },
    axisBorder: {
      show: true,
      color: 'rgba(119, 119, 142, 0.05)',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: 'rgba(119, 119, 142, 0.05)',
      width: 6,
      offsetX: 0,
      offsetY: 0,
    },
    labels: {
      formatter: function (y) {
        return y.toFixed(0) + ''
      },
    },
  },
  xaxis: {
    type: 'Week',
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisBorder: {
      show: false,
      color: 'rgba(119, 119, 142, 0.05)',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: false,
      borderType: 'solid',
      color: 'rgba(119, 119, 142, 0.05)',
      width: 6,
      offsetX: 0,
      offsetY: 0,
    },
    labels: {
      rotate: -90,
    },
  },
}

//Recent Orders

export const Recentseries = [1754, 634, 878, 470]
export const Recentoptions = {
  labels: ['Delivered', 'Cancelled', 'Pending', 'Returned'],
  chart: {
    height: 260,
    type: 'donut',
  },
  dataLabels: {
    enabled: false,
  },

  legend: {
    show: false,
  },
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'round',
    colors: '#fff',
    width: 0,
    dashArray: 0,
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 90,
      offsetY: 10,
      expandOnClick: false,
      donut: {
        size: '80%',
        background: 'transparent',
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: '20px',
            color: '#495057',
            offsetY: -35,
          },
          value: {
            show: true,
            fontSize: '15px',
            color: undefined,
            offsetY: -30,
            formatter: function (val) {
              return val + '%'
            },
          },
          total: {
            show: true,
            showAlways: true,
            label: 'Total',
            fontSize: '22px',
            fontWeight: 600,
            color: '#495057',
          },
        },
      },
    },
  },
  grid: {
    padding: {
      bottom: -120,
    },
  },
  colors: [
    'var(--primary-color)',
    'rgba(50, 212, 132, 1)',
    'rgba(253, 175, 34, 1)',
    'rgba(0, 201, 255, 1)',
  ],
}

export const StatusData = [
  {
    label: 'Delivered',
    count: '1,754',
    colorClass: 'bg-primary-transparent svg-primary',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none" />
                <path d="M223.68,66.15L135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.35,44L178.57,92.29l-80.35-44Zm0,88L47.65,76,81.56,57.43l80.35,44Zm88,55.85h0l-80,43.79V133.83l32-17.51V152a8,8,0,0,0,16,0V107.56l32-17.51v85.76Z" />
            </svg>`,
  },
  {
    label: 'Cancelled',
    count: 634,
    colorClass: 'bg-success-transparent svg-success',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none" />
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
            </svg>`,
  },
  {
    label: 'Pending',
    count: 878,
    colorClass: 'bg-warning-transparent svg-warning',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none" />
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z" />
            </svg>`,
  },
  {
    label: 'Returned',
    count: 470,
    colorClass: 'bg-info-transparent svg-info',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none" />
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,112H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168a8,8,0,0,1,0,16Z" />
            </svg>`,
  },
]

export const Transactionsdata = [
  {
    name: 'Wireless Headphones',
    time: '2024-10-08, 14:35',
    amount: '$150.00',
    status: 'Paid',
    badgeClass: 'bg-success-transparent',
    bgClass: 'bg-primary-transparent svg-primary',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" fill="#5f6368">
                <g><rect fill="none" height="24" width="24" /></g>
                <g><path d="M12,3c-4.97,0-9,4.03-9,9v7c0,1.1,0.9,2,2,2h4v-8H5v-1c0-3.87,3.13-7,7-7s7,3.13,7,7v1h-4v8h4c1.1,0,2-0.9,2-2v-7 C21,7.03,16.97,3,12,3z" /></g>
            </svg>`,
  },
  {
    name: 'Smartwatch',
    time: '2024-10-08, 13:20',
    amount: '$75.50',
    status: 'Pending',
    badgeClass: 'bg-orange-transparent',
    bgClass: 'bg-secondary-transparent svg-secondary',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" fill="#5f6368">
                <path d="M0 0h24v24H0z" fill="none" opacity=".1" />
                <path d="M20 12c0-2.54-1.19-4.81-3.04-6.27L16 0H8l-.95 5.73C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27L8 24h8l.96-5.73C18.81 16.81 20 14.54 20 12zM6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z" />
            </svg>`,
  },
  {
    name: 'Gaming Laptop',
    time: '2024-10-08, 12:05',
    amount: '$250.00',
    status: 'Paid',
    badgeClass: 'bg-success-transparent',
    bgClass: 'bg-warning-transparent svg-warning',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" fill="#5f6368">
                <path d="M20,18c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v10c0,1.1,0.9,2,2,2H0v2h24v-2H20z M4,6h16v10H4V6z" />
            </svg>`,
  },
  {
    name: 'Bluetooth Speaker',
    time: '2024-10-08, 11:50',
    amount: '$120.00',
    status: 'Paid',
    badgeClass: 'bg-success-transparent',
    bgClass: 'bg-info-transparent svg-info',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" fill="#5f6368">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2c1.1 0 2 .9 2 2s-.9 2-2 2c-1.11 0-2-.9-2-2s.89-2 2-2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
            </svg>`,
  },
  {
    name: 'Fitness Tracker',
    time: '2024-10-08, 10:30',
    amount: '$60.00',
    status: 'Failed',
    badgeClass: 'bg-danger-transparent',
    bgClass: 'bg-success-transparent svg-success',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" fill="#5f6368">
                <path d="M15.11,12.45L14,10.24l-3.11,6.21C10.73,16.79,10.38,17,10,17s-0.73-0.21-0.89-0.55L7.38,13H2v5c0,1.1,0.9,2,2,2h16 c1.1,0,2-0.9,2-2v-5h-6C15.62,13,15.27,12.79,15.11,12.45z" />
                <path d="M20,4H4C2.9,4,2,4.9,2,6v5h6c0.38,0,0.73,0.21,0.89,0.55L10,13.76l3.11-6.21c0.34-0.68,1.45-0.68,1.79,0L16.62,11H22V6 C22,4.9,21.1,4,20,4z" />
            </svg>`,
  },
]

export const ActivityItems = [
  {
    iconClass: 'ri-shopping-cart-line',
    avatarTextClass: 'text-primary',
    title: 'New Order - #12345',
    subtitle: '2 items purchased by samantha',
    time: '2 hrs ago',
    timeColorClass: 'text-danger',
  },
  {
    iconClass: 'ri-checkbox-circle-line fs-14',
    avatarTextClass: 'text-secondary',
    title: 'Order Shipped - #12345',
    subtitle: 'Shipped',
    time: '1 day ago',
    timeColorClass: 'text-success',
  },
  {
    iconClass: 'ri-heart-3-line fs-14',
    avatarTextClass: 'text-warning',
    title: 'Product Favorited - women frock 12 ',
    subtitle: 'Added to favorites by mice',
    time: '2 days ago',
    timeColorClass: 'text-success',
  },
  {
    iconClass: 'ri-star-line fs-14',
    avatarTextClass: 'text-orange',
    title: 'Product Rated - DSL camera',
    subtitle: 'Rated 4.5 stars by Johnson',
    time: '3 days ago',
    timeColorClass: 'text-danger',
  },
  {
    iconClass: 'ri-price-tag-3-line fs-14',
    avatarTextClass: 'text-success',
    title: 'Product Discount - Nike Air Max',
    subtitle: 'Discounted price applied',
    time: '1 day ago',
    timeColorClass: 'text-danger',
  },
]
