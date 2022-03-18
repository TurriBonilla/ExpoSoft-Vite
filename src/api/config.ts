import axios from 'axios'

export const ExpoApi = axios.create({
  baseURL: 'https://localhost:5001',
})

class API {
  url: string
  constructor(url: string) {
    this.url = url
  }

  getHeaders(token: string) {
    return {
      authorization: token,
    }
  }

  findAll(token: string) {
    return ExpoApi.get(this.url, { headers: this.getHeaders(token) })
  }

  findById(id: string, token: string) {
    return ExpoApi.get(`${this.url}/${id}`, { headers: this.getHeaders(token) })
  }

  create(data: object, token: string) {
    return ExpoApi.post(this.url, data, { headers: this.getHeaders(token) })
  }

  update(id: string, data: object, token: string) {
    return ExpoApi.put(`${this.url}/${id}`, data, { headers: this.getHeaders(token) })
  }

  delete(id: string, token: string) {
    return ExpoApi.delete(`${this.url}/${id}`, { headers: this.getHeaders(token) })
  }
}

export default API
