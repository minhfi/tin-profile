import { NavLink } from 'react-router-dom'
import { styled } from '@mui/material'
import { INavLinkProps } from './index'

export const STAside = styled('div', {
  shouldForwardProp: prop => prop !== 'isShow',
  name: 'Aside'
})<{isShow?:boolean}>(({ theme, ...props }) => `
  width: 300px;
  min-width: 300px;
  height: 100vh;
  overflow: auto;
  box-sizing: border-box;
  padding: ${theme.spacing(5, 4)};
  background-color: ${theme.colors['--color-neutral-theme-400']} !important;

  display: ${props.isShow ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: space-between;
`)

export const STLogo = styled('div', { name: 'AsideLogo' })(({ theme }) => `
  width: 64px;
  height: 64px; 
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-bottom: ${theme.spacing(5)};
  background-color: ${theme.colors['--color-primary-400']} !important;
`)

export const STAsideItem = styled(NavLink, {
  shouldForwardProp: prop => prop !== 'active',
  name: 'AsideItem'
})<INavLinkProps>(({ theme, ...props }) => `
  width: 100%;
  height: 60px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  padding: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(1)};
  box-sizing: border-box;
  cursor: pointer;
  color: ${theme.colors[`--color-neutral-theme-${props.active ? 50 : 300}`]};
  background: ${props.active ? theme.colors['--color-neutral-theme-400'] : 'unset'};
  
  svg {
    margin-right: ${theme.spacing(2)};

    path {
      fill: ${theme.colors[`--color-neutral-theme-${props.active ? 50 : 300}`]};
    }
  }

  &:last-child {
    margin-bottom: 0
  }

  &:hover {
    color: ${theme.colors['--color-neutral-theme-50']};

    svg {
      path {
        fill: ${theme.colors['--color-neutral-theme-50']};
      }
    }
  }
`)
