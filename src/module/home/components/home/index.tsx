import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Typography, useTheme } from '@mui/material'
import { IconArrowDown, IconArrowLeft, IconArrowRight, IconInstagram, IconMouse, IconSkype, IconZalo } from 'src/icons'
import { Button } from 'src/components/button'
import JobPosition from 'src/images/job-position.png'
import NameSite from 'src/images/name-site.png'
import Avatar from 'src/images/avatar.png'
import Logo from 'src/images/logo.png'
import SmartCarGo from 'src/images/smartcargo.png'
import Matbao from 'src/images/matbao.png'
import SportE from 'src/images/sporte.png'
import Hellven from 'src/images/hellven.png'
import SmallAvatar from 'src/images/small-avatar.png'
import Signature from 'src/images/signature.png'

import { STBlock1, STBlock2, STBlock3, STContainer, STInfoLeft, STSmartCarGo, STInfoRight, STMatBao, STSportE, STHellven, STBlock4, STBlock5, STBlock6, STBlock7, STScroll } from './styled'
import { TitleSection } from '../title-section'
import { Skill } from '../skill'
import { Profile } from '../profile'
import { WorkFlow } from '../work-flow'
import { Company } from '../company'
import { Sidebar } from '../sidebar'

export const Home: FC = () => {
  const theme = useTheme()
  const { t } = useTranslation()
  const [section, setSection] = useState<number>(0)

  const handleRedirect = (url?: string) => {
    if (url) {
      return window.open(url)
    }

    return window.open('https://www.behance.net/dangtinnguyen1208')
  }

  const handleScroll = () => {
    const element = document.getElementById('home')
    const scrollTop = element?.scrollTop || 0

    switch (true) {
      case scrollTop < 300:
        return setSection(0)
      case scrollTop > 300 && scrollTop < 1500:
        return setSection(1)
      case scrollTop > 1500 && scrollTop < 3700:
        return setSection(2)
      case scrollTop > 3700 && scrollTop < 4800:
        return setSection(3)
      case scrollTop > 4800 && scrollTop < 6200:
        return setSection(4)
      case scrollTop > 6200 && scrollTop < 8200:
        return setSection(5)
      case scrollTop > 8200:
        return setSection(6)

      default:
        return setSection(0)
    }
  }

  const handleScrollTop = (top: number) => {
    const element = document.getElementById('home')

    return element?.scrollTo({
      top,
      behavior: 'smooth'
    })
  }

  return (
    <STContainer
      id="home" onScroll={handleScroll}
    >
      <Sidebar section={section} handleScrollTop={handleScrollTop}/>
      <STBlock1>
        <img src={Logo} alt="logo"/>
        <img src={NameSite} alt="name site"/>
        <img src={JobPosition} alt="job position"/>
        <img src={Avatar} alt="avatar"/>
      </STBlock1>

      <STBlock2>
        <STScroll>
          <IconMouse/>
        </STScroll>
        <TitleSection number="01" title="ABOUT ME"/>
        <Skill/>
        <Box display="flex" gap={2.5} sx={{ marginBottom: '79px' }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'right',
              width: '237px',
              color: theme.colors['--color-neutral-theme-400']
            }}
          >
            {t('about_me_description1')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'right',
              width: '216px',
              color: theme.colors['--color-neutral-theme-400']
            }}
          >
            {t('about_me_description2')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: '216px',
              color: theme.colors['--color-neutral-theme-400']
            }}
          >
            {t('about_me_description3')}
          </Typography>
        </Box>
        <Button onClick={() => handleScrollTop(5100)}>CHECK OUT PROFILE</Button>
      </STBlock2>

      <STBlock3>
        <TitleSection number="02" title="WORK"/>
        <Box width={697} display="flex" flexDirection="column">
          <STSmartCarGo>
            <STInfoLeft>
              <Typography variant="body2">Branding - UI/UX Design</Typography>
              <Typography variant="h4">SmartCargo</Typography>
              <Box display="flex" alignItems="center" gap={1} onClick={() => handleRedirect()}>
                <Typography variant="body2">Go to Project</Typography>
                <IconArrowRight/>
              </Box>
            </STInfoLeft>
            <img src={SmartCarGo} alt="smartcargo"/>
          </STSmartCarGo>
          <Box position="relative" mt={8}>
            <STMatBao>
              <img src={Matbao} alt="matbao"/>
              <STInfoRight>
                <Typography variant="body2">UI/UX Design</Typography>
                <Typography variant="h4">MAT BAO</Typography>
                <Box display="flex" alignItems="center" gap={1} onClick={() => handleRedirect()}>
                  <IconArrowLeft/>
                  <Typography variant="body2">Go to Project</Typography>
                </Box>
              </STInfoRight>
            </STMatBao>
            <STSportE>
              <STInfoLeft>
                <Typography variant="body2">UI/UX Design - NFTs - Play to Earn</Typography>
                <Typography variant="h4">SPORTE</Typography>
                <Box display="flex" alignItems="center" gap={1} onClick={() => handleRedirect()}>
                  <Typography variant="body2">Go to Project</Typography>
                  <IconArrowRight/>
                </Box>
              </STInfoLeft>
              <img src={SportE} alt="sporte"/>
            </STSportE>
          </Box>
          <STHellven>
            <img src={Hellven} alt="hellven"/>
            <STInfoRight>
              <Typography variant="body2">UI/UX Design - NFTs - Turn Base</Typography>
              <Typography variant="h4">HELLVEN</Typography>
              <Box display="flex" alignItems="center" gap={1} onClick={() => handleRedirect()}>
                <IconArrowLeft/>
                <Typography variant="body2">Go to Project</Typography>
              </Box>
            </STInfoRight>
          </STHellven>
        </Box>
        <Button>READ MORE</Button>
      </STBlock3>

      <STBlock4>
        <TitleSection number="03" title="MY COMPANY"/>
        <Company/>
      </STBlock4>

      <STBlock5>
        <TitleSection number="04" title="MY PROFILE"/>
        <Box display="flex" flexDirection="column" gap={2} width={926} mt={10}>
          <Typography variant="body1" textAlign="center" color={theme.colors['--color-neutral-theme-400']}>
            {t('profile_description1')}
          </Typography>
          <Typography variant="body1" textAlign="center" color={theme.colors['--color-neutral-theme-400']}>
            {t('profile_description2')}
          </Typography>
        </Box>
        <Button sx={{ margin: '39px 0 79px' }} onClick={() => handleScrollTop(8500)}>Hire me</Button>
        <Profile/>
      </STBlock5>

      <STBlock6>
        <TitleSection number="05" title="WORK FLOW"/>
        <WorkFlow/>
      </STBlock6>

      <STBlock7>
        <TitleSection number="06" title="CONTACT"/>
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
            {t('contact')}
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
