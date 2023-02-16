import { FC } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { IconArrowLeft, IconArrowRight } from 'src/icons'
import { Button } from 'src/components/button'
import JobPosition from 'src/images/job-position.png'
import NameSite from 'src/images/name-site.png'
import Avatar from 'src/images/avatar.png'
import Logo from 'src/images/logo.png'
import SmartCarGo from 'src/images/smartcargo.png'
import Matbao from 'src/images/matbao.png'
import SportE from 'src/images/sporte.png'
import Hellven from 'src/images/hellven.png'

import { STBlock1, STBlock2, STBlock3, STContainer, STInfoLeft, STSmartCarGo, STInfoRight, STMatBao, STSportE, STHellven, STBlock4, STBlock5, STProfile } from './styled'
import { TitleSection } from '../title-section'
import { Skill } from '../skill'

export const Home: FC = () => {
  const theme = useTheme()

  return (
    <STContainer>
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
        <Button>CHECK OUT PROFILE</Button>
      </STBlock2>
      <STBlock3>
        <TitleSection number="02" title="WORK"/>
        <Box width={697} display="flex" flexDirection="column">
          <STSmartCarGo>
            <STInfoLeft>
              <Typography variant="body2">Branding - UI/UX Design</Typography>
              <Typography variant="h4">SmartCargo</Typography>
              <Box display="flex" alignItems="center" gap={1}>
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
                <Box display="flex" alignItems="center" gap={1}>
                  <IconArrowLeft/>
                  <Typography variant="body2">Go to Project</Typography>
                </Box>
              </STInfoRight>
            </STMatBao>
            <STSportE>
              <STInfoLeft>
                <Typography variant="body2">UI/UX Design - NFTs - Play to Earn</Typography>
                <Typography variant="h4">SPORTE</Typography>
                <Box display="flex" alignItems="center" gap={1}>
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
              <Box display="flex" alignItems="center" gap={1}>
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
        <Button sx={{ margin: '39px 0 79px' }}>Hire me</Button>
        <STProfile>
          sfwerf
        </STProfile>
      </STBlock5>
    </STContainer>
  )
}
