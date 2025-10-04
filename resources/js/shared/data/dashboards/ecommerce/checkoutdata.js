

export const checkoutSummary = [
  {
    id: 1,
    name: 'Adidas UltraBoost 2023',
    color: 'Green',
    quantity: 2,
    price: 159.99,
    imageUrl: '/images/ecommerce/jpg/1.jpg',
  },
  {
    id: 2,
    name: 'Reebok Classic Leather',
    color: 'Blue',
    quantity: 1,
    price: 89.99,
    imageUrl: '/images/ecommerce/jpg/2.jpg',
  },
  {
    id: 3,
    name: 'Nike Air Max 2025 Sneakers',
    color: 'Teal Blue',
    quantity: 1,
    price: 129.99,
    imageUrl: '/images/ecommerce/jpg/4.jpg',
  },
],
  summaryData = [
    { label: 'Sub Total', value: '$929.79' },
    { label: 'Discount (10%)', value: '- $92.97' },
    { label: 'Tax', value: '$0.00' },
    { label: 'Shipping', value: 'Free', isFree: true },
    { label: 'Total', class: 'text-primary', value: '$836.82', isTotal: true },
  ];