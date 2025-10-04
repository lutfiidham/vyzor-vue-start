


export const DashboardCards = [
    {
        id: 1,
        title: "Total Projects",
        price: 454,
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><path d="M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M10.94,18L7.4,14.46l1.41-1.41 l2.12,2.12l4.24-4.24l1.41,1.41L10.94,18z M13,9V3.5L18.5,9H13z"></path></g></svg>`,
        svgColor: "primary",
    },
    {
        id: 2,
        title: "Completed Projects",
        price: 454,
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>`,
        svgColor: "success",
    },
    {
        id: 3,
        title: "In Progress Projects",
        price: 454,
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M6,2l0.01,6L10,12l-3.99,4.01L6,22h12v-6l-4-4l4-3.99V2H6z M16,16.5V20H8v-3.5l4-4L16,16.5z"></path></g></svg>`,
        svgColor: "secondary",
    },
    {
        id: 4,
        title: "Pending Projects",
        price: 454,
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M7,13.5c-0.83,0-1.5-0.67-1.5-1.5 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C8.5,12.83,7.83,13.5,7,13.5z M12,13.5c-0.83,0-1.5-0.67-1.5-1.5 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C13.5,12.83,12.83,13.5,12,13.5z M17,13.5c-0.83,0-1.5-0.67-1.5-1.5 c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C18.5,12.83,17.83,13.5,17,13.5z"></path></g></svg>`,
        svgColor: "warning",
    }
];
export const TaskSeries = [44, 55, 67, 83]

export const TaskOptions = {
    chart: {
        height: 235,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                show: true,
                name: {
                    show: true,
                    fontSize: '20px',
                    color: 'var(--default-text-color)',
                    offsetY: -5
                },
                value: {
                    show: true,
                    fontSize: '22px',
                    color: undefined,
                    offsetY: 5,
                    fontWeight: 600,
                },
                total: {
                    show: true,
                    showAlways: true,
                    label: 'Total',
                    fontSize: '14px',
                    fontWeight: 400,
                    color: 'var(--default-text-color)',
                }
            }
        }
    },
    stroke: {
        lineCap: "round",
    },
    colors: ["var(--primary-color)", "rgb(255, 73, 205)", "rgb(50, 212, 132)", "rgb(253, 175, 34)"],
    labels: ['On-Going', 'Completed', 'Todo-Tasks', 'Pending'],
}



export const TaskList = [
    {
        id: 1,
        type: "On-Going Tasks",
        className: "on-going",
        trend: "Increased",
        percentage: "0.45%",
        count: 440,
    },
    {
        id: 2,
        type: "Completed Tasks",
        className: "completed",
        trend: "Decreased",
        percentage: "2.54%",
        count: 550,
    },
    {
        id: 3,
        type: "To Do Tasks",
        className: "todo",
        trend: "Increased",
        percentage: "1.08%",
        count: 670,
    },
    {
        id: 4,
        type: "Pending Tasks",
        className: "pending",
        trend: "Increased",
        percentage: "3.65%",
        count: 830,
    },
];

