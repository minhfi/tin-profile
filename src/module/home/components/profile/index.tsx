import { FC } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { IconArrowRightGray, IconCup, IconEducation, IconExperience, IconSkill } from 'src/icons'
import Education from 'src/images/education.png'

import { STContainer, STFlexColumn, STReadMore, STSkill } from './styled'

export const Profile: FC = () => {
  const theme = useTheme()

  return (
    <STContainer>
      <STFlexColumn>
        <STFlexColumn height={86} justifyContent="space-between">
          <IconCup/>
          <Typography variant="h2" color={theme.colors['--color-neutral-theme-400']}>THÀNH TÍCH</Typography>
        </STFlexColumn>
        <STFlexColumn mt={7} width={200}>
          <STFlexColumn>
            <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>Win</Typography>
            <Typography
              variant="body1"
              color={theme.colors['--color-neutral-theme-400']}
              sx={{
                textAlign: 'center',
                marginTop: 1
              }}
            >
              Chiến thắng hơn 100 cuộc thi Thiết kế tại DesignCrowd
            </Typography>
          </STFlexColumn>
          <STFlexColumn mt={4} gap={1}>
            <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>Project</Typography>
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
          <Typography variant="h2" color={theme.colors['--color-neutral-theme-400']}>KINH NGHIỆM</Typography>
        </STFlexColumn>
        <STFlexColumn mt={7} width={278}>
          <STFlexColumn gap={1}>
            <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>Junior</Typography>
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
              <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>Kiềm Nghĩa</Typography>
              <Typography
                variant="body1"
                color={theme.colors['--color-primary-400']}
              >
                Graphic Design
              </Typography>
            </Box>
          </STFlexColumn>
          <STFlexColumn mt={4} gap={1}>
            <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>Mid-Level</Typography>
            <Box display="flex" alignItems="center" gap={0.5}>
              <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>Mắt Bão</Typography>
              <Typography
                variant="body1"
                color={theme.colors['--color-primary-400']}
              >
                Collaborators UI
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>Việt Tiên Lab Group</Typography>
              <Typography
                variant="body1"
                color={theme.colors['--color-primary-400']}
              >
                UI/UX Design
              </Typography>
            </Box>
          </STFlexColumn>
          <STFlexColumn mt={4} gap={1}>
            <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>Senior</Typography>
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
            <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>Leader</Typography>
            <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>Smart Technology and Application</Typography>
            <Typography variant="body1" color={theme.colors['--color-neutral-theme-400']}>Dinovative</Typography>
          </STFlexColumn>
        </STFlexColumn>
      </STFlexColumn>

      <STFlexColumn>
        <STFlexColumn height={86} justifyContent="space-between">
          <IconEducation/>
          <Typography variant="h2" color={theme.colors['--color-neutral-theme-400']}>HỌC VẤN</Typography>
        </STFlexColumn>
        <STFlexColumn mt={7}>
          <img src={Education} alt="education"/>
        </STFlexColumn>
      </STFlexColumn>

      <STFlexColumn>
        <STFlexColumn height={86} justifyContent="space-between">
          <IconSkill/>
          <Typography variant="h2" color={theme.colors['--color-neutral-theme-400']}>KỸ NĂNG</Typography>
        </STFlexColumn>
        <STFlexColumn mt={7} gap={5}>
          <STSkill>
            <Box>
              <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>Figma</Typography>
              <Typography
                variant="body2"
                color={theme.colors['--color-neutral-theme-400']}
              >
                85%
              </Typography>
            </Box>
            <Box/>
            <Box
              width="85%"
              sx={{
                height: '1px',
                background: theme.colors['--color-primary-400']
              }}
            />
          </STSkill>
          <STSkill>
            <Box>
              <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>Adobe XD</Typography>
              <Typography
                variant="body2"
                color={theme.colors['--color-neutral-theme-400']}
              >
                70%
              </Typography>
            </Box>
            <Box/>
            <Box
              width="70%"
              sx={{
                height: '1px',
                background: theme.colors['--color-primary-400']
              }}
            />
          </STSkill>
          <STSkill>
            <Box>
              <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>Sketch</Typography>
              <Typography
                variant="body2"
                color={theme.colors['--color-neutral-theme-400']}
              >
                70%
              </Typography>
            </Box>
            <Box/>
            <Box
              width="70%"
              sx={{
                height: '1px',
                background: theme.colors['--color-primary-400']
              }}
            />
          </STSkill>
          <STSkill>
            <Box>
              <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>Photoshop</Typography>
              <Typography
                variant="body2"
                color={theme.colors['--color-neutral-theme-400']}
              >
                80%
              </Typography>
            </Box>
            <Box/>
            <Box
              width="80%"
              sx={{
                height: '1px',
                background: theme.colors['--color-primary-400']
              }}
            />
          </STSkill>
          <STSkill>
            <Box>
              <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>iLLustrator</Typography>
              <Typography
                variant="body2"
                color={theme.colors['--color-neutral-theme-400']}
              >
                95%
              </Typography>
            </Box>
            <Box/>
            <Box
              width="95%"
              sx={{
                height: '1px',
                background: theme.colors['--color-primary-400']
              }}
            />
          </STSkill>
          <STSkill>
            <Box>
              <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>Blender</Typography>
              <Typography
                variant="body2"
                color={theme.colors['--color-neutral-theme-400']}
              >
                50%
              </Typography>
            </Box>
            <Box/>
            <Box
              width="50%"
              sx={{
                height: '1px',
                background: theme.colors['--color-primary-400']
              }}
            />
          </STSkill>
          <STSkill>
            <Box>
              <Typography variant="h4" color={theme.colors['--color-neutral-theme-400']}>After Effect</Typography>
              <Typography
                variant="body2"
                color={theme.colors['--color-neutral-theme-400']}
              >
                60%
              </Typography>
            </Box>
            <Box/>
            <Box
              width="60%"
              sx={{
                height: '1px',
                background: theme.colors['--color-primary-400']
              }}
            />
          </STSkill>
        </STFlexColumn>
      </STFlexColumn>
    </STContainer>
  )
}
