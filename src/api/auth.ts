import axios, { AxiosResponse } from 'axios'
import { IUserModel } from 'src/interfaces/models/user.model'

export class AuthApi {
  static _prefix = '/auth'

  static login(payload: Pick<IUserModel, 'username' | 'password'>): Promise<AxiosResponse<{
    id: number
    token: string
    tokenType: 'Bearer'
    tokenExpireAt: string
    tokenExpireIn: number
    profile: IUserModel
  }>> {
    return axios.post(`${this._prefix}/sign-in`, payload)
  }

  static logout(): Promise<AxiosResponse<void>> {
    return axios.delete(`${this._prefix}/sign-out`)
  }

  /**
   * SECTION: Sign up
   */
  static signUpRequest(payload: { email: string; inviteToken?: string }): Promise<AxiosResponse<{token: string}>> {
    return axios.post(`${this._prefix}/sign-up`, payload)
  }

  static signUpVerify(params: { token: string }): Promise<AxiosResponse<void>> {
    return axios.get(`${this._prefix}/sign-up`, { params })
  }

  static signUpProfile(
    payload: {
      password: string
      role: string
      firstName: string
      lastName: string
      companyName: string
      companyUrl: string
      workEmail: string
      receiveMarketingEmail: boolean
    },
    params: { token: string }
  ): ReturnType<typeof AuthApi.login> {
    return axios.put(`${this._prefix}/sign-up`, payload, { params })
  }
}
