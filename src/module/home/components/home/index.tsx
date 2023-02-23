import { FC } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { IconArrowDown, IconInstagram, IconMouse, IconSkype, IconZalo } from 'src/icons'
import JobPosition from 'src/images/job-position.png'
import NameSite from 'src/images/name-site.png'
import Avatar from 'src/images/avatar.png'
import Logo from 'src/images/logo.png'
import SmallAvatar from 'src/images/small-avatar.png'
import Signature from 'src/images/signature.png'

import { STHeader, STContainer, STBlock7, STScroll } from './styled'
import { Title } from '../title'
import { Company } from '../company'
import { About } from '../about'
import { Work } from '../work'
import { Profile } from '../profile'
import { WorkFlow } from '../work-flow'

export const Home: FC = () => {
  const theme = useTheme()

  const handleRedirect = (url?: string) => {
    if (url) {
      return window.open(url)
    }

    return window.open('https://www.behance.net/dangtinnguyen1208')
  }

  const handleScroll = (top: number) => {
    const element = document.getElementById('home')

    return element?.scrollTo({
      top,
      behavior: 'smooth'
    })
  }

  return (
    <STContainer id="home">
      <STScroll>
        <IconMouse/>
      </STScroll>

      <STHeader>
        <img src={Logo} alt="logo"/>
        <img src={NameSite} alt="name site"/>
        <img src={JobPosition} alt="job position"/>
        <img src={Avatar} alt="avatar"/>
      </STHeader>

      <About handleScroll={handleScroll}/>
      <Work handleRedirect={handleRedirect}/>
      <Company/>
      <Profile handleScroll={handleScroll}/>
      <WorkFlow/>

      <STBlock7>
        <Title number="06" title="CONTACT"/>
        <Box marginTop="61px">
          <img src={SmallAvatar} alt="avatar"/>
        </Box>
        <Box mt={2} mb={4}>
          <img src={Signature} alt="signature"/>
        </Box>
        <Typography variant="sbutitle2" color={theme.colors['--color-neutral-theme-400']}>
          tinnguyen.cip@gmail.com
        </Typography>
        <Box mt={4} mb={4} display="flex" flexDirection="column" alignItems="center" gap={1}>
          <IconArrowDown/>
          <Typography variant="sbutitle1" color={theme.colors['--color-neutral-theme-400']}>
            039 406 4522
          </Typography>
          <Typography variant="sbutitle1" color={theme.colors['--color-neutral-theme-300']} sx={{ opacity: 0.4 }}>
            036 8395 300
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={5}>
          <IconInstagram onClick={() => handleRedirect('https://web.telegram.org/k/#5237689770')} cursor="pointer"/>
          <IconZalo onClick={() => handleRedirect('https://zalo.me/0394064522')} cursor="pointer"/>
          <IconSkype onClick={() => handleRedirect('https://join.skype.com/invite/f24JM29zLf2n')} cursor="pointer"/>
        </Box>
        <Box mt={9} mb={4} display="flex" flexDirection="column" alignItems="center" gap={1}>
          <Typography variant="body2" color={theme.colors['--color-neutral-theme-300']}>
            Contact me if my profile interests you!
          </Typography>
          <Box
            width={58}
            sx={{
              height: '1px',
              background: theme.colors['--color-black']
            }}
          />
        </Box>
        <Typography variant="body2" color={theme.colors['--color-neutral-theme-300']}>
          Portfolio - NGUYEN DANG TIN - 2022
        </Typography>
      </STBlock7>
    </STContainer>
  )
}
