import { AxiosRequestConfig } from 'axios'
import { CredentialsInterface, RegisterData } from 'interfaces'
import { ExpoApi } from './config'

class AuthService {
  login(data: AxiosRequestConfig<CredentialsInterface>, handler: Function) {
    return ExpoApi.get('/api/auth', data).then(response => handler(response.data))
  }

  register(data: RegisterData, handler: Function) {
    return ExpoApi.post('/api/auth', data).then(response => handler(response.data))
  }
}

export default new AuthService()
