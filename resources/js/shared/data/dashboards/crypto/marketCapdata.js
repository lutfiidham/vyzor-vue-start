
const martketSeries = [
    {
        name: "Value",
        data: [
            0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
            61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
            35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24,
            65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19,
            46,
        ],
    },
]

const marketOptions = ({ color }) => ({
    chart: {
        type: "line",
        height: 30,
        width: 120,
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.1,
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
    }, yaxis: {
        min: 0,
        show: false,
    },
    xaxis: {
        axisBorder: {
            show: false,
        },
    },
    tooltip: {
        enabled: false,
    },
    colors: [color],
})


const series = [{
    name: 'Value',
    data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
}]
const seriess = [{
    name: 'Value',
    data: [51, 35, 41, 35, 27, 93, 53, 30, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 61, 27, 54, 43, 19, 46]
}]
const options = ({ color }) => ({
    chart: {
        type: 'bar',
        height: 40,
        width: 150,
        sparkline: {
            enabled: true
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 1,
        dashArray: 0,
    },
    fill: {
        gradient: {
            enabled: false
        }
    }, yaxis: {
        min: 0,
        show: false
    },
    xaxis: {
        axisBorder: {
            show: false
        },
    },

    plotOptions: {
        bar: {
            columnWidth: "75%",
            borderRadius: 1
        }
    },
    colors: [color],
})



export const marketTable = [
    {
        id: 1,
        name: "Bitcoin",
        symbol: "BTC",
        marketCap: "$850B",
        price: "$44,500",
        priceChange1h: "+0.5%",
        priceChange24h: "-1.2%",
        volume: "$35B",
        circulatingSupply: "19M BTC",
        chartId: "btc-chart",
        priceChangeColor: 'success',
        priceChange24hColor: 'danger',
        chartOptions: marketOptions({ color: 'rgb(255, 103, 87)' }),
        chartSeries: martketSeries,
        priceIcon: "up",
        priceIcons: "down",
        img: '/images/crypto-currencies/square-color/Bitcoin.svg',
    },
    {
        id: 2,
        name: "Ethereum",
        symbol: "ETH",
        marketCap: "$400B",
        price: "$3,200",
        priceChange1h: "-1.2%",
        priceChange24h: "-1.2%",
        volume: "$25B",
        circulatingSupply: "118M ETH",
        chartId: "eth-chart",
        priceChangeColor: 'danger',
        priceChange24hColor: 'danger',
        chartOptions: marketOptions({ color: 'rgb(50, 212, 132)' }),
        chartSeries: martketSeries,
        priceIcon: "down",
        priceIcons: "down",
        img: '/images/crypto-currencies/square-color/Ethereum.svg',
    },
    {
        id: 3,
        name: "Golem",
        symbol: "GLM",
        marketCap: "$1.2B",
        price: "$0.56",
        priceChange1h: "+0.3%",
        priceChange24h: "-2.0%",
        volume: "$15M",
        circulatingSupply: "1.2B GNT",
        chartId: "glm-chart",
        priceChangeColor: 'success',
        priceChange24hColor: 'danger',
        chartOptions: marketOptions({ color: 'rgb(50, 212, 132)' }),
        chartSeries: martketSeries,
        priceIcon: "up",
        priceIcons: "down",
        img: '/images/crypto-currencies/square-color/Golem.svg',
    },
    {
        id: 4,
        name: "Dash",
        symbol: "DASH",
        marketCap: "$12B",
        price: "$200",
        priceChange1h: "-0.5%",
        priceChange24h: "+2.8%",
        volume: "$5B",
        circulatingSupply: "10M DASH",
        chartId: "dash-chart",
        priceChangeColor: 'danger',
        priceChange24hColor: 'success',
        chartOptions: marketOptions({ color: 'rgb(50, 212, 132)' }),
        chartSeries: martketSeries,
        priceIcon: "down",
        priceIcons: "up",
        img: '/images/crypto-currencies/square-color/Dash.svg',
    },
    {
        id: 5,
        name: "Litecoin",
        symbol: "LTC",
        marketCap: "$13B",
        price: "$185",
        priceChange1h: "+0.7%",
        priceChange24h: "-1.0%",
        volume: "$3B",
        circulatingSupply: "69M LTC",
        chartId: "lite-chart",
        priceChangeColor: 'success',
        priceChange24hColor: 'danger',
        chartOptions: marketOptions({ color: 'rgb(255, 103, 87)' }),
        chartSeries: martketSeries,
        priceIcon: "up",
        priceIcons: "down",
        img: '/images/crypto-currencies/square-color/Litecoin.svg',
    },
    {
        id: 6,
        name: "Ripple",
        symbol: "XRP",
        marketCap: "$35B",
        price: "$1.00",
        priceChange1h: "+0.1%",
        priceChange24h: "+0.5%",
        volume: "$2B",
        circulatingSupply: "40B XRP",
        chartId: "ripple-chart",
        priceChangeColor: 'success',
        priceChange24hColor: 'success',
        chartOptions: marketOptions({ color: 'rgb(50, 212, 132)' }),
        chartSeries: martketSeries,
        priceIcon: "up",
        priceIcons: "up",
        img: '/images/crypto-currencies/square-color/Ripple.svg',
    },
    {
        id: 7,
        name: "EOS",
        symbol: "EOS",
        marketCap: "$6.5B",
        price: "$7.00",
        priceChange1h: "-0.3%",
        priceChange24h: "+1.4%",
        volume: "$800M",
        circulatingSupply: "1B EOS",
        chartId: "eos-chart",
        priceChangeColor: 'danger',
        priceChange24hColor: 'success',
        chartOptions: marketOptions({ color: 'rgb(50, 212, 132)' }),
        chartSeries: martketSeries,
        priceIcon: "down",
        priceIcons: "up",
        img: '/images/crypto-currencies/square-color/EOS.svg',
    },
    {
        id: 8,
        name: "Bytecoin",
        symbol: "BCN",
        marketCap: "$3.5B",
        price: "$0.03",
        priceChange1h: "+2.1%",
        priceChange24h: "+0.9%",
        volume: "$50M",
        circulatingSupply: "184B BCN",
        chartId: "bytecoin-chart",
        priceChangeColor: 'success',
        priceChange24hColor: 'success',
        chartOptions: marketOptions({ color: 'rgb(255, 103, 87)' }),
        chartSeries: martketSeries,
        priceIcon: "up",
        priceIcons: "up",
        img: '/images/crypto-currencies/square-color/Bytecoin.svg',
    },
    {
        id: 9,
        name: "IOTA",
        symbol: "IOTA",
        marketCap: "$3.2B",
        price: "$1.15",
        priceChange1h: "+0.2%",
        priceChange24h: "-0.4%",
        volume: "$100M",
        circulatingSupply: "2.7B IOTA",
        chartId: "iota-chart",
        priceChangeColor: 'success',
        priceChange24hColor: 'danger',
        chartOptions: marketOptions({ color: 'rgb(255, 103, 87)' }),
        chartSeries: martketSeries,
        priceIcon: "up",
        priceIcons: "down",
        img: '/images/crypto-currencies/square-color/IOTA.svg',
    },
    {
        id: 10,
        name: "Monero",
        symbol: "XMR",
        marketCap: "$3.8B",
        price: "$200",
        priceChange1h: "-0.8%",
        priceChange24h: "-1.3%",
        volume: "$200M",
        circulatingSupply: "18M XMR",
        chartId: "monero-chart",
        priceChangeColor: 'danger',
        priceChange24hColor: 'danger',
        chartOptions: marketOptions({ color: 'rgb(50, 212, 132)' }),
        chartSeries: martketSeries,
        priceIcon: "up",
        priceIcons: "down",
        img: '/images/crypto-currencies/square-color/Monero.svg',
    }
],
    marketData = [
        {
            imgSrc: '/images/crypto-currencies/regular/Bitcoin.svg',
            title: "Bitcoin - BTC",
            subtitle: "BTC / USD",
            price: "$35,876.29",
            value: "$0.04",
            percent: "(+2.33%)",
            todayPrice: "+280.30(0.96%)",
            badge: true,
            rank: "#1",
            chartOptions: options({ color: 'rgb(50, 212, 132)' }),
            chartSeries: series,
            height: 40,
            width: 150,
            id: '#1'
        },
        {
            imgSrc: '/images/crypto-currencies/regular/Ethereum.svg',
            title: "Ethereum - ETH",
            subtitle: "ETH / USD",
            price: "$31,244.12",
            value: "$2.57",
            percent: "(+13.45%)",
            todayPrice: "+2,044.24(1.32%)",
            badge: false,
            rank: "#2",
            chartOptions: options({ color: 'rgb(50, 212, 132)' }),
            chartSeries: seriess,
            height: 40,
            width: 150,
            id: '#2'
        },
        {
            imgSrc: '/images/crypto-currencies/regular/Dash.svg',
            title: "Dash - DASH",
            subtitle: "DASH / USD",
            price: "$26,345.00",
            value: "$12.32",
            percent: "(+112.95%)",
            todayPrice: "+40.17 (1.52%)",
            badge: false,
            rank: "#105",
            chartOptions: options({ color: 'rgb(255, 103, 87)' }),
            chartSeries: series,
            height: 40,
            width: 150,
            id: '#105'
        },
    ],
    portfolioData = [
        {
            imgSrc: '/images/crypto-currencies/regular/Bitcoin.svg',
            name: "Bitcoin",
            quantity: "0.5 BTC",
            value: "$22,500",
        },
        {
            imgSrc: '/images/crypto-currencies/regular/litecoin.svg',
            name: "Litecoin",
            quantity: "20 LTC",
            value: "$4,000",
        },
        {
            imgSrc: '/images/crypto-currencies/regular/Ethereum.svg',
            name: "Ethereum",
            quantity: "5 ETH",
            value: "$16,000",
        },
    ];
