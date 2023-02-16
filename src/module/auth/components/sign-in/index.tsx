import { ChangeEventHandler, FC, FormEventHandler, useCallback, useState } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { useHistory } from 'react-router-dom'

import { NotAllowAuthenticated } from 'src/components/not-allow-authenticated'
import { useValidation } from 'src/hooks/useValidation'
import { signinSchema } from 'src/validation/auth'
import { useAppDispatch } from 'src/hooks/redux'
import { Button } from 'src/components/button'
import { Input } from 'src/components/input'
import { AUTH_LOGIN } from 'src/store/types'

import { STContainer, STForm } from './styled'

export const SignIn: FC = () => {
  const theme = useTheme()
  const history = useHistory()
  const dispatch = useAppDispatch()
  const { validate } = useValidation<{email: string; password: string}>()

  const [formValues, setFormValues] = useState<{
    email?: string
    password?: string
  }>({})

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.persist()
    const { name, value } = e.target
    setFormValues(
      (prev) => ({
        ...prev,
        [name]: value
      })
    )
  }

  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(async (e) => {
    e.preventDefault()
    const isValid = await validate({ schema: signinSchema, data: { ...formValues } })

    console.log({ isValid })
    dispatch({
      type: AUTH_LOGIN,
      payload: formValues
    })
  }, [formValues, dispatch])

  return (
    <NotAllowAuthenticated>
      <STContainer>
        <Typography variant="h2">Sign in</Typography>

        <Typography align="center" className="my-32" variant="body1">
          We are the fastest growing video first marketplace for remote jobs.
        </Typography>

        <STForm onSubmit={onSubmit} autoComplete="off">
          <Input
            label="Email"
            id="email"
            type="email"
            name="email"
            placeholder="name@company.com"
            value={formValues.email || ''}
            onChange={handleChangeInput}
            required
          />

          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formValues.password || ''}
            onChange={handleChangeInput}
            required
          />

          <Button
            fullWidth
            type="submit"
            sx={{ marginBottom: 6 }}
          >
            Sign in
          </Button>

          <Box mt={1.5}>
            <Typography variant="body1" color={theme.colors['--color-neutral-theme-300']}>Don't have an account? </Typography>
            <Typography
              component="a"
              onClick={() => history.push('/sign-up')}
              sx={{ cursor: 'pointer' }}
            >
              Sign up
            </Typography>
          </Box>
        </STForm>
      </STContainer>
    </NotAllowAuthenticated>
  )
}
