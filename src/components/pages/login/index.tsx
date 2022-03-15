import { useState } from 'react'
import { Button } from 'components/atoms'
import { Input } from 'components/atoms'
import { Divider } from 'components/templates'
import { validateLogin } from './login'
import { CredentialsInterface } from 'interfaces'
import { useNavigate } from 'react-router-dom'
import { style } from './style'

const Login = () => {
	const [credentials, setCredentials] = useState<CredentialsInterface>({
		email: '',
		password: '',
	})

	const navigate = useNavigate()

	return (
		<Divider>
			<style.WrapperLabelAndInput>
				<Input
					id='email'
					name='email'
					placeholder='Email'
					setState={setCredentials}
					type='email'
				/>
			</style.WrapperLabelAndInput>
			<style.WrapperLabelAndInput>
				<Input
					id='password'
					name='password'
					placeholder='Contraseña'
					setState={setCredentials}
					type='password'
				/>
			</style.WrapperLabelAndInput>
			<Button
				type='button'
				color='primary'
				onClick={() => validateLogin(credentials, navigate)}
			>
				Ingresar
			</Button>
			<style.TextRegister>
				¿Aún no tienes una cuenta? &nbsp;
				<style.LinkRegister to='/registro'>
					Regístrate aquí.
				</style.LinkRegister>
			</style.TextRegister>
		</Divider>
	)
}

export default Login
