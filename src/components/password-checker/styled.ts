import { styled } from '@mui/material'
import { HTMLProps } from 'react'

export const STPasswordCheckList = styled('ul', {
  name: 'PasswordCheckList'
})<HTMLProps<HTMLUListElement>>(({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: ${theme.spacing(0.5)};
  margin-bottom: 0;
  padding: 0;
`)

export const STPasswordCheckItem = styled('li', {
  name: 'PasswordCheckItem'
})<{ isActive?: boolean; isFailed?: boolean }>(({ theme, isActive, isFailed }) => `
  color: ${isActive
  ? theme.colors['--color-neutral-theme-700']
    : isFailed
  ? theme.colors['--color-negative-500']
    : theme.colors['--color-neutral-theme-200']};
  list-style-type: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  transition: all .3s ease-in-out;

  &:before {
    transition: all .3s ease-in-out;
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: ${theme.spacing(1)};
    background: ${isActive
    ? theme.colors['--color-positive-600']
      : isFailed
    ? theme.colors['--color-negative-500']
      : theme.colors['--color-neutral-theme-200']};
  }
`)
