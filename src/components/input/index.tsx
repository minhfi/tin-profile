import { FC, useCallback, useState, HTMLInputTypeAttribute } from 'react'
import { IconButton, InputAdornment, SxProps, TextFieldProps } from '@mui/material'
import { IconMessageError, IconVisibility, IconVisibilityOff } from 'src/icons'

import { Message } from '../message'
import { Label } from '../label'
import { TextField, TextInput, STError } from './styled'

export interface InputBaseProps {
  type?: HTMLInputTypeAttribute
  name?: string
  label?: string
  error?: string
  mb?: number
  sx?: SxProps
}

export type InputProps = InputBaseProps & Omit<TextFieldProps, 'error'>

export const Input: FC<InputProps> = ({ label, error, mb, ...props }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const toggleShowPassword = useCallback(() => setShowPassword(!showPassword), [showPassword])

  const type = props.type === 'password' && !showPassword ? 'password' : 'text'
  const InputProps = props.type === 'password'
    ? {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="Toggle password visibility"
              onClick={toggleShowPassword}
              onMouseDown={toggleShowPassword}
            >
              {showPassword ? <IconVisibility/> : <IconVisibilityOff/>}
            </IconButton>
          </InputAdornment>
        )
      }
    : props.InputProps

  return (
    <TextInput mb={mb} sx={props.sx}>
      {label && <Label>{label}</Label>}
      <TextField
        {...props}
        type={type}
        error={!!error}
        InputProps={InputProps}
      />

      {error && (
        <STError>
          <IconMessageError/> <Message showMessage={!!error} status="error">{error}</Message>
        </STError>
      )}
    </TextInput>
  )
}

Input.defaultProps = {
  type: 'text',
  mb: 4
}
