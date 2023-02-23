import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Typography, useTheme } from '@mui/material'
import { IconDesign, IconIdea, IconList, IconSearch, IconRocket } from 'src/icons'
import BGWorkFlow from 'src/images/bg-workflow.png'

import { STContainer, STInfo, STWorkFlow } from './styled'
import { Title } from '../title'

export const WorkFlow:FC = () => {
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <STContainer>
      <Title number="05" title="WORK FLOW"/>

      <STWorkFlow>
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
            <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>{t('workflow_title1')}</Typography>
            <Typography variant="body2">{t('workflow_content1')}</Typography>
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
            <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>{t('workflow_title2')}</Typography>
            <Typography variant="body2">{t('workflow_content2')}</Typography>
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
            <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>{t('workflow_title3')}</Typography>
            <Typography variant="body2">{t('workflow_content3')}</Typography>
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
            <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>{t('workflow_title4')}</Typography>
            <Typography variant="body2">
              <Typography component="span" variant="body2" color={theme.colors['--color-primary-400']}>
                UX
              </Typography> - {t('workflow_content4_ux')}
            </Typography>
            <Typography variant="body2">
              <Typography component="span" variant="body2" color={theme.colors['--color-primary-400']}>
                UI
              </Typography> - {t('workflow_content4_ui')}
            </Typography>
          </STInfo>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '-20px',
            left: 0
          }}
        >
          <STInfo>
            <IconRocket/>
            <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>{t('workflow_title5')}</Typography>
            <Typography variant="body2">{t('workflow_content5')}</Typography>
          </STInfo>
        </Box>
      </STWorkFlow>
    </STContainer>
  )
}
