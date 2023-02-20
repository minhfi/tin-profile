import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'
import { IconDoubleArrowUp } from 'src/icons'
import { STCircle, STContainer, STDivider, STLanguage, STLanguageItem, STScrollTop, STSection, STSectionItem } from './styled'

interface ISidebar {
  handleScrollTop: (val: number) => void
  section: number
}

export const Sidebar: FC<ISidebar> = ({ handleScrollTop, section }) => {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState<string>('en')

  const handleLanguage = (ln: string) => {
    setLanguage(ln)
    i18n.changeLanguage(ln)
  }

  return (
    <STContainer>
      <STScrollTop isShow={section > 0} onClick={() => handleScrollTop(0)}>
        <IconDoubleArrowUp/>
        <Typography variant="h6">TOP</Typography>
      </STScrollTop>
      <STSection>
        <STSectionItem isActive={section === 1} onClick={() => handleScrollTop(750)}>
          <Typography variant="body3">1</Typography>
        </STSectionItem>
        <STCircle/>
        <STSectionItem isActive={section === 2} onClick={() => handleScrollTop(1930)}>
          <Typography variant="body3">2</Typography>
        </STSectionItem>
        <STCircle/>
        <STSectionItem isActive={section === 3} onClick={() => handleScrollTop(4120)}>
          <Typography variant="body3">3</Typography>
        </STSectionItem>
        <STCircle/>
        <STSectionItem isActive={section === 4} onClick={() => handleScrollTop(5220)}>
          <Typography variant="body3">4</Typography>
        </STSectionItem>
        <STCircle/>
        <STSectionItem isActive={section === 5} onClick={() => handleScrollTop(6680)}>
          <Typography variant="body3">5</Typography>
        </STSectionItem>
        <STCircle/>
        <STSectionItem isActive={section === 6} onClick={() => handleScrollTop(8800)}>
          <Typography variant="body3">6</Typography>
        </STSectionItem>
      </STSection>
      <STDivider/>
      <STLanguage>
        <STLanguageItem isActive={language === 'en'} onClick={() => handleLanguage('en')}>
          <Typography variant="body3">EN</Typography>
        </STLanguageItem>
        <STCircle/>
        <STLanguageItem isActive={language === 'vn'} onClick={() => handleLanguage('vn')}>
          <Typography variant="body3">VN</Typography>
        </STLanguageItem>
      </STLanguage>
    </STContainer>
  )
}
