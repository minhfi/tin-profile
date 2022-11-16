import { styled, TextareaAutosize } from '@mui/material'
import { Box } from '@mui/system'

export const TextareaCustom = styled<typeof TextareaAutosize>(TextareaAutosize, {
  label: 'TextAreaCustom',
  shouldForwardProp: prop => prop !== 'disableResize'
})<{ disableResize?: boolean }>(({ theme, disableResize }) => `
  border: none;
  border-radius: 16px;
  color: ${theme.colors['--color-neutral-theme-700']};
  background-color: ${theme.colors['--color-neutral-theme-100']};
  padding: ${theme.spacing(1.75, 2)};
  font-family: inherit;
  font-size: inherit;
  outline: unset;
  
  ${disableResize && `
    resize: none;
  `}
`)

export const TextareaWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`
