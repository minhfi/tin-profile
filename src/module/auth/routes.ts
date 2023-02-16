import { IRouterOption } from 'src/router/interface'
import { SignIn } from './components/sign-in'
import { EAuthRoutes } from './routes.enum'

export const AuthRoutes: IRouterOption[] = [
  {
    path: '/sign-in',
    component: SignIn,
    name: EAuthRoutes.SIGN_IN,
    exact: true,
    meta: {
      requireAuth: false
    }
  }

]
