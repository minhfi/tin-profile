import { styled } from '@mui/material'

export const STContainer = styled('div', {
  label: 'Container'
})(() => `
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 0 auto;
  max-width: 490px;
  height: 100%;
`)

export const STForm = styled('form', {
  label: 'Form'
})(({ theme }) => `
  width: 490px;
  display: flex;
  flex-direction: column;

  padding: 56px;
  border-radius: 32px;
  background-color: ${theme.colors['--color-neutral-theme-50']};
  box-shadow: 0px 16px 48px -12px rgb(37 38 46 / 10%);
`)
