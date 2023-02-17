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
          <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>Tiếp nhận</Typography>
          <Typography variant="body2">Tiếp nhận thông tin dự án, sản phẩm cần xây dựng.</Typography>
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
          <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>Xử lí</Typography>
          <Typography variant="body2">Xử lí thông tin, tạo môi trường Research.</Typography>
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
          <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>Lên ý tưởng</Typography>
          <Typography variant="body2">Khởi tạo StyleCape, lên các ý tưởng cần thiết từ chi tiết đến tổng thể.</Typography>
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
          <Typography variant="body2"><Typography component="span" variant="body2" color={theme.colors['--color-primary-400']}>UX</Typography> - Phát triển các mẫu thử giải quyết Painpoint của User.</Typography>
          <Typography variant="body2"><Typography component="span" variant="body2" color={theme.colors['--color-primary-400']}>UI</Typography> - Khởi tạo hệ thống thiết kế UI - Visual.</Typography>
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
          <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>Kiểm tra & Xuất bản</Typography>
          <Typography variant="body2">Kiểm tra yêu cầu {'->'} Xuất bản các phiên bản thử nghiệm {'->'} Thu thập phản hồi {'->'} Đưa ra phiên bản cuối.</Typography>
        </STInfo>
      </Box>
    </STContainer>
  )
}
