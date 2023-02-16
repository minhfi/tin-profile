import { Colors } from './mui-colors'
import { ThemeOptions } from '@mui/material'
import { Typography } from './mui-typography'

export enum EPaletteMode {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface IThemeProps {
  paletteMode?: EPaletteMode
  [key: string]: any
}

export const validThemeMode = (mode?: EPaletteMode): EPaletteMode => mode && [EPaletteMode.LIGHT, EPaletteMode.DARK].includes(mode)
  ? mode
  : EPaletteMode.LIGHT

export const toCssVariables = (mode?: EPaletteMode) => {
  const paletteMode = validThemeMode(mode)
  return {
    '--color-white': Colors.white,
    '--color-black': Colors.black,
    '--color-primary-400': Colors.primary[400],
    '--color-positive-50': Colors.positive[50],
    '--color-positive-100': Colors.positive[100],
    '--color-positive-200': Colors.positive[200],
    '--color-positive-300': Colors.positive[300],
    '--color-positive-400': Colors.positive[400],
    '--color-positive-500': Colors.positive[500],
    '--color-positive-600': Colors.positive[600],
    '--color-positive-700': Colors.positive[700],
    '--color-positive-800': Colors.positive[800],
    '--color-positive-900': Colors.positive[900],
    '--color-negative-50': Colors.negative[50],
    '--color-negative-100': Colors.negative[100],
    '--color-negative-200': Colors.negative[200],
    '--color-negative-300': Colors.negative[300],
    '--color-negative-400': Colors.negative[400],
    '--color-negative-500': Colors.negative[500],
    '--color-negative-600': Colors.negative[600],
    '--color-negative-700': Colors.negative[700],
    '--color-negative-800': Colors.negative[800],
    '--color-negative-900': Colors.negative[900],
    '--color-neutral-theme-50': Colors[`neutral/${paletteMode}-theme`][50],
    '--color-neutral-theme-200': Colors[`neutral/${paletteMode}-theme`][200],
    '--color-neutral-theme-300': Colors[`neutral/${paletteMode}-theme`][300],
    '--color-neutral-theme-400': Colors[`neutral/${paletteMode}-theme`][400]
  }
}

export const genThemeWithPaletteMode = (paletteMode: EPaletteMode): ThemeOptions & { colors: Record<keyof ReturnType<typeof toCssVariables>, string> } => ({
  colors: toCssVariables(paletteMode),
  palette: {
    mode: EPaletteMode.LIGHT, /** paletteMode */
    primary: {
      main: toCssVariables(paletteMode)['--color-primary-400']
    },
    text: {
      primary: toCssVariables(paletteMode)['--color-neutral-theme-300']
    }
  },
  typography: Typography,
  spacing: 8
})

export type TTheme = ReturnType<typeof genThemeWithPaletteMode>
