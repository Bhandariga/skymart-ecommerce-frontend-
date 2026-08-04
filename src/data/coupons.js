// src/data/coupons.js
export const coupons = [
  {
    code: 'SAVE10',
    discount: 10,
    type: 'percentage',
    minOrder: 50,
    expires: '2024-12-31'
  },
  {
    code: 'WELCOME20',
    discount: 20,
    type: 'percentage',
    minOrder: 100,
    expires: '2025-01-15'
  },
  {
    code: 'FLAT50',
    discount: 50,
    type: 'fixed',
    minOrder: 200,
    expires: '2024-11-30'
  },
  {
    code: 'FREESHIP',
    discount: 0,
    type: 'shipping',
    minOrder: 75,
    expires: '2024-12-15'
  }
]