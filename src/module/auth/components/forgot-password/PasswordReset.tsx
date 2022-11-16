import { Typography } from '@mui/material'
import { ChangeEvent, FC, FormEvent } from 'react'
import { Button } from 'src/components/button'
import { Input } from 'src/components/input'

import { STForgotPasswordForm, STInformationForm } from './styled'

interface PasswordResetProps {
  email: string
  error: string
  handleSubmit: (e: FormEvent<HTMLFormElement> & MouseEvent) => void
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
}

export const PasswordReset:FC<PasswordResetProps> = ({
  handleChangeInput,
  handleSubmit,
  error,
  email
}) => {
  return (
    <STInformationForm>
      <Typography variant="h2" mb={5}>Forgot password</Typography>
      <STForgotPasswordForm onSubmit={handleSubmit}>
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          placeholder="name@company.com"
          value={email || ''}
          onChange={handleChangeInput}
          required
        />

        <Button fullWidth type="submit">
          Send
        </Button>
      </STForgotPasswordForm>
    </STInformationForm>
  )
}
