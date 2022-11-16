import {
  FC,
  useState,
  useCallback,
  FormEventHandler,
  ChangeEventHandler,
  useEffect,
  useRef
} from 'react'
import { useHistory } from 'react-router'
import { Typography } from '@mui/material'

import { NotAllowAuthenticated } from 'src/components/not-allow-authenticated'
import { MessageService } from 'src/services/message.service'
import { getApiErrorMessage } from 'src/utils/axios.utils'
import { resetPasswordSchema } from 'src/validation/auth'
import { useQueryParams } from 'src/hooks/useQueryParams'
import { useValidation } from 'src/hooks/useValidation'
import { preventDefault } from 'src/utils/event.util'
import IMGSuccess from 'src/images/success.png'
import { Button } from 'src/components/button'
import { PasswordApi } from 'src/api/password'
import { Input } from 'src/components/input'
import { EMessage } from 'src/enums'

import {
  STContainer,
  STForm,
  STResetPasswordSuccess
} from './styled'

interface IResetPasswordForm {
  newPassword?: string
  confirmPassword?: string
}

export const ResetPassword: FC = () => {
  const { token } = useQueryParams()
  const history = useHistory()
  const [count, setCount] = useState<number>(5)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  const [formValues, setFormValues] = useState<IResetPasswordForm>({ newPassword: '', confirmPassword: '' })
  const [isResetPasswordSuccess, setIsResetPasswordSuccess] = useState<boolean>(false)
  const { errors, validateAt, validate } = useValidation<IResetPasswordForm>()

  const handleChangeInput = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    e.persist()
    const { name, value } = e.target
    validateAt({
      schema: resetPasswordSchema,
      path: name,
      data: { ...formValues, [name]: value },
      isSync: true
    })
    setFormValues(
      (prev) => ({
        ...prev,
        [name]: value
      })
    )
  }, [validateAt, formValues])

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(async (e) => {
    try {
      preventDefault(e)
      const isValid = await validate({ schema: resetPasswordSchema, data: formValues })
      if (!isValid || !formValues.newPassword) return

      await PasswordApi.resetPasswordRequest({ password: formValues.newPassword, token: token as string })
      setIsResetPasswordSuccess(true)
    } catch (error) {
      MessageService.push({
        severity: EMessage.ERROR,
        content: getApiErrorMessage(error)
      })
    }
  }, [formValues, token, history])

  useEffect(() => {
    if (isResetPasswordSuccess) {
      timer.current = setInterval(() => {
        setCount(prevCount => prevCount - 1)
      }, 1000)

      return () => { if (timer.current) clearInterval(timer.current) }
    }
  }, [isResetPasswordSuccess])

  useEffect(() => {
    if (count < 1) {
      history.push('/')
    }
  }, [count, history])

  return (
    <NotAllowAuthenticated>
      <STContainer>
        {isResetPasswordSuccess
          ? (
            <STResetPasswordSuccess>
              <img src={IMGSuccess} alt="success"/>
              <Typography variant="h3">Your password was changed</Typography>
              <Button order="secondary" width={378} onClick={() => history.push('/')}>
                Go to Sign in ({count})
              </Button>
            </STResetPasswordSuccess>
            )
          : (
            <>
              <Typography variant="h2" mb={5}>New password</Typography>
              <STForm onSubmit={handleSubmit}>
                <Input
                  label="New password"
                  id="newPassword"
                  type="password"
                  name="newPassword"
                  placeholder="Enter your password"
                  value={formValues.newPassword || ''}
                  onChange={handleChangeInput}
                  error={errors.newPassword}
                  required
                />
                <Input
                  label="Confirm new password"
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter your password"
                  value={formValues.confirmPassword || ''}
                  onChange={handleChangeInput}
                  error={errors.confirmPassword}
                  required
                />

                <Button
                  fullWidth
                  type="submit"
                >
                  Change password
                </Button>
              </STForm>
            </>
            )}
      </STContainer>
    </NotAllowAuthenticated>
  )
}
