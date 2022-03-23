import { validateLetters } from 'utils'
import { object, string } from 'yup'

export const registerSchema = object().shape({
  name: string()
    .min(3, 'El nombre debe tener mínimo 3 caracteres')
    .max(100, 'El nombre debe tener máximo 100 caracteres')
    .test('len', 'El nombre solo puede contener letras', value => !validateLetters(value))
    .required('El nombre es requerido'),
  nit: string()
    .required('El nit es requerido')
    .test('len', 'El NIT no coincide con el formato', value => validateLetters(value)),
  email: string().required('El email es requerido').email('Este no es un email válido'),
  confirmEmail: string()
    .required('Debe confirmar el email.')
    .when('email', (email, schema) =>
      schema.test({
        test: (confirmEmail?: string) => !!email && email === confirmEmail,
        message: 'Los correo no coinciden.',
      })
    ),
  password: string()
    .min(8, '¡La contraseña debe tener minimos 8 caracteres!')
    .max(15, 'La contraseña no puede tener más de 15 caracteres')
    .required('La contraseña es requerida'),
  confirmPassword: string()
    .required('Debe confirmar su contraseña.')
    .when('password', (password, schema) =>
      schema.test({
        test: (confirmPassword?: string) => !!password && password === confirmPassword,
        message: 'Las contraseñas no coinciden.',
      })
    ),
})

export const registerInitialValues = {
  name: '',
  password: '',
  nit: '',
  email: '',
  confirmEmail: '',
  confirmPassword: '',
}
