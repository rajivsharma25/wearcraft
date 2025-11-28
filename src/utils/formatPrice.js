export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

export const calculateDiscount = (originalPrice, discountPercent) => {
  return originalPrice - (originalPrice * discountPercent) / 100;
};
