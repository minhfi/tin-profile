import { FC } from 'react'
import { IconChecked, IconUnChecked } from 'src/icons'
import { FormControlLabel } from '@mui/material'
import MuiCheckbox, { CheckboxProps } from '@mui/material/Checkbox'

export const Checkbox: FC<CheckboxProps & {label?: string}> = (props) => {
  return (
    <FormControlLabel
      sx={{
        '&.MuiFormControlLabel-root': {
          color: (theme) => theme.colors['--color-neutral-theme-300'],
          marginLeft: 0,

          '& .Mui-checked + span': {
            color: (theme) => theme.colors['--color-neutral-theme-400'],
            transition: 'all .3s ease-in-out'
          }
        }
      }}
      control={
        <MuiCheckbox
          checkedIcon={<IconChecked/>}
          icon={<IconUnChecked/>}
          sx={{
            padding: 0,
            marginRight: 1.5
          }}
          {...props}
        />
      }
      label={props.label}
    />
  )
}
