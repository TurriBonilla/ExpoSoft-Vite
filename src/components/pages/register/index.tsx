import { Button, Input } from 'components/atoms'
import { Divider } from 'components/templates'
import { dataFormRegister } from 'const'
import { RegisterInterface } from 'interfaces'
import { HTMLInputTypeAttribute, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { validateRegister } from './register'
import {
  WrapperItems,
  WrapperLabelAndInput,
  TextRegister,
  LinkRegister
} from './style'

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
    confirmPassword: ''
  })
  const navigate = useNavigate()

  return (
    <Divider>
      <TextRegister>
        Regístrate para conocer el nivel de potencial exportador de tu empresa.
      </TextRegister>
      <>
        <WrapperItems>
          {dataFormRegister.map(
            (element: DataFormRegisterAttributes, key: number) => (
              <WrapperLabelAndInput key={key}>
                <Input
                  id={element.name}
                  name={element.name}
                  placeholder={element.placeholder}
                  setState={setRegister}
                  type={element.type}
                />
              </WrapperLabelAndInput>
            )
          )}
        </WrapperItems>
      </>
      <Button
        type='button'
        color='primary'
        onClick={() => validateRegister(register, navigate)}
      >
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
