const validateEmail = (email: string) => {
  if (
    !/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es|co|edu)+$/.test(
      email
    )
  ) {
    return true
  }
  return false
}

export default validateEmail
