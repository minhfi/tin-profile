import { EHomeRoutes } from './routes.enum'
import { IRouterOption } from 'src/router/interface'
import { Home } from './components/home'

export const HomeRoutes: IRouterOption[] = [
  {
    path: '/',
    component: Home,
    name: EHomeRoutes.HOME,
    exact: true,
    meta: {
      requireAuth: false
    }
  }
]
