import { styled } from '@mui/material'

export const STLayoutContainer = styled('section', { label: 'LayoutContainer' })`
  flex: 1 1 auto;
  display: flex;
  height: 100vh;
`

export const STContent = styled('section', { label: 'Content' })`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`

export const STChildren = styled('div', {
  shouldForwardProp: prop => prop !== 'isAuthenticated',
  label: 'Content'
})<{isAuthenticated?: boolean}>(({ theme, isAuthenticated }) => `
  height: 100%;
  overflow: auto;
  background-color: ${isAuthenticated ? theme.colors['--color-neutral-theme-50'] : theme.colors['--color-neutral-theme-50']}
`)
