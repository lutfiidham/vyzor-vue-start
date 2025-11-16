// Funnel Chart
export const Funnelseries = [
  {
    name: 'Funnel Series',
    data: [1380, 1100, 990, 880, 740, 548, 330, 200],
  },
]
export const Funneloptions = {
  chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      barHeight: '80%',
      isFunnel: true,
    },
  },
  dataLabels: {
    enabled: true,
    formatter(val, opt) {
      return `${opt.w.globals.labels[opt.dataPointIndex]}:  ${val}`
    },
    dropShadow: {
      enabled: true,
    },
  },
  title: {
    text: 'Recruitment Funnel',
    align: 'middle',
  },

  xaxis: {
    categories: [
      'Sourced',
      'Screened',
      'Assessed',
      'HR Interview',
      'Technical',
      'Verify',
      'Offered',
      'Hired',
    ],
  },
  legend: {
    show: false,
  },
  colors: ['#985ffd'],
}

// Pyramid Chart
export const Pyramidseries = [
  {
    name: '',
    data: [200, 330, 548, 740, 880, 990, 1100, 1380],
  },
]
export const Pyramidoptions = {
  chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      distributed: true,
      barHeight: '80%',
      isFunnel: true,
    },
  },
  colors: [
    '#985ffd',
    '#ff49cd',
    '#fdaf22',
    '#32d484',
    '#00c9ff',
    '#ff6757',
    'rgba(53, 181, 170,1)',
    'rgb(190, 43, 235)',
  ],
  dataLabels: {
    enabled: true,
    formatter(val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex]
    },
    dropShadow: {
      enabled: true,
    },
  },
  title: {
    text: 'Pyramid Chart',
    align: 'middle',
  },
  xaxis: {
    categories: [
      'Sweets',
      'Processed Foods',
      'Healthy Fats',
      'Meat',
      'Beans & Legumes',
      'Dairy',
      'Fruits & Vegetables',
      'Grains',
    ],
  },
  legend: {
    show: false,
  },
}
