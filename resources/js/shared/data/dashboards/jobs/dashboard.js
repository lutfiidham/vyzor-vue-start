
//Employees Performance
export const JobsEmployeeSeries = [
  {
    name: "Weekly",
    type: "column",
    data: [31, 11, 22, 37, 13, 22, 37, 21, 44, 22, 34, 25],
  },
  {
    name: "Monthly",
    type: "area",
    data: [44, 55, 41, 87, 22, 43, 21, 41, 56, 27, 43, 23],
  },
  {
    name: "Daily",
    type: "line",
    data: [30, 8, 20, 36, 15, 22, 37, 19, 44, 24, 32, 23],
  },
]
export const JobsEmployeeOptions = {
  chart: {
    height: 378,
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 5,
      left: 0,
      blur: 3,
      color: ["transparent", '#000', '#000'],
      opacity: 0.15
    },
  },
  stroke: {
    width: [0, 1, 2],
    curve: ["smooth", "stepline", "smooth"],
  },
  plotOptions: {
    bar: {
      columnWidth: "25%",
      borderRadius: 2,
    },
  },
  colors: ["var(--primary-color)", "#fdaf22", "rgb(255, 73, 205)"],
  fill: {
    opacity: [1, 0.05, 1],
    gradient: {
      inverseColors: false,
      shade: "light",
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100],
    },
  },
  grid: {
    show: true,
    borderColor: 'rgba(119, 119, 142, 0.08)',
    strokeDashArray: 3,
  },
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "right",
    fontSize: "11px",
    fontFamily: "Helvetica, Arial",
    fontWeight: 600,
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
  markers: {
    size: 0,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    axisBorder: {
      show: false,
      color: 'rgba(119, 119, 142, 0.05)',
    },
    axisTicks: {
      show: false,
      color: 'rgba(119, 119, 142, 0.05)',
    },
    labels: {
      style: {
        colors: "#8c9097",
        fontSize: '11px',
        fontWeight: 600,
        cssClass: 'apexcharts-xaxis-label',
      },
    }
  },
  yaxis: {
    title: {
      style: {
        color: '#adb5be',
        fontSize: '14px',
        fontWeight: 600,
        cssClass: 'apexcharts-yaxis-label',
      },
    },
    labels: {
      // formatter: function (y) {
      //     return y.toFixed(0) + " Projects";
      // },
      show: true,
      style: {
        colors: "#8c9097",
        fontSize: '11px',
        fontWeight: 600,
        cssClass: 'apexcharts-xaxis-label',
      },
    },
    min: 0,
  },
}

//Candidates Overview
export const JobsOverviewSeries = [12765, 15976]
export const JobsOverviewOptions = {
  labels: ["Female", "Male"],
  chart: {
    height: 236,
    type: 'donut',
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: "bottom",
    markers: {
      size: 5
    }
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
            offsetY: -5
          },
          value: {
            show: true,
            fontSize: '22px',
            color: undefined,
            offsetY: 5,
            fontWeight: 600,
            formatter: function (val) {
              return val + "%"
            }
          },
          total: {
            show: true,
            showAlways: true,
            label: 'Total Candidates',
            fontSize: '14px',
            fontWeight: 400,
            color: '#495057',
          }
        }
      }
    }
  },


  colors: ["var(--primary-color)", "rgb(253, 175, 34)"],
}



