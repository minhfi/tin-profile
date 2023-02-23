import { FC, SVGProps } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Typography, useTheme } from '@mui/material'
import { IconApp, IconGraphicsDesign, IconLogoForlio, IconMouse, IconTeamLeader, IconUXUIDesign, IconWeb } from 'src/icons'
import { Button } from 'src/components/button'

import { STContainer, STDescription, STScroll, STSkillItem, STSkillWrapped } from './styled'
import { Title } from '../title'

interface IAbout {
  handleScrollTop: (val: number) => void
}

interface ISkilles {
  icon: FC<SVGProps<SVGSVGElement>>
  title: string
}

export const About:FC<IAbout> = ({ handleScrollTop }) => {
  const theme = useTheme()
  const { t } = useTranslation()

  const skilles: ISkilles[] = [
    {
      icon: IconLogoForlio,
      title: 'Logofolio'
    },
    {
      icon: IconTeamLeader,
      title: 'Team Leader'
    },
    {
      icon: IconUXUIDesign,
      title: 'UX/UI Design'
    },
    {
      icon: IconApp,
      title: 'App'
    },
    {
      icon: IconWeb,
      title: 'Web'
    }
  ]

  return (
    <STContainer>
      <STScroll>
        <IconMouse/>
      </STScroll>

      <Title number="01" title="ABOUT ME"/>

      <STSkillWrapped>
        {skilles.map(({ icon: Icon, title }) => (
          <STSkillItem key={title}>
            <Box height={49} display="flex" alignItems="end">
              <Icon/>
            </Box>
            <Typography variant="h4">{title}</Typography>
          </STSkillItem>
        ))}
        <STSkillItem>
          <Box height={49} display="flex" alignItems="end">
            <IconGraphicsDesign/>
          </Box>
          <Box display="flex" gap={0.5}>
            <Typography variant="h4" sx={{ color: `${theme.colors['--color-primary-400']} !important` }}>Graphics</Typography>
            <Typography variant="meta1" sx={{ color: `${theme.colors['--color-neutral-theme-300']} !important` }}>Design</Typography>
          </Box>
        </STSkillItem>
      </STSkillWrapped>

      <STDescription>
        <Typography variant="h3">
          {t('about_me_description1')}
        </Typography>
        <Typography variant="body1">
          {t('about_me_description2')}
        </Typography>
        <Typography variant="body1">
          {t('about_me_description3')}
        </Typography>
      </STDescription>

      <Button onClick={() => handleScrollTop(5100)}>CHECK OUT PROFILE</Button>
    </STContainer>
  )
}
