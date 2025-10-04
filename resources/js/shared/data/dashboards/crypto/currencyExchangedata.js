
function randomizeArray(arg) {
  const array = arg.slice();
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];


const currencySeries = [
  {
    name: "Value",
    data: randomizeArray(sparklineData)
  },
]


const currencyOptions = ({ color }) => ({
  chart: {
    type: "area",
    height: 60,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 1,
      color: "#fff",
      opacity: 0.05,
    },
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: undefined,
    width: 1,
    dashArray: 0,
  },
  fill: {
    gradient: {
      enabled: false,
    },
  },
  yaxis: {
    min: 0,
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
  },
  colors: [color],
  tooltip: {
    enabled: false,
  },
})




export const bitciondata = [
  'Bitcoin',
  'Etherium',
  'Litecoin',
  'Ripple',
  'Cardano',
  'Neo',
  'Stellar',
  'EOS',
  'NEM',
], usdData = [
  'USD',
  'Pound',
  'Rupee',
  'Euro',
  'Won',
  'Dinar',
  'Rial',
],
  currencyCards = [
    {
      id: "btc-currency-chart",
      imgSrc: '/images/crypto-currencies/square-color/Bitcoin.svg',
      title: "Bitcoin - BTC",
      percent: "24.3%",
      inc: "+0.59",
      hcount: "24H",
      value: "0.00434",
      price: "$30.29",
      color: "primary",
      height: '60',
      chartOptions: currencyOptions({ color: 'rgba(152, 95, 253, 0.5)' }),
      chartSeries: currencySeries
    },
    {
      id: "eth-currency-chart",
      imgSrc: '/images/crypto-currencies/square-color/Ethereum.svg',
      title: "Etherium - ETH",
      percent: "17.67%",
      inc: "+1.30",
      hcount: "",
      value: "1.2923",
      price: "$2,283.73",
      color: "secondary",
      height: '60',
      chartOptions: currencyOptions({ color: 'rgba(255, 73, 205,0.5)' }),
      chartSeries: currencySeries
    },
    {
      id: "dash-currency-chart",
      imgSrc: '/images/crypto-currencies/square-color/Dash.svg',
      title: "Dash - DASH",
      percent: "17.67%",
      inc: "+1.30",
      hcount: "",
      value: "1.2923",
      price: "$2,283.73",
      color: "success",
      height: '60',
      chartOptions: currencyOptions({ color: 'rgba(253, 175, 34,0.5)' }),
      chartSeries: currencySeries
    },
    {
      id: "ltc-currency-chart",
      imgSrc: '/images/crypto-currencies/square-color/Litecoin.svg',
      title: "Litecoin - LTC",
      percent: "17.67%",
      inc: "+1.30",
      hcount: "",
      value: "1.2923",
      price: "$2,283.73",
      color: "warning",
      height: '60',
      chartOptions: currencyOptions({ color: 'rgba(0, 201, 255, 0.5)' }),
      chartSeries: currencySeries
    },
    {
      id: "xrs-currency-chart",
      imgSrc: '/images/crypto-currencies/square-color/Ripple.svg',
      title: "Ripple - XRS",
      percent: "17.67%",
      inc: "+1.30",
      hcount: "",
      value: "1.2923",
      price: "$2,283.73",
      color: "pink",
      height: '60',
      chartOptions: currencyOptions({ color: 'rgba(50, 212, 132, 0.5)' }),
      chartSeries: currencySeries
    },
    {
      id: "glm-currency-chart",
      imgSrc: '/images/crypto-currencies/square-color/Golem.svg',
      title: "Golem - GLM",
      percent: "17.67%",
      inc: "+1.30",
      hcount: "",
      value: "1.2923",
      price: "$2,283.73",
      color: "purple",
      height: '60',
      chartOptions: currencyOptions({ color: 'rgba(255, 103, 87, 0.5)' }),
      chartSeries: currencySeries
    },
    {
      id: "monero-currency-chart",
      imgSrc: '/images/crypto-currencies/square-color/Monero.svg',
      title: "Monero",
      percent: "17.67%",
      inc: "+1.30",
      hcount: "",
      value: "1.2923",
      price: "$2,283.73",
      color: "danger",
      height: '60',
      chartOptions: currencyOptions({ color: 'rgba(53, 181, 170, 0.5)' }),
      chartSeries: currencySeries
    },
    {
      id: "eos-currency-chart",
      imgSrc: '/images/crypto-currencies/square-color/EOS.svg',
      title: "EOS",
      percent: "17.67%",
      inc: "+1.30",
      hcount: "",
      value: "1.2923",
      price: "$2,283.73",
      color: "info",
      height: '60',
      chartOptions: currencyOptions({ color: 'rgba(190, 43, 235, 0.5)' }),
      chartSeries: currencySeries
    },
  ];



