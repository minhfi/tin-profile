import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { elevation1 } from 'src/styles/mixin.styled'

export const STForgotPasswordForm = styled('form', { label: 'ForgotPasswordForm' })`
  width: 490px;
  padding: ${({ theme }) => theme.spacing(7)};
  border-radius: 32px;

  ${elevation1}
`

export const STSuccessMessageWrapper = styled('div', {
  label: 'SuccessMessageWrapper'
})`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const STForgotMessage = styled(Typography, { label: 'ForgotMessage' })`
  width: 475px;
  text-align: center;
`

export const STForgotPasswordWrapper = styled('div', { label: 'ForgotPasswordWrapper' })`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const STInformationForm = styled(STForgotPasswordWrapper, { label: 'InformationForm' })``
