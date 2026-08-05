export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const validatePassword = (password) => {
  return password.length >= 6
}

export const validatePhone = (phone) => {
  const re = /^\d{10}$/
  return re.test(phone)
}

export const validateRequired = (value) => {
  return value && value.trim().length > 0
}

export const validateMinLength = (value, min) => {
  return value && value.length >= min
}

export const validateMaxLength = (value, max) => {
  return value && value.length <= max
}

export const validateZipCode = (zip) => {
  const re = /^\d{5}$/
  return re.test(zip)
}

export const formatValidationErrors = (errors) => {
  return Object.values(errors).flat()
}