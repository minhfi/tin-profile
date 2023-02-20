import { FC, useRef, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Box, Typography, useTheme } from '@mui/material'
import { IconArrowRight, IconBGArrowDown } from 'src/icons'
import CompanyBanner1 from 'src/images/company-banner1.png'
import CompanyBanner2 from 'src/images/company-banner2.png'
import CompanyBanner3 from 'src/images/company-banner3.png'

import { STCircle, STCompany, STCompanyBanner, STCompanyItem, STCompanyWrapped, STContainer, STThreeDots } from './styled'

export const Company: FC = () => {
  const theme = useTheme()
  const nodeRef = useRef(null)
  const [slide, setSlide] = useState<number>(0)

  const handleSlide = () => {
    if (slide === 2) {
      return setSlide(0)
    }

    return setSlide(slide => slide + 1)
  }

  return (
    <STContainer>
      <SwitchTransition>
        <CSSTransition
          key={slide}
          classNames="main-fade-up"
          timeout={{ enter: 750, exit: 200 }}
        >
          <>
            {slide === 0 && (
              <STCompany>
                <STCompanyBanner>
                  <Box
                    width={170}
                    gap={1}
                    top={128}
                    left={62}
                    position="absolute"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>2016 - 2017</Typography>
                    <Typography
                      variant="sbutitle3"
                      color={theme.colors['--color-neutral-theme-400']}
                      textAlign="center"
                    >
                      We Love
                      UI/UX Design
                    </Typography>
                  </Box>
                  <img src={CompanyBanner1} alt="banner"/>
                </STCompanyBanner>
                <STCompanyWrapped>
                  <STCompanyItem>
                    <Box>
                      <Typography variant="body2">UI Design</Typography>
                      <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']} sx={{ margin: '8px 0 16px', textTransform: 'uppercase' }}>ARR - an viet song hong</Typography>
                      <Typography variant="body2" lineHeight="22px">Web UI development is based on the concept of multi-fashion products developed by An Viet Song Hong Joint Stock Company (ARR for short).</Typography>
                    </Box>
                    <Box>
                      <Typography variant="meta3">Jan 2016 -  May 2016</Typography>
                      <Box
                        width={135}
                        mt={0.75}
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          borderTop: `0.75px solid ${theme.colors['--color-neutral-theme-400']}`,
                          paddingTop: 0.5
                        }}
                      >
                        <IconArrowRight/>
                      </Box>
                    </Box>
                  </STCompanyItem>
                  <STCompanyItem>
                    <Box>
                      <Typography variant="body2">Graphic Design</Typography>
                      <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']} sx={{ margin: '8px 0 16px', textTransform: 'uppercase' }}>kem nghia</Typography>
                      <Typography variant="body2" lineHeight="22px">Graphic design and visual support for multi-channel promotion. Provide publications and develop features that need to be changed on the website.</Typography>
                    </Box>
                    <Box>
                      <Typography variant="meta3">May 2016 - May 2017</Typography>
                      <Box
                        width={135}
                        mt={0.75}
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          borderTop: `0.75px solid ${theme.colors['--color-neutral-theme-400']}`,
                          paddingTop: 0.5
                        }}
                      >
                        <IconArrowRight/>
                      </Box>
                    </Box>
                  </STCompanyItem>
                  <STCompanyItem mt={1.5}>
                    <Box>
                      <Typography variant="body2">Collaborators UI</Typography>
                      <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']} sx={{ margin: '8px 0 16px', textTransform: 'uppercase' }}>MAT BAO</Typography>
                      <Typography variant="body2" lineHeight="22px" letterSpacing="0.2px">Contributor reviews and improves an existing website's user interface:</Typography>
                      <Typography variant="body2" lineHeight="22px" letterSpacing="0.2px">- Clean</Typography>
                      <Typography variant="body2" lineHeight="22px" letterSpacing="0.2px">- Modern</Typography>
                      <Typography variant="body2" lineHeight="22px" letterSpacing="0.2px">UX & Mobile Friendly.</Typography>
                    </Box>
                    <Box>
                      <Typography variant="meta3">Aug - 2017</Typography>
                      <Box
                        width={135}
                        mt={0.75}
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          borderTop: `0.75px solid ${theme.colors['--color-neutral-theme-400']}`,
                          paddingTop: 0.5
                        }}
                      >
                        <IconArrowRight/>
                      </Box>
                    </Box>
                  </STCompanyItem>
                  <STCompanyItem mt={1.5}>
                    <Box>
                      <Typography variant="body2">UI/UX Design</Typography>
                      <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']} sx={{ margin: '8px 0 16px', textTransform: 'uppercase' }}>VIET TIEN LAB GROUP</Typography>
                      <Typography variant="body2" lineHeight="22px" letterSpacing="0.2px">Website: Renovate the commercial website, create a connection system, and provide customer support and lookup.</Typography>
                      <Typography variant="body2" lineHeight="22px" letterSpacing="0.2px">App:  Developing an online event platform and incorporating loyalty ideas into the app.</Typography>
                    </Box>
                    <Box>
                      <Typography variant="meta3">May 2017 - Feb 2018</Typography>
                      <Box
                        width={135}
                        mt={0.75}
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          borderTop: `0.75px solid ${theme.colors['--color-neutral-theme-400']}`,
                          paddingTop: 0.5
                        }}
                      >
                        <IconArrowRight/>
                      </Box>
                    </Box>
                  </STCompanyItem>
                </STCompanyWrapped>
              </STCompany>
            )}

            {slide === 1 && (
              <STCompany>
                <STCompanyBanner>
                  <Box
                    width={170}
                    gap={1}
                    top={128}
                    left={62}
                    position="absolute"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>2018 - 2021</Typography>
                    <Typography
                      variant="sbutitle3"
                      color={theme.colors['--color-neutral-theme-400']}
                      textAlign="center"
                    >
                      We Love
                      UI/UX Design
                    </Typography>
                  </Box>
                  <img src={CompanyBanner2} alt="banner"/>
                </STCompanyBanner>
                <STCompanyWrapped>
                  <STCompanyItem>
                    <Box>
                      <Typography variant="body2">UI/UX Design</Typography>
                      <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']} sx={{ margin: '8px 0 16px', textTransform: 'uppercase' }}>GMarks viet nam</Typography>
                      <ul>
                        <Typography component="li" variant="body2" lineHeight="22px">Research and build a CRM software system.</Typography>
                        <Typography component="li" variant="body2" lineHeight="22px">Developing an application ecosystem for business digitization: CRM and ERP.</Typography>
                        <Typography component="li" variant="body2" lineHeight="22px">Investment, Restructuring, and Corporate Governance Platform.</Typography>
                      </ul>
                    </Box>
                    <Box>
                      <Typography variant="meta3">Feb 2018 - Jan 2019</Typography>
                      <Box
                        width={135}
                        mt={0.75}
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          borderTop: `0.75px solid ${theme.colors['--color-neutral-theme-400']}`,
                          paddingTop: 0.5
                        }}
                      >
                        <IconArrowRight/>
                      </Box>
                    </Box>
                  </STCompanyItem>
                  <STCompanyItem>
                    <Box>
                      <Typography variant="body2">UI/UX Design</Typography>
                      <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']} sx={{ margin: '8px 0 16px', textTransform: 'uppercase' }}>Propzy</Typography>
                      <Typography variant="body2" lineHeight="22px">Website: Renovate a commercial website. optimize the user experience. App: Shared experience across two platforms (web and app).</Typography>
                      <ul>
                        <Typography component="li" variant="body2" lineHeight="22px">App Propzy</Typography>
                        <Typography component="li" variant="body2" lineHeight="22px">The platform connects Residents (App) to Management Board (Web).</Typography>
                      </ul>
                    </Box>
                    <Box>
                      <Typography variant="meta3">Feb 2019 - Jun 2019</Typography>
                      <Box
                        width={135}
                        mt={0.75}
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          borderTop: `0.75px solid ${theme.colors['--color-neutral-theme-400']}`,
                          paddingTop: 0.5
                        }}
                      >
                        <IconArrowRight/>
                      </Box>
                    </Box>
                  </STCompanyItem>
                  <STCompanyItem mt={1.5}>
                    <Box>
                      <Typography variant="body2">Collaborators UI</Typography>
                      <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']} sx={{ margin: '8px 0 16px', textTransform: 'uppercase' }}>ocb - Oricombank</Typography>
                      <Typography variant="body2" lineHeight="22px" letterSpacing="0.2px">Collaborators build CRM systems, distribution management systems, and operations for the department.</Typography>
                    </Box>
                    <Box>
                      <Typography variant="meta3">Feb 2019</Typography>
                      <Box
                        width={135}
                        mt={0.75}
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          borderTop: `0.75px solid ${theme.colors['--color-neutral-theme-400']}`,
                          paddingTop: 0.5
                        }}
                      >
                        <IconArrowRight/>
                      </Box>
                    </Box>
                  </STCompanyItem>
                  <STCompanyItem mt={1.5} width={301}>
                    <Box>
                      <Typography variant="body2">Leader Design</Typography>
                      <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']} sx={{ margin: '8px 0 16px', textTransform: 'uppercase' }}>sTA - TECHNOLOGY & APPLICATION</Typography>
                      <Typography variant="body2" lineHeight="22px" letterSpacing="0.2px">
                        Branding: Conduct research and change the overall image of the brand from brand guidelines to official guidelines.
                      </Typography>
                      <Typography variant="body2" lineHeight="22px" letterSpacing="0.2px">
                        App & Web: Developing an ecosystem for logistics Connect the Customer and the Forwarder.
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="meta3">Jun 2019 - Oct 2021</Typography>
                      <Box
                        width={135}
                        mt={0.75}
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          borderTop: `0.75px solid ${theme.colors['--color-neutral-theme-400']}`,
                          paddingTop: 0.5
                        }}
                      >
                        <IconArrowRight/>
                      </Box>
                    </Box>
                  </STCompanyItem>
                </STCompanyWrapped>
              </STCompany>
            )}

            {slide === 2 && (
              <STCompany>
                <STCompanyBanner>
                  <Box
                    width={170}
                    gap={1}
                    top={128}
                    left={62}
                    position="absolute"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>2021 - 2023</Typography>
                    <Typography
                      variant="sbutitle3"
                      color={theme.colors['--color-neutral-theme-400']}
                      textAlign="center"
                    >
                      We Love
                      UI/UX Design
                    </Typography>
                  </Box>
                  <img src={CompanyBanner3} alt="banner"/>
                </STCompanyBanner>
                <STCompanyWrapped>
                  <STCompanyItem height={360}>
                    <Box>
                      <Typography variant="body2">Leader UI/UX</Typography>
                      <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']} sx={{ margin: '8px 0 16px', textTransform: 'uppercase' }}>Dinovative</Typography>
                      <Typography variant="body2" lineHeight="22px">Building Blockchain Products:</Typography>
                      <ul>
                        <Typography component="li" variant="body2" lineHeight="22px">Play to Earn</Typography>
                        <Typography component="li" variant="body2" lineHeight="22px">Click to Earn</Typography>
                        <Typography component="li" variant="body2" lineHeight="22px">Turn Based - Auto check</Typography>
                        <Typography component="li" variant="body2" lineHeight="22px">VR - Metaverse</Typography>
                      </ul>
                      <Typography variant="body2" lineHeight="22px">Developing a system of affiliated businesses:</Typography>
                      <ul>
                        <Typography component="li" variant="body2" lineHeight="22px">Viettin Bank</Typography>
                        <Typography component="li" variant="body2" lineHeight="22px">Vietjet - Flying is right!</Typography>
                      </ul>
                    </Box>
                    <Box>
                      <Typography variant="meta3">Nov 2021 - <Typography variant="meta3" color={theme.colors['--color-primary-400']}>today. </Typography></Typography>
                      <Box
                        width={135}
                        mt={0.75}
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          borderTop: `0.75px solid ${theme.colors['--color-neutral-theme-400']}`,
                          paddingTop: 0.5
                        }}
                      >
                        <IconArrowRight/>
                      </Box>
                    </Box>
                  </STCompanyItem>
                </STCompanyWrapped>
              </STCompany>
            )}
          </>
        </CSSTransition>
      </SwitchTransition>

      <STThreeDots>
        <Box display="flex" flexDirection="column" gap={1.5}>
          <STCircle isActive={slide === 0} onClick={() => setSlide(0)}/>
          <STCircle isActive={slide === 1} onClick={() => setSlide(1)}/>
          <STCircle isActive={slide === 2} onClick={() => setSlide(2)}/>
        </Box>
        <IconBGArrowDown ref={nodeRef} onClick={handleSlide}/>
      </STThreeDots>
    </STContainer>
  )
}
