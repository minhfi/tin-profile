import { FC } from 'react'
import { Typography } from '@mui/material'

import { getLayoutIsHeader, getLayoutPageTitle } from 'src/store/selectors'
import { useAppSelector } from 'src/hooks/redux'

import { STHeader, STTitle, STTitleItem } from './styled'

export const Header: FC = () => {
  const isHeader = useAppSelector(getLayoutIsHeader)
  const pageTitle = useAppSelector(getLayoutPageTitle)

  const titles = pageTitle?.split('/')

  return (
    <STHeader display={isHeader}>
      <STTitle>
        {titles?.map((title, index) => (
          <STTitleItem key={index} isLastTitle={titles?.length === index + 1}>
            <Typography variant="h4">
              {title}
            </Typography>
            <Typography variant="h4">/</Typography>
          </STTitleItem>
        ))}
      </STTitle>
    </STHeader>
  )
}
