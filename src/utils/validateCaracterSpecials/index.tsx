const validateCaracterSpecials = (password = '') => {
  const array = password.split('')

  // const found = array.find(
  //   asciChar =>
  //     (asciChar >= 33 && asciChar <= 47) ||
  //     (asciChar >= 58 && asciChar <= 64) ||
  //     (asciChar >= 91 && asciChar <= 96) ||
  //     (asciChar >= 123 && asciChar <= 126)
  // )

  // for (let index = 0; index < password.length; index++) {
  //   const asciChar = password.charCodeAt(index)
  //   return (
  // (asciChar >= 33 && asciChar <= 47) ||
  // (asciChar >= 58 && asciChar <= 64) ||
  // (asciChar >= 91 && asciChar <= 96) ||
  // (asciChar >= 123 && asciChar <= 126)
  //   )
  // }
}

export default validateCaracterSpecials
