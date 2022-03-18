import { RegisterInterface } from 'interfaces'
import { NavigateFunction } from 'react-router-dom'
import { validateEmail, validateLetters } from 'utils'

export const validateRegister = (register: RegisterInterface, navigate: NavigateFunction) => {
  const { name, surname, email, confirmEmail, password, confirmPassword } = register

  if (name === '') {
    alert('Recuerda ingresar tu nombre')
    return
  }

  if (validateLetters(name)) {
    alert('El nombre que ingresaste no es válido')
    return
  }

  if (surname === '') {
    alert('Recuerda ingresar tu apellido')
    return
  }

  if (validateLetters(surname)) {
    alert('El apellido que ingresaste no es válido')
    return
  }

  if (email === '') {
    alert('Recuerda ingresar un email')
    return
  }

  if (validateEmail(email)) {
    alert('El email que ingresaste no es válido')
    return
  }

  if (confirmEmail === '') {
    alert('Recuerda confirmar tu email')
    return
  }

  if (confirmEmail !== email) {
    alert('Los emails no coinciden')
    return
  }

  if (password === '') {
    alert('Recuerda ingresar una contraseña')
    return
  }

  if (password.length < 6) {
    alert('La contraseña debe contener mínimo seis caracteres')
    return
  }

  if (confirmPassword === '') {
    alert('Recuerda confirmar tu contraseña')
    return
  }

  if (confirmPassword !== password) {
    alert('Las contraseñas no coinciden')
    return
  }
  alert('Registro exitoso')
  return navigate('/login')
}
