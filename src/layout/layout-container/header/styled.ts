import { styled } from '@mui/material'

export const STHeader = styled('div', {
  shouldForwardProp: prop => prop !== 'display',
  name: 'Header'
})<{display?: boolean}>(({ theme, ...props }) => `
  position: relative;
  z-index: 999;
  width: 100%;
  height: 80px; 
  padding: ${theme.spacing(2, 4)};
  display: ${props.display ? 'flex' : 'none'};
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  backdrop-filter: blur(20px);
  background-color: ${theme.colors['--color-neutral-theme-50']} !important;
`)

export const STTitle = styled('div', {
  name: 'Title'
})(({ theme }) => `
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};
`)

export const STTitleItem = styled('div', {
  shouldForwardProp: prop => prop !== 'isLastTitle',
  name: 'Item'
})<{isLastTitle?:boolean}>(({ theme, isLastTitle }) => `
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};

  h4 {
    color: ${isLastTitle ? theme.colors['--color-neutral-theme-400'] : theme.colors['--color-neutral-theme-400']};
  }

  h4:nth-of-type(2) {
    display: ${isLastTitle ? 'none' : 'flex'};
  }
`)
