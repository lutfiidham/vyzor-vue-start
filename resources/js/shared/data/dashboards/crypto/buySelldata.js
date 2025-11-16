export const accountSummary = [
  {
    label: 'Total Buy',
    value: '$324.25 USD',
    color: 'success',
  },
  {
    label: 'Total Sell',
    value: '$4,235.25 USD',
    color: 'danger',
  },
  {
    label: 'Available Balance',
    value: '$22,803.92 USD',
    color: 'primary',
  },
  {
    label: 'Total Crypto Asset Value',
    value: '$456,683.00 USD',
    color: 'warning',
  },
]
export const sellSeries = [
  {
    name: 'Buy',
    data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
  },
  {
    name: 'Sell',
    data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89],
  },
]
export const sellOptions = {
  chart: {
    height: 370,
    type: 'bar',
    zoom: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '50%',
      borderRadius: 2,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'center',
    markers: {
      size: 4,
      strokeWidth: 0,
    },
  },
  stroke: {
    curve: 'smooth',
    width: ['2', '2'],
  },
  grid: {
    borderColor: '#f1f1f1',
    strokeDashArray: 3,
  },
  colors: ['var(--primary-color)', 'rgba(255, 73, 205, 1)'],
  yaxis: {
    title: {
      style: {
        color: '#adb5be',
        fontSize: '14px',
        fontFamily: 'poppins, sans-serif',
        fontWeight: 600,
        cssClass: 'apexcharts-yaxis-label',
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
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
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
      rotate: -90,
    },
  },
}
export const sellCrypto = ['BTC', 'ETH', 'XRP', 'DASH', 'NEO', 'LTC']
export const sellCrypto1 = ['USD', 'AED', 'AUD', 'ARS', 'AZN', 'BGN']
export const sellCrypto2 = ['BTC', 'ETH', 'XRP', 'DASH', 'NEO', 'LTC']
export const sellCrypto3 = ['USD', 'AED', 'AUD', 'ARS', 'AZN', 'BGN']
export const Buycards = [
  {
    title: 'BTC/USD',
    count: '3.2265',
    percent: '1.26%',
    icon: 'ti ti-arrow-narrow-up me-1 lh-1 fs-16 align-middle',
    iconColor: 'success fw-medium',
    cardClass: 'dashboard-main-card warning',
    priceColor: '  grid-cards',
    imgIcon: '/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg',
    avatarClass: 'avatar-lg',
  },
  {
    title: 'ETH/USD',
    count: '32.3534',
    percent: '3.64%',
    icon: 'ti ti-arrow-narrow-down me-1 lh-1 fs-16 align-middle',
    iconColor: 'danger fw-medium',
    priceColor: '  grid-cards',
    cardClass: 'dashboard-main-card dark',
    imgIcon: '/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg',
    avatarClass: 'avatar-lg',
  },
  {
    title: 'SOL/USD',
    count: '32.3534',
    percent: '0.75%',
    priceColor: '  grid-cards',
    icon: 'ti ti-arrow-narrow-up me-1 lh-1 fs-16 align-middle',
    iconColor: 'success fw-medium',
    cardClass: 'dashboard-main-card secondary',
    imgIcon: '/images/crypto-currencies/crypto-icons/solana-sol-logo.svg',
    avatarClass: 'avatar-lg',
  },
]
