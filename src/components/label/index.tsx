import { ComponentProps, FC } from 'react'
import { Typography } from '@mui/material'

import { STContainer } from './styled'

export const Label: FC<ComponentProps<typeof Typography>> = (props) => {
  return <STContainer variant="meta1" {...props}/>
}
