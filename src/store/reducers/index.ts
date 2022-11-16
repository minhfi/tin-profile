import { combineReducers } from 'redux'
import { reducer as theme } from './theme'
import { reducer as auth } from './auth'
import { reducer as layout } from './layout'
import { reducer as modal } from './modal'

export const reducers = combineReducers({
  theme,
  auth,
  layout,
  modal
})
