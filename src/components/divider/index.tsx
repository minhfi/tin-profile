import { ComponentProps, FC } from 'react'
import { Divider as MuiDivider } from '@mui/material'
import { STDivider } from './styled'

type TDividerPropsDefault = ComponentProps<typeof MuiDivider>

export interface IDividerProps extends TDividerPropsDefault {
  mt?: number
  mb?: number
  background?: string
}

export const Divider: FC<IDividerProps> = (props) => {
  return <STDivider {...props}/>
}
