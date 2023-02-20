import { FC } from 'react'
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
      <STBlock1>
        <img src={Logo} alt="logo"/>
        <img src={NameSite} alt="name site"/>
        <img src={JobPosition} alt="job position"/>
        <img src={Avatar} alt="avatar"/>
      </STBlock1>

      <STBlock2>
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
            My name is Dang Tin (Lupin), and I am from Vietnam. I am a product and user interaction designer with over 4 years of experience working in photography, graphic design, and technical product design such as brand design, website design, and mobile application design.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'right',
              width: '216px',
              color: theme.colors['--color-neutral-theme-400']
            }}
          >
            To become the product designer I am today, I first understood the customer's needs, then did research to come up with the best solution for the UI and UX of the product.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: '216px',
              color: theme.colors['--color-neutral-theme-400']
            }}
          >
            For me, design is more than just making things look good. It is a powerful tool for communication and has a great influence on the success of any project. It helps to provide high-quality products and services that lead to a better human user experience and customer satisfaction.
          </Typography>
        </Box>
        <Button onClick={() => handleScroll(5100)}>CHECK OUT PROFILE</Button>
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
            Design, to me, is more than just making things look nice. It is a powerful tool for communication and has a great influence on the success of any project. It helps to deliver high-quality products and services that lead to a better user experience and customer satisfaction.
          </Typography>
          <Typography variant="body1" textAlign="center" color={theme.colors['--color-neutral-theme-400']}>
            I'm a UI/UX Designer! I have more than 4 years of experience in user experience design for cross-platform applications, websites, and software. I am fluent in the leading software for design at the present time. In addition, my experience is not only in research and design but also from a business perspective. As a result, I am always motivated by the passion and core values of each business product associated with customers to create modern and useful user interfaces in order to achieve the end goal.
          </Typography>
        </Box>
        <Button sx={{ margin: '39px 0 79px' }} onClick={() => handleScroll(8500)}>Hire me</Button>
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
