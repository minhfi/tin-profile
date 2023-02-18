import { css, styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import { IButtonProps } from '.'

const ButtonBase = styled(Button)<IButtonProps>(({ theme, ...props }) => css`
  width: ${props.width ? props.width + 'px' : 'auto'};
  height: ${props.height}px;

  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  
  padding: 0 59px;
  text-transform: unset;
  border-radius: 16px;

  &.MuiButton-fullWidth {
    width: 100% !important
  }
`)

export const ButtonPrimary = styled(ButtonBase)<IButtonProps>(({ theme, ...props }) => `
  color: ${theme.colors['--color-primary-400']} !important;
  background-color: ${props.background || 'transparent'} ;
  border: 1px solid ${props.background ? 'transparent' : theme.colors['--color-neutral-theme-200']};
  border-radius: 30px;

  &:hover {
    background-color: ${props.background || 'transparent'} ;
  }

  &:focus {
    background-color: ${props.background || 'transparent'} ;
  }

  &:active {
    background-color: ${props.background || 'transparent'} ;
  }

  &:disabled {
    color: ${theme.colors['--color-neutral-theme-50']} !important;
    background-color: ${theme.colors['--color-neutral-theme-400']} !important;
  }
`)

export const ButtonSecondary = styled(ButtonBase)<IButtonProps>(({ theme, background }) => `
  border: 1px solid ${background ? 'transparent' : theme.colors['--color-neutral-theme-300']};

  color: ${theme.colors['--color-neutral-theme-400']} !important;
  background-color: ${background || theme.colors['--color-neutral-theme-50']} !important;

  &:hover {
    border: none;
    background-color: ${theme.colors['--color-neutral-theme-400']} !important;
  }

  &:focus {
    border: none;
    background-color: ${theme.colors['--color-neutral-theme-400']} !important;
  }

  &:active {
    border: none;
    background-color: ${theme.colors['--color-neutral-theme-400']} !important;
  }

  &:disabled {
    border: 1px solid ${theme.colors['--color-neutral-theme-400']};
    color: ${theme.colors['--color-neutral-theme-400']} !important;
  }
`)

export const ButtonTertiary = styled(ButtonBase)<IButtonProps>(({ theme }) => `
  color: ${theme.colors['--color-neutral-theme-400']} !important;
  background-color: transparent !important;

  &:hover {
    background-color: ${theme.colors['--color-neutral-theme-400']} !important;
  }

  &:focus {
    background-color: ${theme.colors['--color-neutral-theme-400']} !important;
  }

  &:active {
    background-color: ${theme.colors['--color-neutral-theme-400']} !important;
  }

  &:disabled {
    color: ${theme.colors['--color-neutral-theme-400']} !important;
  }
`)
