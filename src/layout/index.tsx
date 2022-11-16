import { makeStyles } from '@mui/styles'
import { FC } from 'react'
import { IThemeProps, TTheme, toCssVariables } from 'src/constants/mui-theme'
import { getLayoutIsLoading, getModal, getThemeMode } from 'src/store/selectors'
import { useAppSelector } from 'src/hooks/redux'
import { Loading } from 'src/components/loading'
import { Modal } from 'src/components/modal'

import { MessagesContainer } from './messages-container'
import { STAppLayout, STContent } from './styled'
import { RouterView } from './router-view'

const createThemeVariables = makeStyles<TTheme>(
  theme => ({
    '@global': {
      ':root': ({ paletteMode }: IThemeProps) => toCssVariables(paletteMode)
    }
  })
)

export const AppLayout: FC = () => {
  const paletteMode = useAppSelector(getThemeMode)
  const isLoading = useAppSelector(getLayoutIsLoading)
  const appModal = useAppSelector(getModal)

  createThemeVariables({ paletteMode })

  return (
    <STAppLayout isLoading={isLoading}>
      <STContent>
        <RouterView/>
      </STContent>

      {appModal.open && <Modal/>}
      <Loading/>
      <MessagesContainer/>
    </STAppLayout>
  )
}
