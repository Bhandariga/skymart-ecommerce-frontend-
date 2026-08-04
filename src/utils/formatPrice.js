import { formatNpr, calculateDiscount as calcDiscount } from './currency'

export const formatPrice = (price) => formatNpr(price)

export const formatPriceWithDiscount = (price, discount) => {
  const discountedPrice = price - (price * (discount / 100))
  return formatPrice(discountedPrice)
}

export const calculateDiscount = (originalPrice, salePrice) => calcDiscount(originalPrice, salePrice)