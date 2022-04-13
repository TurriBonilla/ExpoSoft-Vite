import { Button, Input } from 'components/atoms'
import { Divider } from 'components/templates'
import { validateLogin } from './functions'
import { useNavigate } from 'react-router-dom'
import { WrapperLabelAndInput, LinkRegister } from './style'
import { TextRegister } from '../register/style'
import { useFormik } from 'formik'
import { loginInitialValues, loginSchema } from './schema'
import { useFormikFiledProps } from 'hooks'

const Login = () => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginSchema,
    onSubmit: (data) => {
      validateLogin(navigate)
      return
    },
  })

  const [getFieldFormikProps] = useFormikFiledProps(formik)

  return (
    <Divider formik={formik}>
      <WrapperLabelAndInput>
        <Input {...getFieldFormikProps('email')} placeholder='Email' type='email' />
      </WrapperLabelAndInput>
      <WrapperLabelAndInput>
        <Input {...getFieldFormikProps('password')} placeholder='Contraseña' type='password' />
      </WrapperLabelAndInput>
      <Button type='submit' color='success'>
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
