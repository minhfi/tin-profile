import { FC } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { IconArrowRightGray, IconCup, IconEducation, IconExperience, IconSkill } from 'src/icons'
import { Button } from 'src/components/button'
import Education from 'src/images/education.png'

import { STContainer, STDescription, STFlexColumn, STProfile, STReadMore, STSkill } from './styled'
import { Title } from '../title'

interface IProfile {
  handleScroll: (val: number) => void
}

export const Profile: FC<IProfile> = ({ handleScroll }) => {
  const theme = useTheme()

  return (
    <STContainer>
      <Title number="04" title="MY PROFILE"/>
      <STDescription>
        <Typography variant="body1">
          Design, to me, is more than just making things look nice. It is a powerful tool for communication and has a great influence on the success of any project. It helps to deliver high-quality products and services that lead to a better user experience and customer satisfaction.
        </Typography>
        <Typography variant="body1">
          I'm a UI/UX Designer! I have more than 4 years of experience in user experience design for cross-platform applications, websites, and software. I am fluent in the leading software for design at the present time. In addition, my experience is not only in research and design but also from a business perspective. As a result, I am always motivated by the passion and core values of each business product associated with customers to create modern and useful user interfaces in order to achieve the end goal.
        </Typography>
      </STDescription>
      <Button sx={{ margin: '39px 0 79px' }} onClick={() => handleScroll(8500)}>Hire me</Button>
      <STProfile>
        <STFlexColumn>
          <STFlexColumn height={86} justifyContent="space-between">
            <IconCup/>
            <Typography variant="h2">ACHIEVEMENTS</Typography>
          </STFlexColumn>
          <STFlexColumn mt={7} width={200}>
            <STFlexColumn>
              <Typography variant="h4">Win</Typography>
              <Typography
                variant="body1"
                color={theme.colors['--color-neutral-theme-400']}
                sx={{
                  textAlign: 'center',
                  marginTop: 1
                }}
              >
                At DesignCrowd, I've Won Over 100 Design Contests.
              </Typography>
            </STFlexColumn>
            <STFlexColumn mt={4} gap={1}>
              <Typography variant="h4">Project</Typography>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography
                  variant="body1"
                  color={theme.colors['--color-primary-400']}
                >
                  CRM
                </Typography>
                <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>Software</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography
                  variant="body1"
                  color={theme.colors['--color-primary-400']}
                >
                  ERP
                </Typography>
                <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>Software</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>App</Typography>
                <Typography
                  variant="body1"
                  color={theme.colors['--color-primary-400']}
                >
                  SmartCargo
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>App</Typography>
                <Typography
                  variant="body1"
                  color={theme.colors['--color-primary-400']}
                >
                  Viet Tien Lab Group
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>App</Typography>
                <Typography
                  variant="body1"
                  color={theme.colors['--color-primary-400']}
                >
                  ZeChai
                </Typography>
              </Box>
            </STFlexColumn>
            <STReadMore mt={3} gap={0.5}>
              <Typography variant="body1" color={theme.colors['--color-neutral-theme-300']}>Read more</Typography>
              <IconArrowRightGray/>
            </STReadMore>
          </STFlexColumn>
        </STFlexColumn>

        <STFlexColumn>
          <STFlexColumn height={86} justifyContent="space-between">
            <Box height={40} display="flex" alignItems="flex-end">
              <IconExperience/>
            </Box>
            <Typography variant="h2">EXPERIENCE</Typography>
          </STFlexColumn>
          <STFlexColumn mt={7} width={278}>
            <STFlexColumn gap={1}>
              <Typography variant="h4">Junior</Typography>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>ARR An Viet Song Hong</Typography>
                <Typography
                  variant="body1"
                  color={theme.colors['--color-primary-400']}
                >
                  UI Design
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>Kiem Nghia</Typography>
                <Typography
                  variant="body1"
                  color={theme.colors['--color-primary-400']}
                >
                  Graphic Design
                </Typography>
              </Box>
            </STFlexColumn>
            <STFlexColumn mt={4} gap={1}>
              <Typography variant="h4">Mid-Level</Typography>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>Mat Bao</Typography>
                <Typography
                  variant="body1"
                  color={theme.colors['--color-primary-400']}
                >
                  Collaborators UI
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>Viet Tien Lab Group</Typography>
                <Typography
                  variant="body1"
                  color={theme.colors['--color-primary-400']}
                >
                  UI/UX Design
                </Typography>
              </Box>
            </STFlexColumn>
            <STFlexColumn mt={4} gap={1}>
              <Typography variant="h4">Senior</Typography>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>GMarks Việt Nam</Typography>
                <Typography
                  variant="body1"
                  color={theme.colors['--color-primary-400']}
                >
                  UI/UX Design
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>Propzy</Typography>
                <Typography
                  variant="body1"
                  color={theme.colors['--color-primary-400']}
                >
                  UI/UX Design
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>OCB</Typography>
                <Typography
                  variant="body1"
                  color={theme.colors['--color-primary-400']}
                >
                  Collaborators
                </Typography>
              </Box>
            </STFlexColumn>
            <STFlexColumn mt={4} gap={1}>
              <Typography variant="h4">Leader</Typography>
              <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>Smart Technology and Application</Typography>
              <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>Dinovative</Typography>
            </STFlexColumn>
          </STFlexColumn>
        </STFlexColumn>

        <STFlexColumn>
          <STFlexColumn height={86} justifyContent="space-between">
            <IconEducation/>
            <Typography variant="h2">EDUCATION</Typography>
          </STFlexColumn>
          <STFlexColumn mt={7}>
            <img src={Education} alt="education"/>
          </STFlexColumn>
        </STFlexColumn>

        <STFlexColumn>
          <STFlexColumn height={86} justifyContent="space-between">
            <IconSkill/>
            <Typography variant="h2">SKILL</Typography>
          </STFlexColumn>
          <STFlexColumn mt={7} gap={5}>
            <STSkill>
              <Box>
                <Typography variant="h4">Figma</Typography>
                <Typography variant="body2">
                  85%
                </Typography>
              </Box>
              <Box/>
              <Box width="85%"/>
            </STSkill>
            <STSkill>
              <Box>
                <Typography variant="h4">Adobe XD</Typography>
                <Typography variant="body2">
                  70%
                </Typography>
              </Box>
              <Box/>
              <Box width="70%"/>
            </STSkill>
            <STSkill>
              <Box>
                <Typography variant="h4">Sketch</Typography>
                <Typography variant="body2">
                  70%
                </Typography>
              </Box>
              <Box/>
              <Box width="70%"/>
            </STSkill>
            <STSkill>
              <Box>
                <Typography variant="h4">Photoshop</Typography>
                <Typography variant="body2">
                  80%
                </Typography>
              </Box>
              <Box/>
              <Box width="80%"/>
            </STSkill>
            <STSkill>
              <Box>
                <Typography variant="h4">iLLustrator</Typography>
                <Typography variant="body2">
                  95%
                </Typography>
              </Box>
              <Box/>
              <Box width="95%"/>
            </STSkill>
            <STSkill>
              <Box>
                <Typography variant="h4">Blender</Typography>
                <Typography variant="body2">
                  50%
                </Typography>
              </Box>
              <Box/>
              <Box width="50%"/>
            </STSkill>
            <STSkill>
              <Box>
                <Typography variant="h4">After Effect</Typography>
                <Typography variant="body2">
                  60%
                </Typography>
              </Box>
              <Box/>
              <Box width="60%"/>
            </STSkill>
          </STFlexColumn>
        </STFlexColumn>
      </STProfile>
    </STContainer>
  )
}
