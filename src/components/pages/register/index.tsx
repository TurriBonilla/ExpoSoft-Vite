import { Button, Input, InputNit } from 'components/atoms'
import { Divider } from 'components/templates'
import { dataFormRegister } from 'const'
import { HTMLInputTypeAttribute } from 'react'
import { registerOnSubmit } from './functions'
import { WrapperItems, WrapperLabelAndInput, TextRegister } from './style'
import { LinkRegister } from '../login/style'
import { useLocalStorage, useFormikFiledProps } from 'hooks'
import { useFormik, getIn } from 'formik'
import { registerInitialValues, registerSchema } from './schema'

interface DataFormRegisterAttributes {
  name: string
  placeholder: string
  type: HTMLInputTypeAttribute
}

const Register = () => {
  const formik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerSchema,
    onSubmit: (data, form) => {
      registerOnSubmit({ data, form, setStoredValue })
    },
  })

  const [storedValue, setStoredValue] = useLocalStorage('credentials')

  const [getFieldFormikProps] = useFormikFiledProps(formik)

  return (
    <Divider formik={formik}>
      <TextRegister>Regístrate para conocer el nivel de potencial exportador de tu empresa.</TextRegister>
      <WrapperItems>
        {dataFormRegister.map(({ name, placeholder, type }: DataFormRegisterAttributes, key: number) => (
          <WrapperLabelAndInput key={key}>
            {name !== 'nit' ? (
              <Input {...getFieldFormikProps(name)} placeholder={placeholder} type={type} />
            ) : (
              <InputNit {...getFieldFormikProps(name)} />
            )}
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
