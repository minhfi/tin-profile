import { FC } from 'react'
import { CircularProgress } from '@mui/material'
import { getLayoutIsLoading } from 'src/store/selectors'
import { useAppSelector } from 'src/hooks/redux'
import { STContainer } from './styled'

export const Loading: FC = () => {
  const isLoading = useAppSelector(getLayoutIsLoading)

  return (
    <STContainer isOpen={isLoading}>
      <CircularProgress/>
    </STContainer>
  )
}
