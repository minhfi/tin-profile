import { toCssVariables } from './mui-theme'

// colors mapping from figma
export const Colors = {
  black: '#000',
  white: '#fff',
  primary: {
    400: '#026D9C'
  },
  positive: {
    50: '#F6FDFA',
    100: '#EAFBF2',
    200: '#D0F6E3',
    300: '#B2F0D1',
    400: '#72E3AD',
    500: '#3AD98A',
    600: '#32C37A',
    700: '#2BA166',
    800: '#218253',
    900: '#1C6944'
  },
  negative: {
    50: '#FEF6F7',
    100: '#FDE8EB',
    200: '#FACCD4',
    300: '#F7ABB8',
    400: '#F26E84',
    500: '#EA2E4E',
    600: '#D52A47',
    700: '#AF233A',
    800: '#8D1C2F',
    900: '#731726'
  },
  'neutral/light-theme': {
    50: '#F3F3F3F3',
    200: '#231f204d',
    300: '#231f2099',
    400: '#231F20'
  },
  // not implemented
  'neutral/dark-theme': {
    50: '#1F1D36',
    200: '',
    300: '#B689C0',
    400: '#E9A6A6'
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    colors: Record<keyof ReturnType<typeof toCssVariables>, string>
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors: Record<keyof ReturnType<typeof toCssVariables>, string>
  }
}
