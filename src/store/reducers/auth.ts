import { IUserModel } from 'src/interfaces/models/user.model'
import { NotificationService } from 'src/services/notification.service'
import { AUTH_SET_CREDENTIALS, AUTH_LOGOUT_SUCCESS, IAuthState, TAuthAction } from '../types'

export const initState: IAuthState = {
  isAuthenticated: null,
  credentials: {} as IUserModel
}

export const reducer = (state = initState, action: TAuthAction) => {
  switch (action.type) {
    case AUTH_SET_CREDENTIALS:
      NotificationService.bind(action.value?.id)
      return {
        ...state,
        isAuthenticated: true,
        credentials: action.value
      }
    case AUTH_LOGOUT_SUCCESS:
      NotificationService.unbind()
      return {
        ...state,
        isAuthenticated: false,
        credentials: {}
      }
    default:
      return state
  }
}
