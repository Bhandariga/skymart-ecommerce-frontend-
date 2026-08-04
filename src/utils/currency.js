export const USD_TO_NPR = 135

export const usdToNpr = (usd) => {
  const npr = Number(usd) * USD_TO_NPR
  return Math.round(npr)
}

export const formatNpr = (usd) => {
  const npr = usdToNpr(usd || 0)
  return `रु. ${new Intl.NumberFormat('en-IN').format(npr)}`
}

export const calculateDiscount = (originalPrice, salePrice) => {
  if (!originalPrice || !salePrice) return 0
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100)
}
