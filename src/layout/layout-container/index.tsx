import { FC, useLayoutEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/hooks/redux'
import { setLayoutAside, setLayoutHeader } from 'src/store/actions'
import { getIsAuthenticated } from 'src/store/selectors'

import { Aside } from './aside'
import { Header } from './header'
import { STContent, STLayoutContainer, STChildren } from './styled'

export const LayoutContainer: FC = (props) => {
  const dispatch = useAppDispatch()
  const isAuthenticated = useAppSelector(getIsAuthenticated)

  useLayoutEffect(() => {
    dispatch(setLayoutAside(!!isAuthenticated))
    dispatch(setLayoutHeader(!!isAuthenticated))
  }, [isAuthenticated])

  return (
    <STLayoutContainer>
      <Aside/>
      <STContent>
        <Header/>
        <STChildren isAuthenticated={!!isAuthenticated}>
          {props.children}
        </STChildren>
      </STContent>
    </STLayoutContainer>
  )
}
