export const ordersCard = [
  {
    titles: 'Total Orders',
    count: '2,450',
    percent: '16.67%',
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Z" />
        </svg>`,
    priceColor: 'primary',
    icon: 'ti ti-trending-up me-1 fw-semibold align-middle d-inline-block',
    iconColor: 'success',
  },
  {
    titles: 'Pending Orders',
    count: '300',
    percent: '20%',
    svgIcon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z" />
        </svg>`,
    priceColor: 'secondary',
    icon: 'ti ti-trending-up me-1 fw-semibold align-middle d-inline-block',
    iconColor: 'success ',
  },
  {
    titles: 'Delivered',
    count: '1,800',
    percent: '5.88%',
    svgIcon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.35,44L178.57,92.29l-80.35-44Zm0,88L47.65,76,81.56,57.43l80.35,44Zm88,55.85h0l-80,43.79V133.83l32-17.51V152a8,8,0,0,0,16,0V107.56l32-17.51v85.76Z" />
        </svg>
      `,
    priceColor: 'warning',
    icon: 'ti ti-trending-up me-1 fw-semibold align-middle d-inline-block',
    iconColor: 'success ',
  },
  {
    titles: 'Cancelled',
    count: '100',
    percent: '16.67%',
    svgIcon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
        </svg>
      `,
    priceColor: 'success',
    icon: 'ti ti-trending-down me-1 fw-semibold align-middle d-inline-block',
    iconColor: 'danger ',
  },
  {
    titles: 'Returned',
    count: '50',
    percent: '28.57%',
    svgIcon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,109.66-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,173.66,133.66Z" />
        </svg>
      `,
    priceColor: 'info',
    icon: 'ti ti-trending-down me-1 fw-semibold align-middle d-inline-block',
    iconColor: 'danger ',
  },
]
export const initialOrders = [
  {
    orderId: '#SPK001',
    customerName: 'John Doe',
    avatar: '/images/faces/9.jpg',
    amount: '$699.99',
    shippingStatus: 'Pending',
    shippingStatusColor: 'warning',
    paymentStatus: 'Pending',
    paymentStatusColor: 'info',
    paymentMethod: 'Visa Card',
    orderDate: 'Jan 15, 2025, 09:45 AM',
    email: 'john.doe@example.com',
  },
  {
    orderId: '#SPK002',
    customerName: 'Jane Smith',
    avatar: '/images/faces/1.jpg',
    amount: '$89.99',
    shippingStatus: 'Shipped',
    shippingStatusColor: 'info',
    paymentStatus: 'Completed',
    paymentStatusColor: 'success',
    paymentMethod: 'MasterCard',
    orderDate: 'Feb 3, 2025, 02:30 PM',
    email: 'jane.smith@example.com',
  },
  {
    orderId: '#SPK003',
    customerName: 'Michael Brown',
    avatar: '/images/faces/10.jpg',
    amount: '$399.99',
    shippingStatus: 'Delivered',
    shippingStatusColor: 'success',
    paymentStatus: 'Failed',
    paymentStatusColor: 'orange',
    paymentMethod: 'PayPal',
    orderDate: 'Mar 10, 2025, 11:15 AM',
    email: 'michael.brown@example.com',
  },
  {
    orderId: '#SPK004',
    customerName: 'Emily White',
    avatar: '/images/faces/2.jpg',
    amount: '$129.99',
    shippingStatus: 'Cancelled',
    shippingStatusColor: 'danger',
    paymentStatus: 'Refunded',
    paymentStatusColor: 'warning',
    paymentMethod: 'Apple Pay',
    orderDate: 'Apr 5, 2025, 04:00 PM',
    email: 'emily.white@example.com',
  },
  {
    orderId: '#SPK005',
    customerName: 'Chris Johnson',
    avatar: '/images/faces/11.jpg',
    amount: '$199.99',
    shippingStatus: 'Shipped',
    shippingStatusColor: 'info',
    paymentStatus: 'Cancelled',
    paymentStatusColor: 'danger',
    paymentMethod: 'COD',
    orderDate: 'May 1, 2025, 10:30 AM',
    email: 'chris.johnson@example.com',
  },
  {
    orderId: '#SPK006',
    customerName: 'Sarah Lee',
    avatar: '/images/faces/3.jpg',
    amount: '$149.99',
    shippingStatus: 'Delivered',
    shippingStatusColor: 'success',
    paymentStatus: 'Refunded',
    paymentStatusColor: 'warning',
    paymentMethod: 'MasterCard',
    orderDate: 'Jun 10, 2025, 03:45 PM',
    email: 'sarah.lee@example.com',
  },
  {
    orderId: '#SPK007',
    customerName: 'David Green',
    avatar: '/images/faces/13.jpg',
    amount: '$79.99',
    shippingStatus: 'Delivered',
    shippingStatusColor: 'success',
    paymentStatus: 'Completed',
    paymentStatusColor: 'success',
    paymentMethod: 'PayPal',
    orderDate: 'Jul 18, 2025, 01:00 PM',
    email: 'david.green@example.com',
  },
  {
    orderId: '#SPK008',
    customerName: 'Olivia Davis',
    avatar: '/images/faces/4.jpg',
    amount: '$59.99',
    shippingStatus: 'Pending',
    shippingStatusColor: 'warning',
    paymentStatus: 'Pending',
    paymentStatusColor: 'info',
    paymentMethod: 'American Express',
    orderDate: 'Aug 25, 2025, 12:30 PM',
    email: 'olivia.davis@example.com',
  },
  {
    orderId: '#SPK009',
    customerName: 'James Wilson',
    avatar: '/images/faces/14.jpg',
    amount: '$59.99',
    shippingStatus: 'Cancelled',
    shippingStatusColor: 'danger',
    paymentStatus: 'Completed',
    paymentStatusColor: 'success',
    paymentMethod: 'Visa Card',
    orderDate: 'Sep 5, 2025, 06:00 PM',
    email: 'james.wilson@example.com',
  },
  {
    orderId: '#SPK010',
    customerName: 'Sophia Martinez',
    avatar: '/images/faces/5.jpg',
    amount: '$39.99',
    shippingStatus: 'Shipped',
    shippingStatusColor: 'info',
    paymentStatus: 'Failed',
    paymentStatusColor: 'orange',
    paymentMethod: 'COD',
    orderDate: 'Oct 12, 2025, 08:15 AM',
    email: 'sophia.martinez@example.com',
  },
]
