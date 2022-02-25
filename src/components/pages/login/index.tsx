import { useState } from 'react'
import { Button } from 'components/atoms'
import { style } from './style'
import { Input } from 'components/atoms'
import { Divider } from 'components/templates'
import { validateLogin } from './login'
import { ICredentials } from 'interfaces'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [credentials, setCredentials] = useState<ICredentials>({
    email: '',
    password: ''
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
        tag='Ingresar'
        type='button'
        typeButton='primary'
        onClick={() => validateLogin(credentials, navigate)}
      />
      <style.TextRegister>
        ¿Aún no tienes una cuenta? &nbsp;
        <style.LinkRegister to='/registro'>Regístrate aquí.</style.LinkRegister>
      </style.TextRegister>
    </Divider>
  )
}

export default Login
