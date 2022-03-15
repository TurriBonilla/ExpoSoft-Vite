import { Button, Input } from 'components/atoms'
import { Divider } from 'components/templates'
import { dataFormRegister } from 'const'
import { InputProps, RegisterInterface } from 'interfaces'
import { HTMLInputTypeAttribute, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { validateRegister } from './register'
import { style } from './style'

interface DataFormRegisterAttributes {
	name: string
	placeholder: string
	type: HTMLInputTypeAttribute
}

const Register = () => {
	const [register, setRegister] = useState<RegisterInterface>({
		name: '',
		surname: '',
		email: '',
		confirmEmail: '',
		password: '',
		confirmPassword: '',
	})
	const navigate = useNavigate()

	return (
		<Divider>
			<style.TextRegister>
				Regístrate para conocer el nivel de potencial exportador de tu
				empresa.
			</style.TextRegister>
			<>
				<style.WrapperItems>
					{dataFormRegister.map(
						(element: DataFormRegisterAttributes, key: number) => (
							<style.WrapperLabelAndInput key={key}>
								<Input
									id={element.name}
									name={element.name}
									placeholder={element.placeholder}
									setState={setRegister}
									type={element.type}
								/>
							</style.WrapperLabelAndInput>
						)
					)}
				</style.WrapperItems>
			</>
			<Button
				type='button'
				color='primary'
				onClick={() => validateRegister(register, navigate)}
			>
				Registrarse
			</Button>
			<style.TextRegister>
				¿Ya tienes una cuenta? &nbsp;
				<style.LinkRegister to='/login'>
					Inicia sesión aquí.
				</style.LinkRegister>
			</style.TextRegister>
		</Divider>
	)
}

export default Register
