const validateEmail = (email: string) => {
  if (
    !/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(
      email
    )
  ) {
    return true
  }
  return false
}

export default validateEmail
