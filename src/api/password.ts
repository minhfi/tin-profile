import axios, { AxiosResponse } from 'axios'

export class PasswordApi {
  static _prefix = '/password'

  /**
   * Forgot password
   */
  static forgotPasswordRequest(payload: { email: string }): Promise<AxiosResponse<{token: string}>> {
    return axios.post(`${this._prefix}/forgot`, payload)
  }

  /**
   * Reset password
   */
  static resetPasswordRequest(payload: { password: string; token: string}): Promise<AxiosResponse<void>> {
    return axios.post(`${this._prefix}/reset?token=${payload.token}`, { password: payload.password })
  }

  /**
   * Forgot password
   */
  static change(payload: { currentPassword: string; newPassword: string }): Promise<AxiosResponse<void>> {
    return axios.put(`${this._prefix}`, payload)
  }
}
