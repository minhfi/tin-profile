import { FC, useRef } from 'react'
import { SxProps, TextareaAutosizeProps, Typography } from '@mui/material'
import { TextareaCustom, TextareaWrapper } from './styled'
import { Label } from '../label'

interface TextareaCustomProps {
  label?: string
  error?: string
  disableResize?: boolean
  countLength?: boolean
  sx?: SxProps
}

type TTextareaProps = TextareaAutosizeProps & TextareaCustomProps

export const Textarea: FC<TTextareaProps> = ({ label, error, disableResize, countLength, ...props }) => {
  const ref = useRef<HTMLTextAreaElement | null>(null)

  return (
    <TextareaWrapper>
      {label && <Label>{label}</Label>}
      <TextareaCustom ref={ref} disableResize={disableResize} minRows={5} {...props}/>
      {countLength && !!props.maxLength && (
        <Typography
          textAlign="end"
          variant="body2"
          mt={(theme) => theme.spacing(1.5)}
        >
          {`${ref.current?.value?.length || 0}/${props.maxLength}`}
        </Typography>
      )}
    </TextareaWrapper>
  )
}
