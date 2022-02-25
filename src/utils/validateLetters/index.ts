const validateLetter = (word: string) => {
  if (!/^[A-Z]+$/i.test(word)) {
    return true
  }
  return false
}
export default validateLetter
