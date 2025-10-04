

// Patient Statistics
export const MedicalSeries = [
    {
        name: "Treated Patients",
        data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
    },
    {
        name: "Active Patients",
        data: [74, 72, 87, 116, 88, 85, 100, 73, 53, 84, 107, 64],
    },
    {
        name: "New Patients",
        data: [84, 82, 97, 126, 98, 95, 110, 83, 63, 94, 117, 74],
    }
]
export const MedicalOptions = {
    chart: {
        stacked: true,
        type: "bar",
        height: 260,
    },
    grid: {
        borderColor: "#f5f4f4",
        strokeDashArray: 5,
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    colors: [
        "var(--primary-color)",
        "var(--primary06)",
        "var(--primary03)",
    ],
    plotOptions: {
        bar: {
            columnWidth: "40%",
            borderRadius: 4
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        position: "bottom",
        horizontalAlign: "center",
        fontSize: "11px",
        fontFamily: "Helvetica, Arial",
        fontWeight: 600,
        offsetX: 0,
        offsetY: 10,
        labels: {
            colors: '#74767c',
        },
        markers: {
            size: 4,
            strokeWidth: 0,
            strokeColor: "#fff",
            fillColors: undefined,
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0,
        },
    },
    yaxis: {
        title: {
            style: {
                color: "#adb5be",
                fontSize: "14px",
                fontWeight: 600,
                cssClass: "apexcharts-yaxis-label",
            },
        },
        axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
        },
        labels: {
            formatter: function (y) {
                return y.toFixed(0) + "k";
            },
        },
    },
    xaxis: {
        type: "month",
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "sep",
            "oct",
            "nov",
            "dec",
        ],
        axisBorder: {
            show: false,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: false,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
        },
        labels: {
            rotate: -90,
        },
    },
}

// Patients Visits
export const PatientsSeries = [89, 75]
export const PatientsOptions = {
    chart: {
        height: 227,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            background: '#000',
            startAngle: -135,
            endAngle: 135,
            hollow: {
                margin: 15,
                size: '60%',
                background: '#000'
            },
            track: {
                background: '#000',
                strokeWidth: '20',
                margin: 6,
            },
            dataLabels: {
                show: true,
                name: {
                    show: true,
                    fontSize: '20px',
                    color: '#495057',
                    offsetY: -5
                },
                value: {
                    show: true,
                    fontSize: '22px',
                    color: undefined,
                    offsetY: 5,
                    fontWeight: 600,
                    formatter: function (val) {
                        return val + ""
                    }
                },
                total: {
                    show: true,
                    showAlways: true,
                    label: 'Total Patients',
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#495057',
                }
            }
        }
    },
    stroke: {
        dashArray: 4,
        width: 5
    },
    colors: [
        "var(--primary-color)",
        "rgba(var(--secondary-rgb), 1)",
    ],
    labels: ['Female', 'Male'],
}

//Top Departments
export const DepartmentSeries = [
    {
        data: [400, 430, 470, 540, 600, 800],
        name: "Patients",
    },
]
export const DepartmentOptions = {
    chart: {
        type: "bar",
        height: 358,
        toolbar: {
            show: false,
        },
    },
    fill: {
        type: "solid",
    },
    plotOptions: {
        bar: {
            borderRadius: 3,
            horizontal: true,
            columnWidth: "20%",
            barHeight: "40%",
        },
    },
    colors: ["var(--primary-color)"],
    grid: {
        show: false,
        enabled: false,
        borderColor: "transparent",
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        categories: [
            "Dermatologists",
            "Cardiologist",
            "Gynecologist",
            "Dentist",
            "Neurosurgeon",
            "Orthopedic ",
        ],
        labels: {
            show: true,
            style: {
                colors: "#adb5be",
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
                colors: "#adb5be",
                fontSize: "11px",
                fontWeight: 600,
                cssClass: "apexcharts-yaxis-label",
            },
        },
    },
}