export const ProjectSeries = [
    {
        type: "bar",
        name: "Projects",
        data: [
            {
                x: "Jan",
                y: 320,
            },
            {
                x: "Feb",
                y: 560,
            },
            {
                x: "Mar",
                y: 250,
            },
            {
                x: "Apr",
                y: 486,
            },
            {
                x: "May",
                y: 310,
            },
            {
                x: "Jun",
                y: 560,
            },
            {
                x: "Jul",
                y: 560,
            },
            {
                x: "Aug",
                y: 860,
            },
            {
                x: "Sep",
                y: 400,
            },
            {
                x: "Oct",
                y: 500,
            },
            {
                x: "Nov",
                y: 350,
            },
            {
                x: "Dec",
                y: 700,
            },
        ],
    },
    {
        type: "area",
        name: "Revenue",
        data: [
            {
                x: "Jan",
                y: 680,
            },
            {
                x: "Feb",
                y: 800,
            },
            {
                x: "Mar",
                y: 680,
            },
            {
                x: "Apr",
                y: 840,
            },
            {
                x: "May",
                y: 980,
            },
            {
                x: "Jun",
                y: 720,
            },
            {
                x: "Jul",
                y: 900,
            },
            {
                x: "Aug",
                y: 1000,
            },
            {
                x: "Sep",
                y: 850,
            },
            {
                x: "Oct",
                y: 950,
            },
            {
                x: "Nov",
                y: 750,
            },
            {
                x: "Dec",
                y: 860,
            },
        ],
    },
    {
        type: "bar",
        name: "Tasks",
        chart: {
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 5,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
            },
        },
        data: [
            {
                x: "Jan",
                y: 180,
            },
            {
                x: "Feb",
                y: 250,
            },
            {
                x: "Mar",
                y: 300,
            },
            {
                x: "Apr",
                y: 350,
            },
            {
                x: "May",
                y: 350,
            },
            {
                x: "Jun",
                y: 250,
            },
            {
                x: "Jul",
                y: 150,
            },
            {
                x: "Aug",
                y: 250,
            },
            {
                x: "Sep",
                y: 350,
            },
            {
                x: "Oct",
                y: 350,
            },
            {
                x: "Nov",
                y: 250,
            },
            {
                x: "Dec",
                y: 200,
            },
        ],
    },
]
export const ProjectOptions = {
    chart: {
        type: "area",
        height: 408,
        animations: {
            speed: 100
        },
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 6,
            left: 1,
            blur: 4,
            color: ['transparent', '#000', 'transparent'],
            opacity: 0.12
        },
    },
    colors: ["var(--primary-color)", "rgba(253, 175, 34, 1)", "rgba(50, 212, 132, 1)"],
    dataLabels: {
        enabled: false,
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
    fill: {
        type: 'gradient',
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
                        color: "var(--primary-color)",
                        opacity: 1
                    }
                ],
                [
                    {
                        offset: 0,
                        color: "rgba(253, 175, 34, 0.1)",
                        opacity: 1
                    },
                    {
                        offset: 75,
                        color: "rgba(253, 175, 34, 0.1)",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: "rgba(253, 175, 34, 0.1)",
                        opacity: 1
                    }
                ],
                [
                    {
                        offset: 0,
                        color: "rgba(50, 212, 132, 1)",
                        opacity: 1
                    },
                    {
                        offset: 75,
                        color: "rgba(50, 212, 132, 1)",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: "rgba(50, 212, 132, 1)",
                        opacity: 1
                    }
                ],
            ]
        }
    },
    stroke: {
        curve: ["smooth", "smooth", "smooth"],
        width: [0, 2, 0],
        dashArray: [0, 2, 0],
    },
    xaxis: {
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            formatter: function (value) {
                return "$" + value;
            },
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "30%",
            borderRadius: "2",
        },
    },
    tooltip: {
        y: [
            {
                formatter: function (e) {
                    return void 0 !== e ? e.toFixed(0) : e;
                },
            },
            {
                formatter: function (e) {
                    return void 0 !== e ? e.toFixed(0) : e;
                },
            },
            {
                formatter: function (e) {
                    return void 0 !== e ? e.toFixed(0) : e;
                },
            },
        ],
    },
    legend: {
        show: true,
        position: "top",
        markers: {
            size: 4,
            strokeWidth: 0,
        },
    },
}


// Recent Activity 

export const Recentupdates = [
    {
        id: 1,
        avatar: '/images/faces/1.jpg',
        name: "Jane Doe",
        status: "online",
        date: "February 17, 2025",
        description: "The redesign for NovaStream has been successfully completed. The new website is now live and accessible for users.",
        file: false,
    },
    {
        id: 2,
        avatar: '/images/faces/11.jpg',
        name: "John Smith",
        status: "online",
        date: "February 16, 2025",
        description: "UI redesign completed and deployed.",
        file: false,
    },
    {
        id: 3,
        avatar: '/images/faces/6.jpg',
        name: "Sarah Lee",
        status: "online",
        date: "February 15, 2025",
        description: "New algorithm ready for review.",
        file: true,
    },
    {
        id: 4,
        avatar: '/images/faces/14.jpg',
        name: "Mark Taylor",
        status: "offline",
        date: "February 14, 2025",
        description: "Ongoing work to optimize backend services, particularly in trip request handling and driver location updates.",
        file: false,
    },
    {
        id: 5,
        avatar: '/images/faces/7.jpg',
        name: "Emily Clark",
        status: "online",
        date: "February 13, 2025",
        description: "Integrated third-party tools",
        file: false,
    },
    {
        id: 6,
        avatar: '/images/faces/4.jpg',
        name: "Lisa Simpson",
        status: "online",
        date: "February 14, 2025",
        description: "Backend Optimization",
        file: false,
    },
];

