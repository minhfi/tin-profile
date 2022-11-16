import { styled } from '@mui/material/styles'
import { Divider } from '@mui/material'
import { IDividerProps } from '.'

export const STDivider = styled(Divider, {
  label: 'Divider'
})<IDividerProps>(({ theme, ...props }) => `
  width: 100%;
  margin-top: ${theme.spacing(props.mt || 0)};
  margin-bottom:${theme.spacing(props.mb || 0)};
  border: 1px solid ${props.background ? props.background : theme.colors['--color-neutral-theme-200']};
`)
