import authService from 'api/auth.service'
import { RegisterInterface } from 'interfaces'
import { NavigateFunction } from 'react-router-dom'
import { validateEmail, validateLetters } from 'utils'

export const validateRegister = (business: RegisterInterface, navigate: NavigateFunction) => {
  const { name, email, confirmEmail, password, confirmPassword } = business
  const data = { ...business, confirmEmail: undefined, confirmPassword: undefined }
  console.log(data)
  // if (name === '') {
  //   alert('Recuerda ingresar tu nombre')
  //   return
  // }

  // if (validateLetters(name)) {
  //   alert('El nombre que ingresaste no es válido')
  //   return
  // }

  // if (email === '') {
  //   alert('Recuerda ingresar un email')
  //   return
  // }

  // if (validateEmail(email)) {
  //   alert('El email que ingresaste no es válido')
  //   return
  // }

  // if (confirmEmail === '') {
  //   alert('Recuerda confirmar tu email')
  //   return
  // }

  // if (confirmEmail !== email) {
  //   alert('Los emails no coinciden')
  //   return
  // }

  // if (password === '') {
  //   alert('Recuerda ingresar una contraseña')
  //   return
  // }

  // if (password.length < 6) {
  //   alert('La contraseña debe contener mínimo seis caracteres')
  //   return
  // }

  // if (confirmPassword === '') {
  //   alert('Recuerda confirmar tu contraseña')
  //   return
  // }

  // if (confirmPassword !== password) {
  //   alert('Las contraseñas no coinciden')
  //   return
  // }
  // alert('Registro exitoso')
  authService.register(data, console.log)
  return navigate('/login')
}
