import { Button, Input } from 'components/atoms'
import { Divider } from 'components/templates'
import { dataFormRegister } from 'const'
import { RegisterInterface } from 'interfaces'
import { HTMLInputTypeAttribute, useState } from 'react'
import { validateRegister } from './register'
import { WrapperItems, WrapperLabelAndInput, TextRegister } from './style'
import { LinkRegister } from '../login/style'
import { useLocalStorage } from 'utils/localStorage'

interface DataFormRegisterAttributes {
  name: string
  placeholder: string
  type: HTMLInputTypeAttribute
}

const Register = () => {
  const [storedValue, setValue] = useLocalStorage('credentials')
  const [register, setRegister] = useState<RegisterInterface>({
    name: '',
    nit: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  })
  return (
    <Divider>
      <TextRegister>Regístrate para conocer el nivel de potencial exportador de tu empresa.</TextRegister>
      <>
        <WrapperItems>
          {dataFormRegister.map((element: DataFormRegisterAttributes, key: number) => (
            <WrapperLabelAndInput key={key}>
              <Input id={element.name} name={element.name} placeholder={element.placeholder} setState={setRegister} type={element.type} />
            </WrapperLabelAndInput>
          ))}
        </WrapperItems>
      </>
      <Button type='button' color='success' onClick={() => validateRegister(register, setValue)}>
        Registrarse
      </Button>
      <TextRegister>
        ¿Ya tienes una cuenta? &nbsp;
        <LinkRegister to='/login'>Inicia sesión aquí.</LinkRegister>
      </TextRegister>
    </Divider>
  )
}

export default Register
