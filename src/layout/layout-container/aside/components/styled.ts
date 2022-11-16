import { styled } from '@mui/material'

export const STUM = styled('div', { label: 'UserMenu' })(({ theme }) => `
  position: relative;
  width: 100%;
  height: 80px;
  border-radius: 16px;
  padding: ${theme.spacing(0, 2)};
  margin-top: ${theme.spacing(5)};
  cursor: pointer;
  background-color: ${theme.colors['--color-neutral-theme-600']};

  display: flex;
  align-items: center;
  justify-content: space-between;

  >svg {
    path {
      fill: ${theme.colors['--color-neutral-theme-50']}
    }
  }
`)

export const STInfo = styled('div', { label: 'Info' })(({ theme }) => `
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1.5)}
`)

export const STUMDropdown = styled('div', {
  label: 'UserMenuDropdown'
})(({ theme }) => `
  position: fixed;
  z-index: 99999;
  bottom: 40px;
  left: 312px;
  width: 163px;
  height: 208px;
  padding: ${theme.spacing(1)};
  box-sizing: border-box;
  box-shadow: 0px 32px 64px -12px rgb(37 38 46 / 10%);
  border-radius: 16px;
  background-color: ${theme.colors['--color-neutral-theme-600']} !important;
`)

export const STUMDropdownItem = styled('div', {
  label: 'UserMenuDropdownItem'
})<{isActive?:boolean}>(({ theme, isActive }) => `
  cursor: pointer;
  padding: ${theme.spacing(1.5, 0, 1.5, 1.5)};
  color: ${isActive ? theme.colors['--color-neutral-theme-50'] : theme.colors['--color-neutral-theme-300']};
  border-radius: 12px;

  display: flex;
  align-items: center;
  gap: ${theme.spacing(1.5)};

  svg {
    path {
      fill: ${isActive ? theme.colors['--color-neutral-theme-50'] : theme.colors['--color-neutral-theme-300']};
    }
  }

  &:hover {
    background: ${theme.colors['--color-neutral-theme-500']};
  }
`)
