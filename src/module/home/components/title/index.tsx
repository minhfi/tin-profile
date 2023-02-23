import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { STContainer } from './styled'

interface ITitle {
  number: string
  title: string
}

export const Title:FC<ITitle> = ({ number, title }) => {
  return (
    <STContainer>
      <Box>
        <Typography variant="h6">{number}</Typography>
      </Box>
      <Typography variant="h1">
        {title}
      </Typography>
    </STContainer>
  )
}
