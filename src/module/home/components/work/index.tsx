import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { IconArrowLeft, IconArrowRight } from 'src/icons'
import { Button } from 'src/components/button'
import SmartCarGo from 'src/images/smartcargo.png'
import Matbao from 'src/images/matbao.png'
import SportE from 'src/images/sporte.png'
import Hellven from 'src/images/hellven.png'

import { STContainer, STHellven, STInfoLeft, STInfoRight, STMatBao, STProject, STSmartCarGo, STSportE } from './styled'
import { Title } from '../title'

interface IWork {
  handleRedirect: () => void
}

export const Work:FC<IWork> = ({ handleRedirect }) => {
  return (
    <STContainer>
      <Title number="02" title="WORK"/>

      <STProject>
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
      </STProject>

      <Button>READ MORE</Button>
    </STContainer>
  )
}
