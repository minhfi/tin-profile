import { FC, useMemo } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'

import { genThemeWithPaletteMode } from './constants/mui-theme'
import { browserHistory } from './router/history'
import { getThemeMode } from './store/selectors'
import { useAppSelector } from './hooks/redux'
import { AppLayout } from './layout'
import { store } from './store'

const AppTheme: FC = () => {
  const paletteMode = useAppSelector(getThemeMode)

  // Update the theme only if the mode changes
  const theme = useMemo(
    () => createTheme(genThemeWithPaletteMode(paletteMode)),
    [paletteMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <AppLayout/>
    </ThemeProvider>
  )
}

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <AppTheme/>
      </Router>
    </Provider>
  )
}

export default App
