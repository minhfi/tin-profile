import { styled } from '@mui/material/styles'
import { Badge } from '@mui/material'
import { IBadgeProps } from './index'

export const STBadge = styled(Badge, { label: 'Badge' })<IBadgeProps>(`
  font-family: 'Inter';
  font-style: normal;
  cursor: pointer;

  .MuiBadge-badge {
    min-height: unset;
    min-width: unset;
    height: auto;
    width: auto;
    border-radius: 99px;
  }
`)
