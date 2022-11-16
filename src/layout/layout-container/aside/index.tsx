import { FC, useEffect, useRef, useState } from 'react'
import { match, useHistory } from 'react-router'
import { LinkProps, match as Match } from 'react-router-dom'
import * as H from 'history'
import { Box, Typography } from '@mui/material'

import { getLayoutIsAside } from 'src/store/selectors'
import { useAppSelector } from 'src/hooks/redux'
import { NoticeBadge } from 'src/components/notice-badge'
import { IconLogo } from 'src/icons'

import { STAsideItem, STAside, STLogo } from './styled'
import { menuConfig } from './menu-config'
import { UserMenu } from './components/user-menu'

export interface INavLinkProps<S = H.LocationState> extends LinkProps<S> {
  activeClassName?: string
  activeStyle?: React.CSSProperties
  exact?: boolean
  strict?: boolean
  isActive?<Params extends { [K in keyof Params]?: string }>(match: match<Params> | null, location: H.Location<S>): boolean
  location?: H.Location<S>
  active?: boolean
}

export const Aside: FC = () => {
  const history = useHistory()
  const timeout = useRef<NodeJS.Timeout | null>(null)
  const isAside = useAppSelector(getLayoutIsAside)
  const [routeActive, setRouteActive] = useState<string | null>(null)

  const handleActiveRoute = (route: string) => {
    if (timeout.current) clearTimeout(timeout.current)

    timeout.current = setTimeout(() => {
      setRouteActive(route)
    }, 100)
  }

  const handleIsActive = (match: Match | null, location: H.Location<any>, route: string) => {
    if (match) {
      handleActiveRoute(route)
    }

    if (location.pathname === '/' && route === '/dashboard') {
      handleActiveRoute('/dashboard')
    }

    return false
  }

  useEffect(() => {
    // listen change history
    history.listen((location) => {
      if (!menuConfig.some(({ route }) => route === location.pathname)) {
        setRouteActive(null)
      }
    })
  }, [history])

  return (
    <STAside isShow={isAside}>
      <Box>
        {isAside && (
          <STLogo>
            <IconLogo/>
          </STLogo>
        )}

        {menuConfig.map(({ route, icon: Icon, title, watchNoticeKey }) => {
          return (

            <STAsideItem
              key={route}
              to={route}
              active={(routeActive === route)}
              isActive={(match, location) => handleIsActive(match, location, route)}
            >
              <Box display="flex" alignItems="center">
                <Icon width={24}/>
                <Typography variant="body1-regular">{title}</Typography>
              </Box>
              {watchNoticeKey && (
                <NoticeBadge watchKey={watchNoticeKey}/>
              )}
            </STAsideItem>
          )
        })}
      </Box>

      <Box mt={5}>
        <UserMenu/>
      </Box>
    </STAside>
  )
}
