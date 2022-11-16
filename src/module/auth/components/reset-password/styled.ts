import { styled } from '@mui/material'

export const STContainer = styled('div', {
  label: 'Container'
})(() => `
  height: calc(100vh - 88px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`)

export const STForm = styled('form', {
  label: 'Form'
})(({ theme }) => `
  width: 490px;
  padding: ${theme.spacing(7)};
  border-radius: 32px;
  background: ${theme.colors['--color-neutral-theme-50']};
  box-shadow: 0px 16px 48px -12px rgb(37 38 46 / 10%);
`)

export const STResetPasswordSuccess = styled('form', {
  label: 'ResetPasswordSuccess'
})(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing(5)};

  img {
    animation: show 1s;
  }

  @keyframes show {
    0%   {opacity: 0; transform: scale(0)}
    100% {opacity: 1; transform: scale(1)}
  }
`)
