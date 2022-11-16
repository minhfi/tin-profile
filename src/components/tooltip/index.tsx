import { FC, ReactElement } from 'react'
import { Tooltip as MuiTooltip, TooltipProps, useTheme } from '@mui/material'

export interface ITooltip {
  title: string
  color?: string
  background?: string
  children: ReactElement
}

export const Tooltip: FC<ITooltip & TooltipProps> = ({ title, background, color, children, ...props }) => {
  const theme = useTheme()

  return (
    <MuiTooltip
      arrow
      disableInteractive
      title={title}
      placement="top"
      PopperProps={{
        sx: {
          '& .MuiTooltip-tooltip': {
            background: background || theme.colors['--color-black'],
            padding: theme.spacing(1.5, 1),
            color,
            maxWidth: 200,
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '20px'
          },
          '& .MuiTooltip-arrow': { color: background || theme.colors['--color-black'] }
        }
      }}
      {...props}
    >
      {children}
    </MuiTooltip>
  )
}
