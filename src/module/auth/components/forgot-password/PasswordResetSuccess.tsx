import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { FC, FormEventHandler, MouseEventHandler } from 'react'
import { STForgotMessage, STSuccessMessageWrapper } from './styled'

export const PasswordResetSuccess: FC<{handleSubmit: FormEventHandler<HTMLFormElement> & MouseEventHandler}> = ({ handleSubmit }) => {
  return (
    <STSuccessMessageWrapper>
      <Typography variant="h3" mt={5} mb={3}>Email has been sent</Typography>
      <STForgotMessage variant="subtitle-regular" mb={3}>
        Please check your inbox and click in the received link to reset your password
      </STForgotMessage>
      <Box display="flex" alignItems="center">
        <Typography color={theme => theme.colors['--color-neutral-theme-300']} variant="body1-regular">Didn’t received email?</Typography>
        <Typography
          ml={0.5}
          color={theme => theme.colors['--color-cyan-600']}
          variant="body1-regular"
          sx={{
            '&:hover': {
              cursor: 'pointer',
              textDecoration: 'underline'
            }
          }}
          onClick={handleSubmit}
        >
          Send again
        </Typography>
      </Box>
    </STSuccessMessageWrapper>
  )
}
