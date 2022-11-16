import { FC } from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'

import { routes } from 'src/router'
import { generate } from 'src/router/generate'
import { StorageUtil } from 'src/utils/storage.util'
import { EAuthRoutes } from 'src/module/auth/routes.enum'
import { IRouterOption } from 'src/router/interface'
import { useAppSelector } from 'src/hooks/redux'
import { LayoutContainer } from '../layout-container'
import { AUTH_FALLBACK_KEY } from 'src/constants'
import { getIsAuthenticated } from 'src/store/selectors/auth'

const AuthRoute: FC<{
  path: string
  exact?: boolean
  component: IRouterOption['component']
}> = (props) => {
  const location = useLocation()
  const isAuthenticated = useAppSelector(getIsAuthenticated)

  if (isAuthenticated) {
    return (
      <Route
        path={props.path}
        exact={props.exact}
        component={props.component}
      />
    )
  }

  StorageUtil.setItem(AUTH_FALLBACK_KEY, `${location.pathname}${location.search}`)
  return <Redirect to={generate(EAuthRoutes.SIGN_IN)}/>
}

const RoutesSwitch = (
  <Switch>
    {Array.ensure(routes).map(item => {
      if (item.meta?.requireAuth) {
        return <AuthRoute key={item.path} {...item}/>
      }

      return (
        <Route
          key={item.path}
          path={item.path}
          exact={item.exact}
          component={item.component}
        />
      )
    })}
  </Switch>
)

export const RouterView: FC = () => {
  return (
    <LayoutContainer>
      {RoutesSwitch}
    </LayoutContainer>
  )
}
