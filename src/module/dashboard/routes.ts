import { IRouterOption } from 'src/router/interface'
import { Dashboard } from './components/list/index'
import { EDashboardRoutes } from './routes.enum'

export const DashboardRoutes: IRouterOption[] = [
  {
    path: '/:type(dashboard)?',
    component: Dashboard,
    name: EDashboardRoutes.DASHBOARD,
    exact: true,
    meta: {
      requireAuth: true
    }
  }
]
