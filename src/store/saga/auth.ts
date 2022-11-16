import { takeLatest, put } from 'redux-saga/effects'
import { AuthenticationUtil } from 'src/utils/authentication.util'
import { MessageService } from 'src/services/message.service'
import { getApiErrorMessage } from 'src/utils/axios.utils'
import { StorageUtil } from 'src/utils/storage.util'
import { browserHistory } from 'src/router/history'
import { AUTH_FALLBACK_KEY } from 'src/constants'
import { AuthApi, ProfileApi } from 'src/api'
import { generate } from 'src/router/generate'
import { EMessage } from 'src/enums'

import {
  AUTH_LOGIN,
  AUTH_SET_CREDENTIALS,
  AUTH_LOGOUT,
  AUTH_LOGOUT_SUCCESS,
  AUTH_GET_PROFILE
} from '../types'
import { EAuthRoutes } from './../../module/auth/routes.enum'

/**
 * Get user credentials with jwt
 */
function * getProfile(action: { type: typeof AUTH_GET_PROFILE }) {
  try {
    // workaround for promise with generator function
    const { data: profile }: Awaited<ReturnType<typeof ProfileApi.detail>> = yield ProfileApi.detail()

    yield put({
      type: AUTH_SET_CREDENTIALS,
      value: profile
    })
  } catch (error) {
    yield put({ type: AUTH_LOGOUT_SUCCESS })
  }
}

/**
 * Call login with user credentials
 * @param {object} action
 * @return {Redirect} Go home
 */
function * login(action: { type: typeof AUTH_LOGIN; payload: ArgumentTypes<typeof AuthApi.login>[0] }) {
  try {
    // workaround for promise with generator function
    const { data }: Awaited<ReturnType<typeof AuthApi.login>> = yield AuthApi.login(action.payload)

    yield put({
      type: AUTH_SET_CREDENTIALS,
      value: data.profile
    })

    // const toURL = StorageUtil.getItem(AUTH_FALLBACK_KEY)
    StorageUtil.removeItem(AUTH_FALLBACK_KEY)

    return browserHistory.push('/')
  } catch (error) {
    MessageService.push({
      severity: EMessage.ERROR,
      content: getApiErrorMessage(error)
    })
  }
}

/**
 * Logout, redirect to home, clear credentials
 * @return {Redirect} Go home
 */
function * logout(action: { type: typeof AUTH_LOGOUT }) {
  try {
    yield AuthApi.logout()
    yield put({ type: AUTH_LOGOUT_SUCCESS })
    yield AuthenticationUtil.clear()
    browserHistory.push(generate(EAuthRoutes.SIGN_IN))
  } catch (error) {
    MessageService.push({
      severity: EMessage.ERROR,
      content: getApiErrorMessage(error)
    })
  }
}

export type TAuthSagaAction = ArgumentTypes<typeof getProfile>[0]
  | ArgumentTypes<typeof login>[0]
  | ArgumentTypes<typeof logout>[0]

export const handler = function * () {
  yield takeLatest(AUTH_LOGIN, login)
  yield takeLatest(AUTH_LOGOUT, logout)
  yield takeLatest(AUTH_GET_PROFILE, getProfile)
}
