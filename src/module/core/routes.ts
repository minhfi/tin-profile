import { IRouterOption } from 'src/router/interface'
import { Forbidden } from './components/403'
import { Notfound } from './components/404'
import { InternalServerError } from './components/500'
import { ECoreRoutes } from './routes.enum'

export const CoreRoutes: IRouterOption[] = [
  {
    path: '/403',
    exact: true,
    name: ECoreRoutes.ERROR_403,
    component: Forbidden
  },
  {
    path: '/404',
    exact: true,
    name: ECoreRoutes.ERROR_404,
    component: Notfound
  },
  {
    path: '/500',
    exact: true,
    name: ECoreRoutes.ERROR_500,
    component: InternalServerError
  }
]