//Available Treatments
export const Departments = [
    {
        id: 1,
        iconClass: 'ti ti-heartbeat',
        btnClass: 'primary',
        label: 'Cardiology',
    },
    {
        id: 2,
        iconClass: 'ti ti-baby-carriage',
        btnClass: 'secondary',
        label: 'Pediatrics',
    },
    {
        id: 3,
        iconClass: 'ti ti-bone',
        btnClass: 'success',
        label: 'Orthopedic',
    },
    {
        id: 4,
        iconClass: 'ti ti-activity-heartbeat',
        btnClass: 'orange',
        label: 'Neurology',
    },
    {
        id: 5,
        iconClass: 'ti ti-brand-debian',
        btnClass: 'info',
        label: 'Psychiatry',
    },
    {
        id: 6,
        iconClass: 'bi bi-three-dots',
        btnClass: 'warning',
        label: 'More',
    },
],
    // Today's Appointments
    Appointments= [
        {
            id: 1,
            name: 'John Doe',
            gender: 'Male',
            age: 32,
            department: 'General Checkup',
            time: '10:00 AM',
            imageUrl: '/images/faces/12.jpg',
            badgeClass: 'primary',
        },
        {
            id: 2,
            name: 'Sarah Smith',
            gender: 'Female',
            age: 45,
            department: 'Dermatology',
            time: '10:30 AM',
            imageUrl: '/images/faces/5.jpg',
            badgeClass: 'secondary',
        },
        {
            id: 3,
            name: 'Mark Johnson',
            gender: 'Male',
            age: 29,
            department: 'Cardiology',
            time: '11:00 AM',
            imageUrl: '/images/faces/11.jpg',
            badgeClass: 'warning',
        },
        {
            id: 4,
            name: 'Emily Clark',
            gender: 'Female',
            age: 38,
            department: 'Gynecology',
            time: '11:30 AM',
            imageUrl: '/images/faces/5.jpg',
            badgeClass: 'info',
        },
        {
            id: 5,
            name: 'Lisa White',
            gender: 'Female',
            age: 27,
            department: 'Pediatrics',
            time: '12:30 PM',
            imageUrl: '/images/faces/7.jpg',
            badgeClass: 'success',
            tdClass: "border-bottom-0"
        },
    ],
    //Available Doctors
    DoctorSchedules = [
        {
            id: 1,
            name: 'Dr. John Miller',
            department: 'Cardiology',
            departmentClass: 'primary',
            time: '9:00 AM - 12:00 PM',
        },
        {
            id: 2,
            name: 'Dr. Sarah Williams',
            department: 'Dermatology',
            departmentClass: 'secondary',
            time: '10:00 AM - 1:00 PM',
        },
        {
            id: 3,
            name: 'Dr. Mark Thompson',
            department: 'Neurology',
            departmentClass: 'warning',
            time: '1:30 PM - 4:30 PM',
        },
        {
            id: 4,
            name: 'Dr. Emily Davis',
            department: 'Gynecology',
            departmentClass: 'success',
            time: '9:30 AM - 12:30 PM',
        },
        {
            id: 5,
            name: 'Dr. James Clark',
            department: 'Orthopedics',
            departmentClass: 'info',
            time: '10:00 AM - 1:00 PM',
        },
        {
            id: 6,
            name: 'Dr. Lisa Harris',
            department: 'Pediatrics',
            departmentClass: 'danger',
            time: '8:00 AM - 11:00 AM',
        },
    ],
    GenderData = [
        {
            id: 1,
            label: "Male",
            iconClass: "male",
            avatarBgClass: "primary",
            trendIconClass: "up",
            trendText: "5.23%",
            trendColorClass: "success",
            percentage: "89%",
            trendLabel: "Since Last Week",
            trendColor: 'primary'
        },
        {
            id: 2,
            label: "Female",
            iconClass: "female",
            avatarBgClass: "secondary",
            trendIconClass: "down",
            trendText: "8.85%",
            trendColorClass: "danger",
            percentage: "75%",
            trendLabel: "Since Last Week",
            trendColor: 'secondary'
        }
    ],
    //Top Dcotors
    Doctors = [
        {
            id: 1,
            name: "Dr. John Miller",
            specialization: "Cardiologist",
            rating: 4.9,
            experience: "12+ Years Exp",
            image: '/images/faces/doctors/1.png',
        },
        {
            id: 2,
            name: "Dr. Sarah Williams",
            specialization: "Dermatologist",
            rating: 4.8,
            experience: "10+ Years Exp",
            image: '/images/faces/doctors/4.png',
        },
        {
            id: 3,
            name: "Dr. Mark Thompson",
            specialization: "Neurologist",
            rating: 4.7,
            experience: "15+ Years Exp",
            image: '/images/faces/doctors/2.png',
        },
        {
            id: 4,
            name: "Dr. Emily Davis",
            specialization: "Gynecologist",
            rating: 4.6,
            experience: "9+ Years Exp",
            image: '/images/faces/doctors/5.png',
        },
        {
            id: 5,
            name: "Dr. James Clark",
            specialization: "Orthopedic Surgeon",
            rating: 4.9,
            experience: "14+ Years Exp",
            image: '/images/faces/doctors/3.png',
        },
    ],
    //Patients Reports
    TestRecords = [
        {
            id: 1,
            name: "John Doe",
            testType: "Blood Test",
            iconClass: "droplet-filled",
            bgClass: "danger",
            statusIcon: "circle-check-filled",
            statusText: "Completed",
            statusColor: "success",
            date: "Feb 25, 2025",
        },
        {
            id: 2,
            name: "Emma Johnson",
            testType: "MRI Scan",
            iconClass: "brain",
            bgClass: "info",
            statusIcon: "clock-hour-3",
            statusText: "Pending",
            statusColor: "primary",
            date: "Feb 26, 2025",
        },
        {
            id: 3,
            name: "Michael Smith",
            testType: "X-Ray",
            iconClass: "bone",
            bgClass: "warning",
            statusIcon: "circle-check-filled",
            statusText: "Completed",
            statusColor: "success",
            date: "Feb 24, 2025",
        },
        {
            id: 4,
            name: "Sophia Williams",
            testType: "ECG",
            iconClass: "heartbeat",
            bgClass: "success",
            statusIcon: "reload",
            statusText: "In Progress",
            statusColor: "info",
            date: "Feb 25, 2025",
        },
        {
            id: 5,
            name: "James Brown",
            testType: "CT Scan",
            iconClass: "report",
            bgClass: "primary",
            statusIcon: "circle-check-filled",
            statusText: "Completed",
            statusColor: "success",
            date: "Feb 23, 2025",
        },
    ],
    //Patient Records
    PatientRecords = [
        {
            id: "SPK001",
            name: "John Doe",
            age: 45,
            gender: "Male",
            department: "General Checkup",
            doctorName: "Dr. Smith",
            doctorImage: '/images/faces/doctors/1.png',
            status: "Completed",
            statusBadgeClass: "success",
            date: "Feb 25, 2025",
            time: "10:00 AM",
        },
        {
            id: "SPK002",
            name: "Emma Johnson",
            age: 30,
            gender: "Female",
            department: "Cardiology",
            doctorName: "Dr. Wilson",
            doctorImage: '/images/faces/doctors/2.png',
            status: "Pending",
            statusBadgeClass: "warning",
            date: "Feb 26, 2025",
            time: "11:30 AM",
        },
        {
            id: "SPK003",
            name: "Michael Lee",
            age: 50,
            gender: "Male",
            department: "Orthopedic",
            doctorName: "Dr. Brown",
            doctorImage: '/images/faces/doctors/5.png',
            status: "Completed",
            statusBadgeClass: "success",
            date: "Feb 24, 2025",
            time: "01:00 PM",
        },
        {
            id: "SPK004",
            name: "Olivia Davis",
            age: 28,
            gender: "Female",
            department: "Dermatology",
            doctorName: "Dr. Martinez",
            doctorImage: '/images/faces/doctors/6.png',
            status: "Ongoing",
            statusBadgeClass: "primary",
            date: "Feb 25, 2025",
            time: "02:45 PM",
        },
        {
            id: "SPK005",
            name: "Ethan White",
            age: 40,
            gender: "Male",
            department: "Neurology",
            doctorName: "Dr. Anderson",
            doctorImage: '/images/faces/doctors/3.png',
            status: "Completed",
            statusBadgeClass: "success",
            date: "Feb 23, 2025",
            time: "09:00 AM",
        },
        {
            id: "SPK006",
            name: "Sophia Lewis",
            age: 35,
            gender: "Female",
            department: "Gastroenterology",
            doctorName: "Dr. Roberts",
            doctorImage: '/images/faces/doctors/4.png',
            status: "Pending",
            statusBadgeClass: "warning",
            date: "Feb 27, 2025",
            time: "12:15 PM",
        },
    ],
    MedicalCards = [
        {
            id: 1,
            cardClass: "primary",
            title: "Total Visitors",
            value: "11,232",
            month: "Since Last Month",
            percent: "3.24%",
            percentColor: "success",
            svgColor: "primary",
            svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"></path></g></svg>`,
            icon: "up"
        },
        {
            id: 2,
            cardClass: "secondary",
            title: "Appointments Booked",
            value: "2,976",
            month: "Since Last Month",
            percent: "15.69%",
            percentColor: "success",
            svgColor: "secondary",
            svgIcon: ` <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><rect fill="none" height="24" width="24"></rect><g><path d="M17,1H7C5.9,1,5,1.9,5,3v18c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V3C19,1.9,18.1,1,17,1z M7,18V6h10v12H7z M16,11V9.14 C16,8.51,15.55,8,15,8H9C8.45,8,8,8.51,8,9.14l0,1.96c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1l0,1.76C8,15.49,8.45,16,9,16h6 c0.55,0,1-0.51,1-1.14V13c-0.55,0-1-0.45-1-1C15,11.45,15.45,11,16,11z M12.5,14.5h-1v-1h1V14.5z M12.5,12.5h-1v-1h1V12.5z M12.5,10.5h-1v-1h1V10.5z"></path></g></svg>`,
            icon: "up"
        },
        {
            id: 3,
            cardClass: "warning",
            title: "Total Patients",
            value: "535",
            month: "Since Last Month",
            percent: "1.07%",
            percentColor: "danger",
            svgColor: "warning",
            svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><rect fill="none" height="24" width="24"></rect><g><path d="M8,6c0-2.21,1.79-4,4-4s4,1.79,4,4c0,2.21-1.79,4-4,4S8,8.21,8,6z M17,22h1c1.1,0,2-0.9,2-2l0-4.78 c0-1.12-0.61-2.15-1.61-2.66c-0.43-0.22-0.9-0.43-1.39-0.62L17,22z M12.34,17L15,11.33C14.07,11.12,13.07,11,12,11 c-2.53,0-4.71,0.7-6.39,1.56C4.61,13.07,4,14.1,4,15.22L4,22h2.34C6.12,21.55,6,21.04,6,20.5C6,18.57,7.57,17,9.5,17H12.34z M10,22 l1.41-3H9.5C8.67,19,8,19.67,8,20.5S8.67,22,9.5,22H10z"></path></g></svg>`,
            icon: "down"
        },
        {
            id: 4,
            cardClass: "success",
            title: "Available Rooms",
            value: "180",
            month: "Total Rooms",
            percent: "250",
            percentColor: "default",
            svgColor: "success",
            svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><g><path d="M16.5,12h-9c-0.55,0-1,0.45-1,1v1h11v-1C17.5,12.45,17.05,12,16.5,12z"></path><rect height="2" width="4" x="7.25" y="8.5"></rect><rect height="2" width="4" x="12.75" y="8.5"></rect><path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M19,17h-1.5v-1.5h-11V17H5v-3.83 c0-0.66,0.25-1.26,0.65-1.72V9c0-1.1,0.9-2,2-2H11c0.37,0,0.72,0.12,1,0.32C12.28,7.12,12.63,7,13,7h3.35c1.1,0,2,0.9,2,2v2.45 c0.4,0.46,0.65,1.06,0.65,1.72V17z"></path></g></g></svg>`,
            icon: ""
        },
    ];