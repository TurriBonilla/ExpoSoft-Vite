import { useState } from 'react'
import { Button } from 'components/atoms'
import { Input } from 'components/atoms'
import { Divider } from 'components/templates'
import { validateLogin } from './login'
import { CredentialsInterface } from 'interfaces'
import { useNavigate } from 'react-router-dom'
import {
  WrapperLabelAndInput,
  LinkRegister
} from './style'

import { TextRegister } from '../register/style'

const Login = () => {
  const [credentials, setCredentials] = useState<CredentialsInterface>({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  return (
    <Divider>
      <WrapperLabelAndInput>
        <Input
          id='email'
          name='email'
          placeholder='Email'
          setState={setCredentials}
          type='email'
        />
      </WrapperLabelAndInput>
      <WrapperLabelAndInput>
        <Input
          id='password'
          name='password'
          placeholder='Contraseña'
          setState={setCredentials}
          type='password'
        />
      </WrapperLabelAndInput>
      <Button
        type='button'
        color='success'
        onClick={() => validateLogin(credentials, navigate)}
      >
        Ingresar
      </Button>
      <TextRegister>
        ¿Aún no tienes una cuenta? &nbsp;
        <LinkRegister to='/registro'>Regístrate aquí.</LinkRegister>
      </TextRegister>
    </Divider>
  )
}

export default Login
