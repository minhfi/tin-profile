import { FC, SVGProps } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { IconApp, IconGraphicsDesign, IconLogoForlio, IconTeamLeader, IconUXUIDesign, IconWeb } from 'src/icons'
import { Button } from 'src/components/button'

import { STContainer, STDescription, STSkillItem, STSkillWrapped } from './styled'
import { Title } from '../title'

interface IAbout {
  handleScroll: (val: number) => void
}

interface ISkilles {
  icon: FC<SVGProps<SVGSVGElement>>
  title: string
}

export const About:FC<IAbout> = ({ handleScroll }) => {
  const theme = useTheme()

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
          My name is Dang Tin (Lupin), and I am from Vietnam. I am a product and user interaction designer with over 4 years of experience working in photography, graphic design, and technical product design such as brand design, website design, and mobile application design.
        </Typography>
        <Typography variant="body1">
          To become the product designer I am today, I first understood the customer's needs, then did research to come up with the best solution for the UI and UX of the product.
        </Typography>
        <Typography variant="body1">
          For me, design is more than just making things look good. It is a powerful tool for communication and has a great influence on the success of any project. It helps to provide high-quality products and services that lead to a better human user experience and customer satisfaction.
        </Typography>
      </STDescription>

      <Button onClick={() => handleScroll(5100)}>CHECK OUT PROFILE</Button>
    </STContainer>
  )
}
