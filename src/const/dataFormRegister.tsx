import { Input, InputNit } from 'components/atoms';

const dataFormRegister = [
  {
    name: 'name',
    placeholder: 'Nombre de la empresa',
    type: 'text',
    Input: Input,
  },
  {
    name: 'nit',
    placeholder:'XXX.XXX.XXX-Y',
    type: 'text',
    Input: InputNit,
  },
  {
    name: 'email',
    placeholder: 'Correo electrónico',
    type: 'email',
    Input: Input,
  },
  {
    name: 'confirmEmail',
    placeholder: 'Confirma tu correo',
    type: 'email',
    Input: Input,
  },
  {
    name: 'password',
    placeholder: 'Contraseña',
    type: 'password',
    Input: Input,
  },
  {
    name: 'confirmPassword',
    placeholder: 'Confirma tu contraseña',
    type: 'password',
    Input: Input,
  },
]
export default dataFormRegister
