import { Button, Input, InputNit } from 'components/atoms'
import { Divider } from 'components/templates'
import { dataFormRegister } from 'const'
import { HTMLInputTypeAttribute, useRef } from 'react'
import { registerOnSubmit } from './functions'
import { WrapperItems, WrapperLabelAndInput, TextRegister } from './style'
import { LinkRegister } from '../login/style'
import { useLocalStorage, useFormikFiledProps } from 'hooks'
import { useFormik, getIn } from 'formik'
import { registerInitialValues, registerSchema } from './schema'
import { InputFormikProps } from 'interfaces'

interface DataFormRegisterAttributes {
  name: string
  placeholder: string
  type: HTMLInputTypeAttribute
  Input: (props: InputFormikProps) => JSX.Element
}

const Register = () => {
  const [storedValue, setStoredValue] = useLocalStorage('credentials')

  const formik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerSchema,
    onSubmit: (data) => {
      registerOnSubmit( data,setStoredValue )
    },
  })

  const [getFieldFormikProps] = useFormikFiledProps(formik)

  return (
    <Divider formik={formik}>
      <TextRegister>Regístrate para conocer el nivel de potencial exportador de tu empresa.</TextRegister>
      <WrapperItems>
        {dataFormRegister.map(({ name, placeholder, type, Input }: DataFormRegisterAttributes, key: number) => (
          <WrapperLabelAndInput key={key}>
              <Input {...getFieldFormikProps(name)} placeholder={placeholder} type={type} />
          </WrapperLabelAndInput>
        ))}
      </WrapperItems>
      <Button type='submit' color='success'>
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
