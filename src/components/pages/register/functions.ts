import authService from 'api/auth.service'
import { FormikHelpers } from 'formik'
import { RegisterInterface, ResponseAuth } from 'interfaces'

interface registerOnSubmitProps {
  data: RegisterInterface
  form: FormikHelpers<RegisterInterface>
  setStoredValue: (value: any) => void
}

export const registerOnSubmit = ({ data, form, setStoredValue }: registerOnSubmitProps) => {
  const { resetForm } = form
  const businessData = { ...data, confirmEmail: undefined, confirmPassword: undefined }

  authService.register(businessData, (response: ResponseAuth) => {
    const { statusCode, token, message, nit } = response
    if (statusCode === 201) {
      setStoredValue({ token, nit })
      return
    }
    alert(message)
  })
}
