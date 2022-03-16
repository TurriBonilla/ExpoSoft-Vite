import { NavigateFunction } from 'react-router-dom'
import { CredentialsInterface } from 'interfaces'
import { validateEmail } from 'utils'

export const validateLogin = (
	credentials: CredentialsInterface,
	navigate: NavigateFunction
) => {
	const { email, password } = credentials

	if (email === '') {
		alert('Por favor ingresa un email')
		return
	}

	if (validateEmail(email)) {
		alert('El email que ingresaste no es válido')
		return
	}

	if (password === '') {
		alert('Por favor ingresa una contraseña')
		return
	}

	alert('Inicio de sesión exitoso')
	return navigate('/dashboard')
}
