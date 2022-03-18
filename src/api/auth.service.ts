import { AxiosRequestConfig } from 'axios'
import { CredentialsInterface, RegisterData } from 'interfaces'
import { ExpoApi } from './config'

class AuthService {
  login(data: AxiosRequestConfig<CredentialsInterface>) {
    return ExpoApi.get('/api/auth', data)
  }

  register(data: RegisterData, handle: Function) {
    return ExpoApi.post('/api/auth', data).then(res => handle(res))
  }
}

export default new AuthService()
