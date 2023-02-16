import { IRouterOption } from './interface'

import { CoreRoutes } from 'src/module/core/routes'
import { AuthRoutes } from 'src/module/auth/routes'
import { HomeRoutes } from 'src/module/home/routes'
import { Notfound } from 'src/module/core/components/404'

export const routes: IRouterOption[] = [
  ...CoreRoutes,
  ...AuthRoutes,
  ...HomeRoutes,
  // last route handle 404 error
  {
    path: '*',
    component: Notfound
  }
]
