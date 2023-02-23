import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Typography, useTheme } from '@mui/material'
import { IconArrowDown, IconInstagram, IconSkype, IconZalo } from 'src/icons'
import SmallAvatar from 'src/images/small-avatar.png'
import Signature from 'src/images/signature.png'

import { STContainer, STNote, STSocialNetwork } from './styled'
import { Title } from '../title'

interface IContact {
  handleRedirect: (val: string) => void
}

export const Contact:FC<IContact> = ({ handleRedirect }) => {
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <STContainer>
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
      <STSocialNetwork>
        <IconInstagram onClick={() => handleRedirect('https://web.telegram.org/k/#5237689770')} cursor="pointer"/>
        <IconZalo onClick={() => handleRedirect('https://zalo.me/0394064522')} cursor="pointer"/>
        <IconSkype onClick={() => handleRedirect('https://join.skype.com/invite/f24JM29zLf2n')} cursor="pointer"/>
      </STSocialNetwork>
      <STNote>
        <Typography variant="body2">
          {t('contact')}
        </Typography>
        <Box/>
      </STNote>
      <Typography variant="body2" color={theme.colors['--color-neutral-theme-300']}>
        Portfolio - NGUYEN DANG TIN - 2022
      </Typography>
    </STContainer>
  )
}
