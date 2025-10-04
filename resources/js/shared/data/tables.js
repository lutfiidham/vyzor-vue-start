
export let
    basicRows = [
        { name: 'Mark', createdOn: '21, Dec 2021', number: '+1234-12340', status: 'Completed', color: "bg-outline-primary" },
        { name: 'Monika', createdOn: '29, April 2022', number: '+1523-12459', status: 'Failed', color: "bg-outline-warning" },
        { name: 'Madina', createdOn: '30, Nov 2022', number: '+1982-16234', status: 'Successful', color: "bg-outline-success" },
        { name: 'Bhamako', createdOn: '18, Mar 2022', number: '+1526-10729', status: 'Pending', color: "bg-outline-secondary" },
    ],
    bordered = [
        { name: "Sukuro Kim", status: "Active", email: "kimosukuro@gmail.com", avatar: '/images/faces/13.jpg', color: "success-transparent" },
        { name: "Hasimna", status: "Inactive", email: "hasimna2132@gmail.com", avatar: '/images/faces/6.jpg', color: "light", textColor: "dark" },
        { name: "Azimo Khan", status: "Active", email: "azimokhan421@gmail.com", avatar: '/images/faces/15.jpg', color: "success-transparent" },
        { name: "Samantha Julia", status: "Active", email: "julianasams143@gmail.com", avatar: '/images/faces/5.jpg', color: "success-transparent" }
    ],
    borderedPrimary = [
        { id: "#0007", date: "26-04-2022", name: "Mayor Kelly", avatar: '/images/faces/3.jpg', status: "Booked" },
        { id: "#0008", date: "15-02-2022", name: "Wicky Kross", avatar: '/images/faces/6.jpg', status: "Booked" },
        { id: "#0009", date: "23-05-2022", name: "Julia Cam", avatar: '/images/faces/1.jpg', status: "Booked" }
    ],
    activeTables = [
        { name: 'Mark', date: '21, Dec 2021', phone: '+1234-12340', status: 'Completed', statusClass: 'bg-primary', trClass: "table-active" },
        { name: 'Monika', date: '29, April 2022', phone: '+1523-12459', status: 'Failed', statusClass: 'bg-warning', },
        { name: 'Madina', date: '30, Nov 2022', phone: '+1982-16234', status: 'Successful', statusClass: 'bg-success', tdClass: "table-active" },
        { name: 'Bhamako', date: '18, Mar 2022', phone: '+1526-10729', status: 'Pending', statusClass: 'bg-secondary', },
    ],
    alwaysResponsive = [
        { name: 'Mayor Kelly', position: 'Manufacturer', badgeClass: 'bg-primary-transparent', badgeText: 'Team Lead', email: 'mayorkrlly@gmail.com', avatar: '/images/faces/3.jpg', collaborators: ['/images/faces/2.jpg', '/images/faces/8.jpg', '/images/faces/2.jpg'], progress: '52%', progressValue: 52, salary: '$10,984.29', length: '+4' },
        { name: 'Andrew Garfield', position: 'Managing Director', badgeClass: 'bg-warning-transparent', badgeText: 'Director', email: 'andrewgarfield@gmail.com', avatar: '/images/faces/12.jpg', collaborators: ['/images/faces/1.jpg', '/images/faces/5.jpg', '/images/faces/11.jpg', '/images/faces/15.jpg'], progress: '91%', progressValue: 91, salary: '$1.4 billion', length: '+4' },
        { name: 'Simon Cowel', position: 'Service Manager', badgeClass: 'bg-success-transparent', badgeText: 'Manager', email: 'simoncowel234@gmail.com', avatar: '/images/faces/14.jpg', collaborators: ['/images/faces/6.jpg', '/images/faces/16.jpg'], progress: '45%', progressValue: 45, salary: '$7,123.21', length: '+10' },
        { name: 'Mirinda Hers', position: 'Recruiter', badgeClass: 'bg-danger-transparent', badgeText: 'Employee', email: 'mirindahers@gmail.com', avatar: '/images/faces/5.jpg', collaborators: ['/images/faces/3.jpg', '/images/faces/10.jpg', '/images/faces/14.jpg'], progress: '21%', progressValue: 21, salary: '$2,325.45', length: '+6' },
    ],
    borderedSuccess = [
        { id: "#0011", date: "07-01-2022", name: "Helsenky", avatar: '/images/faces/10.jpg', status: "Delivered", color: "bg-success-transparent" },
        { id: "#0012", date: "18-05-2022", name: "Brodus", avatar: '/images/faces/14.jpg', status: "Delivered", color: "bg-success-transparent" },
        { id: "#0013", date: "19-03-2022", name: "Chikka Alen", avatar: '/images/faces/12.jpg', status: "Delivered", color: "bg-success-transparent" }
    ],
    borderedWarning = [
        { id: "#0014", date: "21-02-2022", name: "Sukuro Kim", avatar: '/images/faces/13.jpg', status: "Accepted", color: "bg-warning-transparent" },
        { id: "#0018", date: "26-03-2022", name: "Alex Carey", avatar: '/images/faces/11.jpg', status: "Accepted", color: "bg-warning-transparent" },
        { id: "#0020", date: "14-03-2022", name: "Pamila Anderson", avatar: '/images/faces/2.jpg', status: "Accepted", color: "bg-warning-transparent" }
    ],
    colorTable = [
        { id: 1, firstName: "Mark", lastName: "Otto", username: "@mdo" },
        { id: 2, firstName: "Jacob", lastName: "Thornton", username: "@fat" },
        { id: 3, firstName: "Larry the Bird", lastName: "Thornton", username: "@twitter" }
    ],
    colorvariantsTables = [
        { type: 'Default', title: 'Rita Book', status: 'Processed', badgeClass: 'bg-primary-transparent', quantity: 22, amount: '$2,012', trClass: '' },
        { type: 'Primary', title: 'Rhoda Report', status: 'Processed', badgeClass: 'bg-primary', quantity: 22, amount: '$4,254', trClass: 'table-primary' },
        { type: 'Secondary', title: 'Rita Book', status: 'Processed', badgeClass: 'bg-secondary', quantity: 26, amount: '$1,234', trClass: 'table-secondary' },
        { type: 'Success', title: 'Anne Teak', status: 'Processed', badgeClass: 'bg-success', quantity: 42, amount: '$2,623', trClass: 'table-success' },
        { type: 'Danger', title: 'Dee End', status: 'Processed', badgeClass: 'bg-danger', quantity: 52, amount: '$32,132', trClass: 'table-danger' },
        { type: 'Warning', title: 'Lee Nonmi', status: 'Processed', badgeClass: 'bg-warning', quantity: 10, amount: '$1,434', trClass: 'table-warning' },
        { type: 'Info', title: 'Lynne Gwistic', status: 'Processed', badgeClass: 'bg-info', quantity: 63, amount: '$1,854', trClass: 'table-info' },
        { type: 'Light', title: 'Fran Tick', status: 'Processed', badgeClass: 'bg-light text-dark', quantity: 5, amount: '$823', trClass: 'table-light' },
        { type: 'Dark', title: 'Polly Pipe', status: 'Processed', badgeClass: 'bg-dark text-white', quantity: 35, amount: '$1,832', trClass: 'table-dark' },
    ],
    groupDivideres= [
        { name: "Smart Watch", brand: "Slowtrack.inc", percentage: "24.23%", stock: "250/1786", color: "success", dir: "up" },
        { name: "White Sneakers", brand: "American & Co.inc", percentage: "12.45%", stock: "123/985", color: "danger", dir: "down" },
        { name: "Baseball Bat", brand: "Sports Company", percentage: "06.64%", stock: "124/232", color: "success", dir: "up" },
        { name: "Black Hoodie", brand: "Renolds Fabrics", percentage: "14.42%", stock: "192/2456", color: "success", dir: "up" }
    ],
    hoverableRows = [
        { src: '/images/faces/10.jpg', name: "Joanna Smith", email: "joannasmith14@gmail.com", category: "Fashion", color: "bg-primary-transparent", progress: 52, avatars: ['/images/faces/10.jpg', '/images/faces/2.jpg', '/images/faces/8.jpg'], extraAvatarsCount: 5, },
        { src: '/images/faces/2.jpg', name: "Kara Kova", email: "milesakara@gmail.com", category: "Clothing", color: "bg-warning-transparent", progress: 40, avatars: ['/images/faces/2.jpg', '/images/faces/4.jpg', '/images/faces/6.jpg'], extraAvatarsCount: 6, },
        { src: '/images/faces/16.jpg', name: "Donald Trimb", email: "donaldo21@gmail.com", category: "Electronics", color: "bg-dark-transparent", progress: 17, avatars: ['/images/faces/16.jpg', '/images/faces/1.jpg', '/images/faces/11.jpg', '/images/faces/15.jpg'], extraAvatarsCount: 2, },
        { src: '/images/faces/13.jpg', name: "Justin Gaethje", email: "justingae@gmail.com", category: "Sports", color: "bg-danger-transparent", progress: 72, avatars: ['/images/faces/13.jpg', '/images/faces/4.jpg', '/images/faces/6.jpg'], extraAvatarsCount: 5, },
    ],
    hoverableRow = [
        { number: "IN-2032", name: "Mark Cruise", email: "markcruise24@gmail.com", status: "Paid", statusClass: "bg-success-transparent", statusIcon: "ri-check-fill", date: "Jul 26, 2022", avatar: '/images/faces/15.jpg', },
        { number: "IN-2022", name: "Charanjeep", email: "charanjeep@gmail.in", status: "Paid", statusClass: "bg-success-transparent", statusIcon: "ri-check-fill", date: "Mar 14, 2022", avatar: '/images/faces/12.jpg', },
        { number: "IN-2014", name: "Samantha Julie", email: "julie453@gmail.com", status: "Cancelled", statusClass: "bg-danger-transparent", statusIcon: "ri-close-fill", date: "Feb 1, 2022", avatar: '/images/faces/5.jpg', },
        { number: "IN-2036", name: "Simon Cohen", email: "simon@gmail.com", status: "Refunded", statusClass: "bg-light text-dark", statusIcon: "ri-reply-line", date: "Apr 24, 2022", avatar: '/images/faces/11.jpg', },
    ],
    smallTables = [
        { name: 'Zelensky', date: '25-Apr-2021', status: 'Paid', statusClass: 'bg-success-transparent', cheacked: true },
        { name: 'Kim Jong', date: '29-Apr-2022', status: 'Pending', statusClass: 'bg-danger-transparent', cheacked: false },
        { name: 'Obana', date: '30-Nov-2022', status: 'Paid', statusClass: 'bg-success-transparent', cheacked: false },
        { name: 'Sean Paul', date: '01-Jan-2022', status: 'Paid', statusClass: 'bg-success-transparent', cheacked: false },
        { name: 'Karizma', date: '14-Feb-2022', status: 'Pending', statusClass: 'bg-danger-transparent', cheacked: false },
    ],
    stripedRows = [
        { id: "2022R-01", date: "27-01-2022", name: "Moracco" },
        { id: "2022R-02", date: "28-10-2022", name: "Thornton" },
        { id: "2022R-03", date: "22-10-2022", name: "Larry Bird" },
        { id: "2022R-04", date: "29-09-2022", name: "Erica Sean" }
    ],
    tableFoot = [
        { id: '01', location: 'Manchester', count: 232, percentage: '42%' },
        { id: '02', location: 'Barcelona', count: 175, percentage: '58%' },
        { id: '03', location: 'Portugal', count: 126, percentage: '32%' },
        { id: "Total", location: 'United States', count: 558, percentage: '56%', trClass: 'table-primary' },
    ],
    tableHeadwarning = [
        { name: "Harshrath", orderNumber: "#5182-3467", date: "24 May 2022", status: "Pending", statusClass: "primary-light" },
        { name: "Zozo Hadid", orderNumber: "#5182-3412", date: "02 July 2022", status: "Pending", statusClass: "primary-light" },
        { name: "Martiana", orderNumber: "#5182-3423", date: "15 April 2022", status: "Rejected", statusClass: "danger-light" },
        { name: "Alex Carey", orderNumber: "#5182-3456", date: "17 March 2022", status: "Processed", statusClass: "success-light" }
    ],
    tableWithCaption = [
        { rank: '01', country: 'United States', year: 2012, value: 1823 },
        { rank: '02', country: 'United Kingdom', year: 1012, value: 992 },
        { rank: '03', country: 'Germany', year: 914, value: 875 },
    ],
    tableWithTopCaption = [
        { rank: '1', name: 'Microsoft', revenue: '$170 billion', country: 'United States' },
        { rank: '2', name: 'HP', revenue: '$72 billion', country: 'United States' },
        { rank: '3', name: 'IBM', revenue: '$60 billion', country: 'United States' },
    ],
    withourBorder = [
        { name: "Harshrath", ticketId: "#5182-3467", date: "24 May 2022", status: "Fixed", badgeClass: "bg-primary" },
        { name: "Zozo Hadid", ticketId: "#5182-3412", date: "02 July 2022", status: "In Progress", badgeClass: "bg-warning" },
        { name: "Martiana", ticketId: "#5182-3423", date: "15 April 2022", status: "Completed", badgeClass: "bg-success" },
        { name: "Alex Carey", ticketId: "#5182-3456", date: "17 March 2022", status: "Pending", badgeClass: "bg-danger" }
    ];