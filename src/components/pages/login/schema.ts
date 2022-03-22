import { object, string } from 'yup'

export const loginSchema = object().shape({
  password: string()
    .min(8, '¡La contraseña debe tener minimos 8 caracteres!')
    .max(15, 'La contraseña no puede tener más de 15 caracteres')
    .required('La contraseña es requerida'),
  email: string().email('Este no es un correo valido').required('El email es requerido'),
})

export const loginInitialValues = {
  password: '',
  email: '',
}
