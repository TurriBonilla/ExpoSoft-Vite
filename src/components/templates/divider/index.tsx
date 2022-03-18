import { Map } from 'assets'
import { Title } from 'components/atoms'
import {
  WrapperBody,
  WrapperBrand,
  WrapperForm,
  Form,
  Copyright,
  ContainerMap
} from './style'

interface DividerProps {
  children: JSX.Element | JSX.Element[]
}

const Divider = ({ children }: DividerProps) => {
  return (
    <WrapperBody>
      <WrapperForm>
        <Form>
          <Title title='ExpoSoft' />
          {children}
          <Copyright>
            Copyright &copy; {new Date().getFullYear()} ExpoSoft | Derechos
            reservados.
          </Copyright>
        </Form>
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