//Urgent Tasks
export const UrgentTasks = [
    {
        id: "1",
        title: "Fix Critical Bug in Payment Gateway Integration",
        dueDate: "18-02-2025",
        avatars: ['/images/faces/2.jpg', '/images/faces/8.jpg', '/images/faces/2.jpg'],
        priority: "High",
        status: "In Progress",
        statusClass: "primary"
    },
    {
        id: "2",
        title: "Deploy Latest Security Update",
        dueDate: "19-02-2025",
        avatars: ['/images/faces/6.jpg', '/images/faces/9.jpg'],
        priority: "High",
        status: "Pending",
        statusClass: "warning"
    },
    {
        id: "3",
        title: "Complete Mobile App Feature Testing",
        dueDate: "21-02-2025",
        avatars: ['/images/faces/3.jpg', '/images/faces/5.jpg', '/images/faces/10.jpg', '/images/faces/15.jpg'],
        priority: "Medium",
        status: "Completed",
        statusClass: "success"
    },
    {
        id: "4",
        title: "Resolve User Account Authentication Issue",
        dueDate: "17-02-2025",
        avatars: ['/images/faces/11.jpg'],
        priority: "High",
        status: "In Progress",
        statusClass: "primary"
    },
    {
        id: "5",
        title: "Prepare Marketing Campaign Assets",
        dueDate: "20-02-2025",
        avatars: ['/images/faces/13.jpg', '/images/faces/16.jpg', '/images/faces/8.jpg'],
        priority: "Medium",
        status: "In Progress",
        statusClass: "primary"
    },
    {
        id: "6",
        title: "Update API for New Payment Method",
        dueDate: "22-02-2025",
        avatars: ['/images/faces/10.jpg', '/images/faces/5.jpg'],
        priority: "High",
        status: "Completed",
        statusClass: "success",
        tdClass: 'border-bottom-0'
    }
];

//Recent Transactions

export const Transactions = [
    {
        id: 1,
        name: "Sarah Miller",
        avatarColor: "primary",
        dateTime: "Feb 17,2025 - 3:45 PM",
        amount: "$1,500.00",
        status: "Completed",
    },
    {
        id: 2,
        name: "John Peterson",
        avatarColor: "secondary",
        dateTime: "Feb 16,2025 - 10:20 AM",
        amount: "$750.00",
        status: "Pending",
    },
    {
        id: 3,
        name: "Emily Clark",
        avatarColor: "warning",
        dateTime: "Feb 15,2025 - 2:30 PM",
        amount: "$2,000.00",
        status: "Completed",
    },
    {
        id: 4,
        name: "Mark Taylor",
        avatarColor: "info",
        dateTime: "Feb 14,2025 - 9:00 AM",
        amount: "$1,200.00",
        status: "Completed",
    },
    {
        id: 5,
        name: "Alex Johnson",
        avatarColor: "danger",
        dateTime: "Feb 12,2025 - 11:55 AM",
        amount: "$2,300.00",
        status: "Completed",
    },
    {
        id: 6,
        name: "Lisa Grant",
        avatarColor: "success",
        dateTime: "Feb 13,2025 - 4:10 PM",
        amount: "$500.00",
        status: "Failed",
    },
    {
        id: 7,
        name: "Jessica Lee",
        avatarColor: "orange",
        dateTime: "Feb 11,2025 - 5:30 PM",
        amount: "$1,100.00",
        status: "Pending",
    },
];

//Projects Summary

export const ProjectsSummary = [
    {
        id: "1",
        name: "NovaStream - UI Overhaul",
        startDate: "25-01-2025",
        endDate: "17-02-2025",
        status: "Completed",
        progress: 100,
        progressColor: "primary",
        avatars: ['/images/faces/12.jpg', '/images/faces/5.jpg', '/images/faces/3.jpg'],
        moreAvatars: 2,
        amount: "$15,000.00",
    },
    {
        id: "2",
        name: "TravelSphere - App Features",
        startDate: "01-12-2024",
        endDate: "30-03-2025",
        status: "In Progress",
        progress: 60,
        progressColor: "secondary",
        avatars: ['/images/faces/13.jpg'],
        amount: "$10,000.00",
    },
    {
        id: "3",
        name: "SoundWave - Algorithm Integration",
        startDate: "10-11-2024",
        endDate: "15-02-2025",
        status: "Completed",
        progress: 100,
        progressColor: "warning",
        avatars: ['/images/faces/1.jpg', '/images/faces/15.jpg', '/images/faces/8.jpg'],
        moreAvatars: 1,
        amount: "$20,000.00",
    },
    {
        id: "4",
        name: "RideMaster - Backend Optimization",
        startDate: "05-10-2024",
        endDate: "14-02-2025",
        status: "In Progress",
        progress: 80,
        progressColor: "info",
        avatars: ['/images/faces/6.jpg', '/images/faces/11.jpg'],
        amount: "$12,000.00",
    },
    {
        id: "5",
        name: "Connectify - Tool Integration",
        startDate: "01-01-2025",
        endDate: "13-02-2025",
        status: "Completed",
        progress: 100,
        progressColor: "success",
        avatars: ['/images/faces/4.jpg', '/images/faces/14.jpg', '/images/faces/4.jpg'],
        amount: "$8,500.00",
    },
    {
        id: "6",
        name: " NovaStream - UI Overhaul ",
        startDate: "25-01-2025",
        endDate: "17-02-2025",
        status: "Completed",
        progress: 100,
        progressColor: "danger",
        avatars: ['/images/faces/12.jpg', '/images/faces/12.jpg'],
        amount: "$15,000.00",
        moreAvatars: 2,
        // tdClass: 'border-bottom-0'
    },
];