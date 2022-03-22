import { Map } from 'assets'
import { Title } from 'components/atoms'
import { FormikProvider, FormikContextType } from 'formik'
import { WrapperBody, WrapperBrand, WrapperForm, Form, Copyright, ContainerMap } from './style'

interface DividerProps {
  children: JSX.Element | JSX.Element[]
  formik: FormikContextType<any>
}

const Divider = ({ children, formik }: DividerProps) => {
  const { handleSubmit } = formik

  return (
    <WrapperBody>
      <WrapperForm>
        <FormikProvider value={formik}>
          <Form noValidate autoComplete='on' onSubmit={handleSubmit}>
            <Title>ExpoSoft</Title>
            {children}
            <Copyright>Copyright &copy; {new Date().getFullYear()} ExpoSoft | Derechos reservados.</Copyright>
          </Form>
        </FormikProvider>
        <ContainerMap className='hidden'>
          <img src={Map} alt='Mapa de Exportación' />
        </ContainerMap>
      </WrapperForm>
      <WrapperBrand>
        <ContainerMap>
          <img src={Map} alt='Mapa de Exportación' />
        </ContainerMap>
      </WrapperBrand>
    </WrapperBody>
  )
}

export default Divider
