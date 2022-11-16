import { ChangeEventHandler, FC, FormEventHandler, MouseEventHandler, useCallback, useState } from 'react'

import { NotAllowAuthenticated } from 'src/components/not-allow-authenticated'
import { PasswordResetSuccess } from './PasswordResetSuccess'
import { MessageService } from 'src/services/message.service'
import { getApiErrorMessage } from 'src/utils/axios.utils'
import { preventDefault } from 'src/utils/event.util'
import { PasswordReset } from './PasswordReset'
import { PasswordApi } from 'src/api'
import { EMessage } from 'src/enums'

import { STForgotPasswordWrapper } from './styled'

interface IForgotPasswordForm {
  email: string
}

export const ForgotPassword: FC = () => {
  const [formValues, setFormValues] = useState<IForgotPasswordForm>({ email: '' })
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleChangeInput = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    e.persist()
    const { name, value } = e.target
    setError('')
    setFormValues(
      (prev) => ({
        ...prev,
        [name]: value
      })
    )
  }, [])

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement> & MouseEventHandler>(async (e) => {
    preventDefault(e)

    try {
      await PasswordApi.forgotPasswordRequest(formValues)
      setIsSuccess(true)
    } catch (error) {
      MessageService.push({
        severity: EMessage.ERROR,
        content: getApiErrorMessage(error)
      })
    }
  }, [formValues])

  return (
    <NotAllowAuthenticated>
      <STForgotPasswordWrapper>
        {isSuccess
          ? <PasswordResetSuccess handleSubmit={handleSubmit}/>
          : <PasswordReset
              email={formValues.email}
              error={error}
              handleChangeInput={handleChangeInput}
              handleSubmit={handleSubmit}
            />}
      </STForgotPasswordWrapper>
    </NotAllowAuthenticated>
  )
}