export const JobsCards = [
  {
    id: 1,
    title: "Total Employers",
    count: "1,256",
    percent: "1.86%",
    priceColor: "primary",
    flexClass: "flex-wrap",
    avatarClass: "avatar-lg flex-shrink-0",
    iconColor: "success",
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="#5f6368">
                <path d="M20,7h-5V4c0-1.1-0.9-2-2-2h-2C9.9,2,9,2.9,9,4v3H4C2.9,7,2,7.9,2,9v11c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9 C22,7.9,21.1,7,20,7z M9,12c0.83,0,1.5,0.67,1.5,1.5S9.83,15,9,15s-1.5-0.67-1.5-1.5S8.17,12,9,12z M12,18H6v-0.75c0-1,2-1.5,3-1.5 s3,0.5,3,1.5V18z M13,9h-2V4h2V9z M18,16.5h-4V15h4V16.5z M18,13.5h-4V12h4V13.5z" />
            </svg>`,
    icon: 'ti ti-arrow-narrow-up'
  },
  {
    id: 2,
    title: "Total Candidates",
    count: "4,026",
    percent: "0.40%",
    priceColor: "secondary",
    flexClass: "flex-wrap",
    avatarClass: "avatar-lg flex-shrink-0",
    iconColor: "success",
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="#5f6368">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>`,
    icon: 'ti ti-arrow-narrow-up'
  },
  {
    id: 3,
    title: "Total Locations",
    count: "18",
    percent: "0.8%",
    priceColor: "warning",
    flexClass: "flex-wrap",
    avatarClass: "avatar-lg flex-shrink-0",
    iconColor: "danger",
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="#5f6368">
                <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
            </svg>`,
    icon: 'ti ti-arrow-narrow-down'
  },
  {
    id: 4,
    title: "Resumes Generated",
    count: "13,232",
    percent: "15.44%",
    priceColor: "info",
    flexClass: "flex-wrap",
    avatarClass: "avatar-lg flex-shrink-0",
    iconColor: "success",
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="#5f6368">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
            </svg>`,
    icon: 'ti ti-arrow-narrow-up'
  },
  {
    id: 5,
    title: "Active Subscribers",
    count: "14,680",
    percent: "4.95%",
    priceColor: "success",
    flexClass: "flex-wrap",
    avatarClass: "avatar-lg flex-shrink-0",
    iconColor: "success",
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="#5f6368">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
            </svg>`,
    icon: 'ti ti-arrow-narrow-up'
  },
],
  //Recent Activity
  Jobsactivities = [
    {
      id: 1,
      name: "John Doe",
      avatar: '/images/faces/12.jpg',
      badgeText: "Approved",
      badgeClass: "bg-primary-transparent",
      description: "Completed a code review for the user authentication module.",
      timestamp: "Feb 19, 2025 - 10:30 AM",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: '/images/faces/2.jpg',
      badgeText: "Completed",
      badgeClass: "bg-success-transparent",
      description: "Processed employee leave requests for the upcoming quarter.",
      timestamp: "Feb 19, 2025 - 11:15 AM",
    },
    {
      id: 3,
      name: "Mark Taylor",
      avatar: '/images/faces/15.jpg',
      badgeText: "Approved",
      badgeClass: "bg-primary-transparent",
      description: "Finalized project scope for the new web app development project.",
      timestamp: "Feb 19, 2025 - 1:00 PM",
    },
    {
      id: 4,
      name: "Emily Johnson",
      avatar: '/images/faces/5.jpg',
      badgeText: "Pending Review",
      badgeClass: "bg-warning-transparent",
      description: "Delivered mockups for the new dashboard design.",
      timestamp: "Feb 19, 2025 - 3:00 PM",
    },
    {
      id: 5,
      name: "Chris Lee",
      avatar: '/images/faces/2.jpg',
      badgeText: "Completed",
      badgeClass: "bg-success-transparent",
      description: "Analyzed quarterly sales data and prepared the report for management.",
      timestamp: "Feb 19, 2025 - 4:30 PM",
    },
  ],
  // Recently Added Jobs
  JobsTable = [
    {
      id: 1,
      companyLogo: '/images/company-logos/1.png',
      companyName: "Nucleus OP",
      position: "Product Engineer",
      location: "Hyderabad",
      jobType: "Fulltime",
      badgeClass: "bg-primary-transparent",
    },
    {
      id: 2,
      companyLogo: '/images/company-logos/2.png',
      companyName: "Data SC",
      position: "Brand Specilyst",
      location: "Bangalor",
      jobType: "Intern",
      badgeClass: "bg-secondary-transparent",
    },
    {
      id: 3,
      companyLogo: '/images/company-logos/3.png',
      companyName: "Delooit XP",
      position: "UI Developer",
      location: "Chennai",
      jobType: "Full Time",
      badgeClass: "bg-primary-transparent",
    },
    {
      id: 4,
      companyLogo: '/images/company-logos/4.png',
      companyName: "Tech IP",
      position: "Manual Tester",
      location: "Hyderabad",
      jobType: "Parttime",
      badgeClass: "bg-success-transparent",
    },
    {
      id: 5,
      companyLogo: '/images/company-logos/6.png',
      companyName: "LogoTech",
      position: "AWS Developer",
      location: "Kerala",
      jobType: "Freelance",
      badgeClass: "bg-warning-transparent",
      tdClass: "border-bottom-0"
    },
  ],
  //Acquisitions
  Acquisitions = [
    { id: 1, label: "Total Applications", count: '1,982', badgeClass: "primary" },
    { id: 2, label: "Recruited", count: 214, badgeClass: "secondary", liClass: "border-top-0" },
    { id: 3, label: "Short Listed", count: 262, badgeClass: "success", liClass: "border-top-0" },
    { id: 4, label: "Rejected", count: 395, badgeClass: "warning", liClass: "border-top-0" },
    { id: 5, label: "Blocked", count: 79, badgeClass: "danger", liClass: "border-top-0" },
  ],
  //Recent Jobs
  JobsRecent = [
    {
      id: 1,
      initials: "AC",
      bgClass: "primary-transparent",
      title: "Ui Developer",
      companyInfo: "Achies",
      timeInfo: "12 hrs ago",
      jobType: "Full Time",
      badge: "Fresher",
      badgeClass: "success",
    },
    {
      id: 2,
      initials: "SI",
      bgClass: "secondary-transparent",
      title: "AWS Engineer",
      companyInfo: "Siachles",
      timeInfo: "2 hrs ago",
      jobType: "Part Time",
      badge: "+1 yrs - Experience",
      badgeClass: "info",
    },
    {
      id: 3,
      initials: "LS",
      bgClass: "success",
      title: "React Developer",
      companyInfo: "LifeSpace",
      timeInfo: "6 hrs ago",
      jobType: "Freelancer",
      jobTypeColor: 'text-primary',
      badge: "Fresher",
      badgeClass: "success",
    },
    {
      id: 4,
      initials: "MS",
      bgClass: "warning-transparent",
      title: "Angular Developer",
      companyInfo: "MegaSoft",
      timeInfo: "14 hrs ago",
      jobType: "Full Time",
      badge: "+2 yrs - Experience",
      badgeClass: "info",
    },
    {
      id: 5,
      initials: "J",
      bgClass: "danger-transparent",
      title: "UI Tester",
      companyInfo: "Joggle",
      timeInfo: "2 days ago",
      jobType: "Full Time",
      badge: "+3 yrs - Experience",
      badgeClass: "info",
    },
    {
      id: 6,
      initials: "NL",
      bgClass: "info-transparent",
      title: "Php - Laravel Developer",
      companyInfo: "Nirlog",
      timeInfo: "2 days ago",
      jobType: "Part Time Time",
      badge: "Fresher",
      badgeClass: "success",
    },
  ],
  //Recent Job Postings
  JobsPostings = [
    {
      id: '01',
      title: "Software Engineer",
      department: "IT",
      company: "TechCorp",
      location: "New York",
      applicants: 35,
      status: "Active",
      avatar: '/images/faces/11.jpg',
      applicantName: "John Doe",
      datePosted: "Feb 15, 2025",
    },
    {
      id: '02',
      title: "HR Manager",
      department: "HR",
      company: "PeopleWorks",
      location: "Chicago",
      applicants: 10,
      status: "Closed",
      avatar: '/images/faces/1.jpg',
      applicantName: "Jane Smith",
      datePosted: "Jan 30, 2025",
    },
    {
      id: '03',
      title: "Marketing Specialist",
      department: "Marketing",
      company: "MarketPro",
      location: "San Francisco",
      applicants: 25,
      status: "Active",
      avatar: '/images/faces/3.jpg',
      applicantName: "Sarah Lee",
      datePosted: "Feb 10, 2025",
    },
    {
      id: '04',
      title: "Data Scientist",
      department: "IT",
      company: "DataMind",
      location: "Remote",
      applicants: 12,
      status: "Active",
      avatar: '/images/faces/15.jpg',
      applicantName: "Mark Taylor",
      datePosted: "Feb 5, 2025",
    },
    {
      id: '05',
      title: "Graphic Designer",
      department: "Design",
      company: "Creatify",
      location: "Los Angeles",
      applicants: 20,
      status: "Closed",
      avatar: '/images/faces/7.jpg',
      applicantName: "Emily Johnson",
      datePosted: "Jan 25, 2025",
    },
    {
      id: '06',
      title: "Customer Support Manager",
      department: "Customer Care",
      company: "SupportInc",
      location: "Remote",
      applicants: 8,
      status: "Active",
      avatar: '/images/faces/13.jpg',
      applicantName: "Chris Lee",
      datePosted: "Jan 20, 2025",
    },
  ];