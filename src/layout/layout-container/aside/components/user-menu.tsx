import { FC, useCallback, useState } from 'react'
import { useHistory } from 'react-router'
import { Avatar, Box, ClickAwayListener, Typography, useTheme } from '@mui/material'

import { IconArrowRight, IconSetting, IconSignOut } from 'src/icons'
import { useAppDispatch, useAppSelector } from 'src/hooks/redux'
import { getCredentials } from 'src/store/selectors'
import { AUTH_LOGOUT } from 'src/store/types'

import { STUMDropdownItem, STUMDropdown, STUM, STInfo } from './styled'

export const UserMenu: FC = () => {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const profile = useAppSelector(getCredentials)
  const history = useHistory()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const fullName = profile.firstName + ' ' + profile.lastName

  const handleOpenDropdown = () => setIsOpen(!isOpen)

  const handleRedirect = (pathname: string) => history.push(pathname)

  const logout = useCallback(() => {
    dispatch({ type: AUTH_LOGOUT })
  }, [])

  return (
    <STUM onClick={handleOpenDropdown}>
      <STInfo>
        {profile.pfp?.url ? <Avatar sx={{ width: 48, height: 48, cursor: 'pointer' }} src={profile.pfp?.url}/> : <Avatar sx={{ width: 48, height: 48, cursor: 'pointer' }}>{fullName?.split(' ')[0][0]}{fullName?.split(' ')[1][0]}</Avatar>}

        <Box display="flex" flexDirection="column">
          <Typography variant="body1" color={theme.colors['--color-neutral-theme-50']}>
            {profile.firstName + ' ' + profile.lastName}
          </Typography>
        </Box>
      </STInfo>
      <IconArrowRight/>

      {isOpen && (
        <ClickAwayListener onClickAway={handleOpenDropdown}>
          <STUMDropdown>
            <STUMDropdownItem
              isActive={history.location.pathname?.includes('setting')}
              onClick={() => handleRedirect('/setting/profile')}
            >
              <IconSetting/>
              <Typography variant="body2">Settings</Typography>
            </STUMDropdownItem>
            <STUMDropdownItem onClick={logout}>
              <IconSignOut/>
              <Typography variant="body2">Sign out</Typography>
            </STUMDropdownItem>
          </STUMDropdown>
        </ClickAwayListener>
      )}
    </STUM>
  )
}
