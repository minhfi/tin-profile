import { styled } from '@mui/material'

export const STContainer = styled('div', {
  label: 'Container'
})(({ theme }) => `
  position: relative;
  color: ${theme.colors['--color-neutral-theme-400']};
`)

export const STSubSectionNumber = styled('div', {
  label: 'SubSectionNumber'
})(({ theme }) => `
  width: 92px;
  height: 15px;
  color: ${theme.colors['--color-neutral-theme-400']};
  border-bottom: 1px solid ${theme.colors['--color-black']};
  margin-bottom: 9px;
  `)
