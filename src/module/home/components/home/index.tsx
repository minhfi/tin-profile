import { FC } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { IconArrowDown, IconArrowLeft, IconArrowRight, IconFacebook, IconInstagram, IconZalo } from 'src/icons'
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

import { STBlock1, STBlock2, STBlock3, STContainer, STInfoLeft, STSmartCarGo, STInfoRight, STMatBao, STSportE, STHellven, STBlock4, STBlock5, STBlock6, STBlock7 } from './styled'
import { TitleSection } from '../title-section'
import { Skill } from '../skill'
import { Profile } from '../profile'
import { WorkFlow } from '../work-flow'
import { Company } from '../company'

export const Home: FC = () => {
  const theme = useTheme()

  const handleGoToProject = () => window.open('https://www.behance.net/dangtinnguyen1208')

  const handleScroll = (top: number) => {
    const element = document.getElementById('home')

    return element?.scrollTo({
      top,
      behavior: 'smooth'
    })
  }

  return (
    <STContainer id="home">
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
            Tôi tên là Đăng Tín (Lupin) và tôi đến từ Việt Nam.Tôi là một Nhà thiết kế Sản phẩm và tương tác người dùng với hơn 3 năm kinh nghiệm làm việc trong Photograhpy, Thiết kế Đồ họa và Thiết kế Sản phẩm Kỹ thuật số như thiết kế Thương hiệu, Trang web và Ứng dụng Di động.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'right',
              width: '216px',
              color: theme.colors['--color-neutral-theme-400']
            }}
          >
            Để trở thành Chuyên viên về Product Designer như ngày hôm nay, tôi hiểu nhu cầu của khách hàng, sau đó tôi nghiên cứu và đưa ra giải pháp tốt nhất với UI/ UX trong sản phẩm.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: '216px',
              color: theme.colors['--color-neutral-theme-400']
            }}
          >
            Đối với tôi, Thiết kế không chỉ là làm cho mọi thứ trông đẹp và tốt. Nó là một công cụ mạnh mẽ để giao tiếp và có ảnh hưởng lớn đến sự thành công của bất kỳ dự án nào. Nó giúp cung cấp các sản phẩm và dịch vụ chất lượng cao dẫn đến trải nghiệm sử dụng tuyệt vời của con người tốt hơn và mang lại sự hài lòng từ khách hàng.
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
              <Box display="flex" alignItems="center" gap={1} onClick={handleGoToProject}>
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
                <Typography variant="h4">MẮT BÃO</Typography>
                <Box display="flex" alignItems="center" gap={1} onClick={handleGoToProject}>
                  <IconArrowLeft/>
                  <Typography variant="body2">Go to Project</Typography>
                </Box>
              </STInfoRight>
            </STMatBao>
            <STSportE>
              <STInfoLeft>
                <Typography variant="body2">UI/UX Design - NFTs - Play to Earn</Typography>
                <Typography variant="h4">SPORTE</Typography>
                <Box display="flex" alignItems="center" gap={1} onClick={handleGoToProject}>
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
              <Box display="flex" alignItems="center" gap={1} onClick={handleGoToProject}>
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
            Với tôi, Design không chỉ là tạo nên mọi thứ trông đẹp và tốt. Đó là công cụ đắc lực cho sự giao tiếp và là sự ảnh hưởng lớn cho thành công của mọi dự án. Nó giúp cung cấp sản phẩm và dịch vụ chất lượng cao dẫn đến trải nghiệm người dùng tốt hơn và mang đến sự hài lòng từ khách hàng.
          </Typography>
          <Typography variant="body1" textAlign="center" color={theme.colors['--color-neutral-theme-400']}>
            Tôi là UI/UX Designer! Tôi có hơn 4 năm kinh nghiệm trong thiết kế trải nghiệm người dùng trên đa nền tảng Application,Website & Sofware. Tôi thông thạo các phần mềm đi đầu cho việc thiết kế ở thời điểm hiện tại. Ngoài ra, kinh nghiệm của tôi không chỉ dừng lại ở việc nghiên cứu và thiết kế, mà còn là quan điểm của doanh nghiệp. Chính vì vậy, tôi luôn thúc đẩy bởi niềm đam mê và cốt lõi giá trị mỗi sản phẩm của doanh nghiệp liên kết kết với khách hàng để tạo ra những giao diện người dùng hiện đại và thật tiện ích cho đến mục tiêu cuối cùng.
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
          <IconFacebook/>
          <IconZalo/>
          <IconInstagram/>
        </Box>
        <Box mt={9} mb={4} display="flex" flexDirection="column" alignItems="center" gap={1}>
          <Typography variant="body2" color={theme.colors['--color-neutral-theme-300']}>
            Liên hệ tôi, nếu hồ sơ của tôi làm bạn hứng thú!
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
          Porforlio - NGUYEN DANG TIN - 2022
        </Typography>
      </STBlock7>
    </STContainer>
  )
}
