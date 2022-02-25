import { Button, Input } from 'components/atoms'
import { Divider } from 'components/templates'
import { dataFormRegister } from 'const'
import { IRegister } from 'interfaces'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { validateRegister } from './register'
import { style } from './style'

const Register = () => {
  const [register, setRegister] = useState<IRegister>({
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
      <style.TextRegister>
        Regístrate para conocer el nivel de potencial exportador de tu empresa.
      </style.TextRegister>
      <>
        <style.WrapperItems>
          {dataFormRegister.map((element, key) => (
            <style.WrapperLabelAndInput key={key}>
              <Input
                id={element.id}
                name={element.id}
                placeholder={element.placeholder}
                setState={setRegister}
                type={element.type}
              />
            </style.WrapperLabelAndInput>
          ))}
        </style.WrapperItems>
      </>
      <Button
        tag='Registrarse'
        type='button'
        typeButton='primary'
        onClick={() => validateRegister(register, navigate)}
      />
      <style.TextRegister>
        ¿Ya tienes una cuenta? &nbsp;
        <style.LinkRegister to='/login'>Inicia sesión aquí.</style.LinkRegister>
      </style.TextRegister>
    </Divider>
  )
}

export default Register
