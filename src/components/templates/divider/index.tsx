import { Map } from 'assets'
import { Title } from 'components/atoms'
import { style } from './style'

interface DividerProps {
  children: JSX.Element | JSX.Element[]
}

const Divider = ({ children }: DividerProps) => {
  return (
    <style.WrapperBody>
      <style.WrapperForm>
        <style.Form>
          <Title size={1.5} title='ExpoSoft' />
          {children}
          <style.Copyright>
            Copyright &copy; {new Date().getFullYear()} ExpoSoft | Derechos
            reservados.
          </style.Copyright>
        </style.Form>
        <style.ContainerMap className={'hidden'}>
          <img src={Map} alt='Mapa de Exportación' />
        </style.ContainerMap>
      </style.WrapperForm>
      <style.WrapperBrand>
        <style.ContainerMap>
          <img src={Map} alt='Mapa de Exportación' />
        </style.ContainerMap>
      </style.WrapperBrand>
    </style.WrapperBody>
  )
}

export default Divider
