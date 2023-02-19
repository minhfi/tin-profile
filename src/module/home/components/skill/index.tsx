import { FC, SVGProps } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { STContainer, STSkillItem } from './styled'
import { IconApp, IconGraphicsDesign, IconLogoForlio, IconTeamLeader, IconUXUIDesign, IconWeb } from 'src/icons'

interface ISkilles {
  icon: FC<SVGProps<SVGSVGElement>>
  title: string
}
export const Skill:FC = () => {
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
          <Typography variant="h4" sx={{ color: `${theme.colors['--color-primary-400']} !important` }}>Graphichcs</Typography>
          <Typography variant="meta1" sx={{ color: `${theme.colors['--color-neutral-theme-300']} !important` }}>Design</Typography>
        </Box>
      </STSkillItem>
    </STContainer>
  )
}
