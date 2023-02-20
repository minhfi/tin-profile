import { FC } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { IconDesign, IconIdea, IconList, IconSearch, IconRocket } from 'src/icons'
import BGWorkFlow from 'src/images/bg-workflow.png'

import { STContainer, STInfo } from './styled'

export const WorkFlow:FC = () => {
  const theme = useTheme()

  return (
    <STContainer>
      <img src={BGWorkFlow} alt="BG WorkFlow"/>

      <Box
        sx={{
          position: 'absolute',
          top: '24px',
          left: 0
        }}
      >
        <STInfo>
          <IconList/>
          <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>Receive</Typography>
          <Typography variant="body2">Receive information about projects and products to be built.</Typography>
        </STInfo>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '340px',
          right: 0
        }}
      >
        <STInfo textAlign="left" alignItems="start">
          <IconSearch/>
          <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>Treatment</Typography>
          <Typography variant="body2">Processing information, creating a research environment.</Typography>
        </STInfo>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '645px',
          left: 0
        }}
      >
        <STInfo>
          <IconIdea/>
          <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>Come up with ideas</Typography>
          <Typography variant="body2">Start StyleCape and gather all of the necessary ideas, from detail to overall.</Typography>
        </STInfo>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '336px',
          right: 0
        }}
      >
        <STInfo textAlign="left" alignItems="start">
          <IconDesign/>
          <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>Design</Typography>
          <Typography variant="body2"><Typography component="span" variant="body2" color={theme.colors['--color-primary-400']}>UX</Typography> - Develop prototypes that solve the user's pain points.</Typography>
          <Typography variant="body2"><Typography component="span" variant="body2" color={theme.colors['--color-primary-400']}>UI</Typography> - Initialize UI (Visual Design System).</Typography>
        </STInfo>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '-40px',
          left: 0
        }}
      >
        <STInfo>
          <IconRocket/>
          <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>Test & Publish</Typography>
          <Typography variant="body2">Test Requirements {'->'}  Test Versions {'->'} Feedback  {'->'} Release Final Version.</Typography>
        </STInfo>
      </Box>
    </STContainer>
  )
}
