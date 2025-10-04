
export const ecommerceCards = [
    {
        value: "$43,038.00",
        title: "Total Sales",
        color: "primary",
        svgIcon: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.777c0-2.609-1.903-4.945-4.5-5.198A5.005 5.005 0 0 0 7 7v1H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm12-12v2h-2v-2h2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-2 3h2v2H7v-2z"></path>
            </svg>`

    },
    {
        value: "$28,346.00",
        title: "Total Expenses",
        color: "secondary",
        svgIcon: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M20 12v6a1 1 0 0 1-2 0V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-6h-2zm-6-1v2H6v-2h8zM6 9V7h8v2H6zm8 6v2h-3v-2h3z"></path>
            </svg>
        `
    },
    {
        value: "1,29,368",
        title: "Total Visitors",
        color: "warning",
        svgIcon:
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
            </svg>`

    },
    {
        value: "35,367",
        title: "Total Orders",
        color: "success",
        svgIcon:
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"></path>
                <circle cx="10.5" cy="19.5" r="1.5"></circle>
                <circle cx="17.5" cy="19.5" r="1.5"></circle>
            </svg>
        `
    }
],
    productList = [
        {
            name: "Urban Chic Satchel",
            category: "Fashion & Accessories",
            price: 90,
            image: '/images/ecommerce/png/13.png',
        },
        {
            name: "TrailBlaze Runners",
            category: "Sports & Fitness",
            price: 60,
            image: '/images/ecommerce/png/15.png',
        },
        {
            name: "VisionTech SLR",
            category: "Electronics",
            price: 375,
            image: '/images/ecommerce/png/19.png',
        },
        {
            name: "FlexiSeat Office Chair",
            category: "Furniture",
            price: 150,
            image: '/images/ecommerce/png/6.png',
        },
        {
            name: "DecoDial Classic",
            category: "Home Decor",
            price: 35,
            image: '/images/ecommerce/png/11.png',
        },
    ],
    productsTable = [
        {
            id: 1,
            name: "TaoTronics Wall Clock",
            price: 699,
            quantity: "1,000",
            status: "In Stock",
            image: '/images/ecommerce/png/11.png',
        },
        {
            id: 2,
            name: "Club Fleece Hoodie",
            price: 55,
            quantity: "3,100",
            status: "In Stock",
            image: '/images/ecommerce/png/12.png',
        },
        {
            id: 3,
            name: "SmartGizmo Pro",
            price: 199,
            quantity: "1,250",
            status: "In Stock",
            image: '/images/ecommerce/png/14.png',
        },
        {
            id: 4,
            name: "TaoTronics Cattle",
            price: 699,
            quantity: "1,000",
            status: "Out Of Stock",
            image: '/images/ecommerce/png/16.png',
        },
        {
            id: 5,
            name: "UltraMaze School Bag",
            price: 89,
            quantity: "2,150",
            status: "In Stock",
            image: '/images/ecommerce/png/13.png',
            tdClass: 'border-bottom-0'
        },
    ],
    categorySalesList = [
        { category: "Mobile", sales: "$46,000" },
        { category: "Desktop", sales: "$28,500" },
        { category: "Tablet", sales: "$24,500" },
        { category: "Others", sales: "$19,600" },
    ],
    countryStats = [
        {
            name: "France",
            flag: '/images/flags/french_flag.jpg',
            trend: "up",
            value: "5,932",
        },
        {
            name: "Spain",
            flag: '/images/flags/spain_flag.jpg',
            trend: "down",
            value: "5,383",
        },
        {
            name: "Argentina",
            flag: '/images/flags/argentina_flag.jpg',
            trend: "up",
            value: "4,825",
        },
        {
            name: "Uae",
            flag: '/images/flags/uae_flag.jpg',
            trend: "up",
            value: "4,527",
        },
        {
            name: "Germany",
            flag: '/images/flags/germany_flag.jpg',
            trend: "down",
            value: "4,501",
        },
    ],
    transactionsEcommerce = [
        {
            name: "John Doe",
            method: "Credit Card",
            amount: "$120.50",
            status: "Completed",
            statusClass: "bg-success-transparent",
            image: '/images/faces/11.jpg',
        },
        {
            name: "Jane Smith",
            method: "PayPal",
            amount: "$45.00",
            status: "Pending",
            statusClass: "bg-warning-transparent",
            image: '/images/faces/2.jpg',
        },
        {
            name: "Robert Brown",
            method: "Debit Card",
            amount: "$75.75",
            status: "Failed",
            statusClass: "bg-danger-transparent",
            image: '/images/faces/12.jpg',
        },
        {
            name: "Emma Williams",
            method: "Credit Card",
            amount: "$220.00",
            status: "Completed",
            statusClass: "bg-success-transparent",
            image: '/images/faces/3.jpg',
        },
        {
            name: "Michael Johnson",
            method: "PayPal",
            amount: "$89.99",
            status: "Completed",
            statusClass: "bg-success-transparent",
            image: '/images/faces/10.jpg',
        },
        {
            name: "Sarah Jones",
            method: "Credit Card",
            amount: "$129.99",
            status: "Pending",
            statusClass: "bg-warning-transparent",
            image: '/images/faces/7.jpg',
        },
    ],
    ordersHistory = [
        {
            id: "$SPK15432",
            customer: "John Doe",
            productImage: '/images/ecommerce/png/13.png',
            productName: "Urban Chic Ladies Bag",
            quantity: 2,
            price: "$150.00",
            paymentMethod: "Credit Card",
            date: "2025-02-10",
            status: "Completed",
            statusClass: "bg-success",
        },
        {
            id: "$SPK15433",
            customer: "Jane Smith",
            productImage: '/images/ecommerce/png/15.png',
            productName: "TrailBlaze Runners",
            quantity: 1,
            price: "$230.75",
            paymentMethod: "PayPal",
            date: "2025-02-11",
            status: "Pending",
            statusClass: "bg-warning",
        },
        {
            id: "$SPK15434",
            customer: "Michael Green",
            productImage: '/images/ecommerce/png/19.png',
            productName: "VisionTech SLR",
            quantity: 3,
            price: "$95.50",
            paymentMethod: "Debit Card",
            date: "2025-02-12",
            status: "Failed",
            statusClass: "bg-danger",
        },
        {
            id: "$SPK15435",
            customer: "Sarah Johnson",
            productImage: '/images/ecommerce/png/6.png',
            productName: "FlexiSeat Sofa Chair",
            quantity: 1,
            price: "$112.00",
            paymentMethod: "Credit Card",
            date: "2025-02-13",
            status: "Completed",
            statusClass: "bg-success",
        },
        {
            id: "$SPK15436",
            customer: "William Brown",
            productImage: '/images/ecommerce/png/11.png',
            productName: "DecoDial Classic",
            quantity: 5,
            price: "$60.25",
            paymentMethod: "Credit Card",
            date: "2025-02-14",
            status: "Pending",
            statusClass: "bg-warning",
        },
        {
            id: "$SPK15437",
            customer: "Emma White",
            productImage: '/images/ecommerce/png/12.png',
            productName: "Club Fleece Hoodie",
            quantity: 2,
            price: "$145.80",
            paymentMethod: "PayPal",
            date: "2025-02-14",
            status: "Completed",
            statusClass: "bg-success",
            tdClass: "border-bottom-0"
        },
    ],
    ecommerceSeries = [{
        name: 'Profit',
        data: [99, 15, 36, 63, 42, 120, 78, 51, 32, 62, 76, 32],
        type: 'bar',
    }, {
        name: 'Sales',
        data: [136, 150, 158, 115, 102, 156, 135, 151, 125, 68, 164, 163],
        type: 'area',
    }, {
        name: 'Revenue',
        data: [128, 148, 39, 152, 169, 129, 112, 148, 150, 117, 198, 120],
        type: 'line',
    }],
    ecommerceOptions = {
        chart: {
            height: 320,
            type: 'line',
            toolbar: {
                show: false,
            },
            background: 'none',
            fill: "#fff",
        },
        plotOptions: {
            bar: {
                borderRadius: 2,
                columnWidth: '30%',
            }
        },
        grid: {
            borderColor: "#f1f1f1",
            strokeDashArray: 2,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        colors: ["var(--primary-color)", "rgb(255, 73, 205)", "var(--primary03)"],
        background: 'transparent',
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: [2, 1.5, 2],
            dashArray: [0, 0, 6]
        },
        legend: {
            show: true,
            position: 'top',
            markers: {
                width: 8,
                height: 8,
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            show: false,
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
                offsetY: 0
            },
            labels: {
                rotate: -90,
            }
        },
        fill: {
            type: ['solid', 'gradient', 'solid'],
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.1,
                stops: [0, 90, 100],
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "var(--primary-color)",
                            opacity: 1
                        },
                        {
                            offset: 75,
                            color: "var(--primary-color)",
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: 'var(--primary-color)',
                            opacity: 1
                        }
                    ],
                    [
                        {
                            offset: 0,
                            color: "rgba(255, 73, 205, 0.1)",
                            opacity: 0.1
                        },
                        {
                            offset: 75,
                            color: "rgba(255, 73, 205, 0.1)",
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: 'rgba(255, 73, 205, 0.2)',
                            opacity: 1
                        }
                    ],
                    [
                        {
                            offset: 0,
                            color: 'var(--primary03)',
                            opacity: 1
                        },
                        {
                            offset: 75,
                            color: 'var(--primary03)',
                            opacity: 0.1
                        },
                        {
                            offset: 100,
                            color: 'var(--primary03)',
                            opacity: 1
                        }
                    ],
                ]
            }
        },
        yaxis: {
            show: false,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            }
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    },
    ecommerceCategeriesSeries = [46000, 28500, 24500, 19600],
    ecommerceCategeriesOptions = {
        labels: ["Mobile", "Desktop", "Tablet", "Others"],
        chart: {
            height: 255,
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
            colors: "#fff",
            width: 3,
            dashArray: 0,
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: 10,
                expandOnClick: false,
                donut: {
                    size: '85%',
                    background: 'transparent',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '20px',
                            color: '#495057',
                            offsetY: -30
                        },
                        value: {
                            show: true,
                            fontSize: '15px',
                            color: undefined,
                            offsetY: -25,
                            formatter: function (val) {
                                return val + "%"
                            }
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Total',
                            fontSize: '22px',
                            fontWeight: 600,
                            color: '#495057',
                        }

                    }
                }
            }
        },
        grid: {
            padding: {
                bottom: -100
            }
        },
        colors: ["var(--primary-color)", "rgb(255, 73, 205)", "rgb(50, 212, 132)", "rgb(253, 175, 34)"],
    },
    feedbackData = [
        { percentage: 85, label: "Excellent", colorClass: "primary", emojiSrc: '/images/faces/emojis/1.png' },
        { percentage: 65, label: "Good", colorClass: "success", emojiSrc: '/images/faces/emojis/2.png' },
        { percentage: 64, label: "Neutral", colorClass: "info", emojiSrc: '/images/faces/emojis/3.png' },
        { percentage: 44, label: "Unsatisfied", colorClass: "warning", emojiSrc: '/images/faces/emojis/4.png' },
        { percentage: 35, label: "Very Unsatisfied", colorClass: "orange", emojiSrc: '/images/faces/emojis/5.png' },
        { percentage: 24, label: "Poor", colorClass: "danger", emojiSrc: '/images/faces/emojis/6.png' },
    ];