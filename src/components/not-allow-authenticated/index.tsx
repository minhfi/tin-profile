import { FC, ReactNode, useEffect } from 'react'
import { useHistory } from 'react-router'
import { useAppSelector } from 'src/hooks/redux'
import { getIsAuthenticated } from 'src/store/selectors'

export const NotAllowAuthenticated: FC<{ children?: ReactNode }> = (props) => {
  const history = useHistory()
  const isAuthenticated = useAppSelector(getIsAuthenticated)

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/')
    }
  }, [isAuthenticated])

  return <>{props.children}</>
}
