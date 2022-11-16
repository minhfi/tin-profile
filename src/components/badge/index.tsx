import { ComponentProps, FC } from 'react'
import { Badge as MuiBadge, useTheme } from '@mui/material'
import { STBadge } from './styled'

type TBadgePropsDefault = ComponentProps<typeof MuiBadge>

export interface IBadgeProps extends TBadgePropsDefault {
  type?: keyof ISize
  content?: number | string
  background?: string
  colorText?: string
}

export interface ISize {
  medium?: {
    minWidth?: number
    height?: number
    fontSize?: number
    top?: number
    right?: number
  }
  small?: {
    minWidth?: number
    height?: number
    fontSize?: number
    top?: number
    right?: number
  }
}

const size: ISize = {
  medium: {
    minWidth: 32,
    height: 32,
    fontSize: 14,
    right: 8
  },
  small: {
    minWidth: 14,
    height: 14,
    fontSize: 9,
    top: 2,
    right: 4
  }
}

export const Badge: FC<IBadgeProps> = ({ type, content, background, colorText, ...props }) => {
  const theme = useTheme()

  return (
    <STBadge
      max={999}
      badgeContent={content}
      sx={{
        '& .MuiBadge-badge': {
          background: background || theme.colors['--color-negative-500'],
          color: colorText || theme.colors['--color-neutral-theme-50'],
          ...size[type || 'medium']
        }
      }}
    >
      {props.children}
    </STBadge>
  )
}

Badge.defaultProps = {
  type: 'medium',
  content: ''
}
