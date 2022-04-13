import authService from 'api/auth.service'
import { RegisterInterface, ResponseAuth } from 'interfaces'

export const registerOnSubmit = (data: RegisterInterface, setStoredValue: (value: any) => void) => {
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
