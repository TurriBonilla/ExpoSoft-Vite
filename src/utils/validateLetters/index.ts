const validateLetter = (word = '') => {
  if (!/^[A-Z\s]+$/i.test(word)) {
    return true
  }
  return false
}
export default validateLetter
