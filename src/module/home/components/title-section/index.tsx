import { FC } from 'react'
import { Typography } from '@mui/material'
import { STContainer, STSubSectionNumber } from './styled'

interface ITitle {
  number: string
  title: string
}

export const TitleSection:FC<ITitle> = ({ number, title }) => {
  return (
    <STContainer>
      <STSubSectionNumber>
        <Typography variant="h6">{number}</Typography>
      </STSubSectionNumber>
      <Typography variant="h1">
        {title}
      </Typography>
    </STContainer>
  )
}
