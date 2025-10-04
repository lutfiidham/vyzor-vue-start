


//Sessions By Device
const secondary = getComputedStyle(document.documentElement).getPropertyValue('--secondary-rgb').trim();
const warning = getComputedStyle(document.documentElement).getPropertyValue('--warning-rgb').trim();


export const analyticData = [
    {
        svgIcon:
            `<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"></path></g></svg>`
        ,
        svgColor: "primary",
        title: "Total Users",
        value: "42,643",
        icon: "ti ti-arrow-narrow-up me-1",
        iconColor: "success",
        percent: "0.45%",
        year: "This Year",
    },
    {
        svgIcon:
            `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z"></path></svg>`
        ,
        svgColor: "secondary",
        title: "Total Sessions",
        value: "143K",
        icon: "ti ti-arrow-narrow-up me-1",
        iconColor: "success",
        percent: "2.76%",
        year: "This Year",
    },
    {
        svgIcon:
            ` <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><g><path d="M7.5,11C9.43,11,11,9.43,11,7.5S9.43,4,7.5,4S4,5.57,4,7.5S5.57,11,7.5,11z M7.5,6C8.33,6,9,6.67,9,7.5S8.33,9,7.5,9 S6,8.33,6,7.5S6.67,6,7.5,6z"></path></g></g><g><rect height="2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)" width="20.63" x="1.69" y="11"></rect></g><g><g><path d="M16.5,13c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5S18.43,13,16.5,13z M16.5,18 c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S17.33,18,16.5,18z"></path></g></g></g></g></svg>`
        ,
        svgColor: "success",
        title: "Bounce Rate",
        value: "91.6%",
        icon: "ti ti-arrow-narrow-up me-1",
        iconColor: "success",
        percent: "3.85%",
        year: "This Year",
    },
    {
        svgIcon:
            `<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><g><rect height="2" width="6" x="9" y="1"></rect><path d="M19.03,7.39l1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41l-1.42,1.42C16.07,4.74,14.12,4,12,4c-4.97,0-9,4.03-9,9 c0,4.97,4.02,9,9,9s9-4.03,9-9C21,10.88,20.26,8.93,19.03,7.39z M13,14h-2V8h2V14z"></path></g></g></svg>`
        ,
        svgColor: "warning",
        title: "Avg Session Duration",
        value: "2m 27s",
        icon: "ti ti-arrow-narrow-down me-1",
        iconColor: "danger",
        percent: "2.44%",
        year: "This Year",
    },
],
    countryData = [
        {
            rank: 1,
            country: "USA",
            flagUrl: '/images/flags/us_flag.jpg',
            percentageChange: "2.15%",
            count: "45,234",
            arrow: 'up',
        },
        {
            rank: 2,
            country: "Argentina",
            flagUrl: '/images/flags/argentina_flag.jpg',
            percentageChange: "1.62%",
            count: "12,234",
            arrow: 'up',
        },
        {
            rank: 3,
            country: "Italy",
            flagUrl: '/images/flags/italy_flag.jpg',
            percentageChange: "0.85%",
            count: "7,234",
            arrow: 'down',
        },
        {
            rank: 4,
            country: "Russia",
            flagUrl: '/images/flags/russia_flag.jpg',
            percentageChange: "3.51%",
            count: "3,543",
            arrow: 'up',
        },
        {
            rank: 5,
            country: "Spain",
            flagUrl: '/images/flags/spain_flag.jpg',
            percentageChange: "0.56%",
            count: "2,463",
            arrow: 'up',
        },
        {
            rank: 6,
            country: "Uae",
            flagUrl: '/images/flags/uae_flag.jpg',
            percentageChange: "1.92%",
            count: "1,832",
            arrow: 'up',
        },
    ],
    influencerData = [
        {
            name: "Leo Phillips",
            role: "Influencer",
            avatarUrl: '/images/faces/1.jpg',
            earnings: "$12,465",
            percentage: "23.3%",
            status: "On process",
            percentageColor: 'primary',
            statusColor: 'info'
        },
        {
            name: "Noah Russell",
            role: "Influencer",
            avatarUrl: '/images/faces/2.jpg',
            earnings: "$3,576",
            percentage: "19.4%",
            status: "Achieved",
            percentageColor: 'secondary',
            statusColor: 'success'
        },
        {
            name: "Henry Morgan",
            role: "Youtuber",
            avatarUrl: '/images/faces/3.jpg',
            earnings: "$12,764",
            percentage: "12.76%",
            status: "On Process",
            percentageColor: 'success',
            statusColor: 'info'
        },
        {
            name: "Ava Taylor",
            role: "Content Creator",
            avatarUrl: '/images/faces/4.jpg',
            earnings: "$13,864",
            percentage: "16.78%",
            status: "Achieved",
            percentageColor: 'warning',
            statusColor: 'success'
        },
        {
            name: "Liam Parker",
            role: "Youtuber",
            avatarUrl: '/images/faces/5.jpg',
            earnings: "$9,756",
            percentage: "6.13%",
            status: "Achieved",
            percentageColor: 'info',
            statusColor: 'success',
            tableClass: "border-bottom-0"
        },
    ],
    browsersData = [
        {
            name: "Google",
            company: "Google, Inc",
            imageUrl: '/images/browsers/chrome.png',
            flagUrl: "",
            downloads: "1,215",
            progress: 78,
            progressColor: "primary",
        },
        {
            name: "Edge",
            company: "Microsoft Corp, Inc",
            imageUrl: '/images/browsers/edge.png',
            flagUrl: "",
            downloads: "978",
            progress: 72,
            progressColor: "secondary",
        },
        {
            name: "Firefox",
            company: "Mozilla, Inc",
            imageUrl: '/images/browsers/firefox.png',
            flagUrl: "",
            downloads: "815",
            progress: 64,
            progressColor: "warning",
        },
        {
            name: "Opera",
            company: "Opera, Inc",
            imageUrl: '/images/browsers/opera.png',
            flagUrl: "",
            downloads: "1,347",
            progress: 58,
            progressColor: "info",
        },
        {
            name: "Safari",
            company: "Apple Corp, Inc",
            imageUrl: '/images/browsers/safari.png',
            flagUrl: "",
            downloads: "1,123",
            progress: 63,
            progressColor: "success",
        },
        {
            name: "Uc Browser",
            company: "Uc Browser, Inc",
            imageUrl: '/images/browsers/uc.png',
            flagUrl: "",
            downloads: "1,189",
            progress: 55,
            progressColor: "danger",
        },
    ],
    engagementdata = [
        {
            rank: 1,
            name: "John Doe",
            avatarUrl: '/images/faces/12.jpg',
            countryFlagUrl: '/images/flags/us_flag.jpg',
            country: "United States",
            clicks: 120,
            conversionRate: "45%",
            percentage: "5.2%",
            views: '350'
        },
        {
            rank: 2,
            name: "Jane Smith",
            avatarUrl: '/images/faces/1.jpg',
            countryFlagUrl: '/images/flags/germany_flag.jpg',
            country: "Germany",
            clicks: 95,
            conversionRate: "38%",
            percentage: "6.8%",
            views: '240'
        },
        {
            rank: 3,
            name: "Chris Johnson",
            avatarUrl: '/images/faces/14.jpg',
            countryFlagUrl: '/images/flags/canada_flag.jpg',
            country: "Canada",
            clicks: 110,
            conversionRate: "40%",
            percentage: "4.5%",
            views: '290'
        },
        {
            rank: 4,
            name: "Emily Davis",
            avatarUrl: '/images/faces/4.jpg',
            countryFlagUrl: '/images/flags/argentina_flag.jpg',
            country: "Argentina",
            clicks: 75,
            conversionRate: "50%",
            percentage: "3.8%",
            views: '200'
        },
        {
            rank: 5,
            name: "Michael Brown",
            avatarUrl: '/images/faces/15.jpg',
            countryFlagUrl: '/images/flags/india_flag.jpg',
            country: "India",
            clicks: 135,
            conversionRate: "30%",
            percentage: "7.1%",
            views: '400'
        },
    ],
    listItemsData = [
        {
            path: "blog/how-to-improve-seo",
            views: "1,250",
            className: "primary",
        },
        {
            path: "products/new-launch",
            views: "1,100",
            className: "info",
        },
        {
            path: "services/digital-marketing",
            views: "950",
            className: "warning",
        },
        {
            path: "pricing",
            views: "890",
            className: "success",
        },
    ],
    sessionoptions = {
        labels: ["Mobile", "Tablet", "Desktop"],
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
            colors: "#fff",
            width: 0,
            dashArray: 0,
        },
        plotOptions: {
            pie: {
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
                            fontFamily: "Montserrat, sans-serif",
                            offsetY: -5
                        },
                        value: {
                            show: true,
                            fontSize: '22px',
                            color: undefined,
                            offsetY: 5,
                            fontWeight: 600,
                            fontFamily: "Montserrat, sans-serif",
                            formatter: function (val) {
                                return val + "%"
                            }
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Total Audience',
                            fontSize: '14px',
                            fontWeight: 400,
                            color: '#495057',
                        }
                    }
                }
            }
        },
        colors: ["var(--primary-color)", "rgb(255,73,205)", "rgb(253,175,34)"],
    },
    sessionseries = [1754, 1234, 878],
    audienceoptions = {
        chart: {
            toolbar: {
                show: false
            },
            type: 'line',
            height: 330,
        },
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        colors: ["var(--primary-color)", "rgb(255, 73, 205)"],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [1, 1.1],
            curve: ['straight', 'smooth'],
            dashArray: [0, 2]
        },
        legend: {
            show: false,
        },
        xaxis: {
            axisBorder: {
                color: '#e9e9e9',
            },
        },
        plotOptions: {
            bar: {
                columnWidth: "30%",
                borderRadius: 2
            }
        },
    },
    audienceseries = [
        {
            name: 'Views',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35]
        },
        {
            name: 'Followers',
            type: 'line',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27]
        },
    ],
    timeoptions = {
        chart: {
            height: 262,
            type: "heatmap",
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#32d484"],
        grid: {
            borderColor: "#f2f5f7",
        },
        xaxis: {
            categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: "11px",
                    fontWeight: 600,
                    cssClass: "apexcharts-xaxis-label",
                },
            },
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: "11px",
                    fontWeight: 600,
                    cssClass: "apexcharts-yaxis-label",
                },
            },
        },
    },
    timeseries = [
        {
            name: "1Am",
            data: generateData(7, {
                min: 0,
                max: 90,
            }),
        },
        {
            name: "4Am",
            data: generateData(7, {
                min: 0,
                max: 90,
            }),
        },
        {
            name: "8Am",
            data: generateData(7, {
                min: 0,
                max: 90,
            }),
        },
        {
            name: "12Am",
            data: generateData(7, {
                min: 0,
                max: 90,
            }),
        },
        {
            name: "3Pm",
            data: generateData(7, {
                min: 0,
                max: 90,
            }),
        },
        {
            name: "7Pm",
            data: generateData(7, {
                min: 0,
                max: 90,
            }),
        },
        {
            name: "12Pm",
            data: generateData(7, {
                min: 0,
                max: 90,
            }),
        },
    ],
    averageoptions = {
        chart: {
            type: 'bar',
            height: 280,
            toolbar: {
                show: false,
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            dashArray: [0],
        },
        grid: {
            show: true,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
            padding: {
                top: 2,
                right: 2,
                bottom: 2,
                left: 2
            },
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        yaxis: {
            min: 0,
            show: false,
            axisBorder: {
                show: false
            },
        },
        xaxis: {
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            axisBorder: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 2,
                columnWidth: "30%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["var(--primary-color)"],
        tooltip: {
            enabled: false,
        }
    },
    averageseries = [{
        name: 'Value',
        data: [65, 38, 56, 22, 65, 96, 53]
    }]



function generateData(count, yrange) {
    let i = 0;
    const series = [];

    while (i < count) {
        const x = "w" + (i + 1).toString();
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({ x, y });
        i++;
    }
    return series;
}