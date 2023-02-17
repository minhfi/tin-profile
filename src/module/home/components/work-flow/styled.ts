import { styled } from '@mui/material'

export const STContainer = styled('div', {
  label: 'Container'
})(({ theme }) => `
  position: relative;
  width: 878px;
  margin-top: 121px;

  display: flex;
  flex-direction: column;
  align-items: center;
`)

export const STInfo = styled('div', {
  label: 'Info',
  shouldForwardProp: prop => !['textAlign', 'alignItems'].includes(prop as string)
})<{textAlign?: string; alignItems?: string}>(({ theme, textAlign, alignItems }) => `
  width: 192px;
  display: flex;
  flex-direction: column;
  align-items: ${alignItems || 'end'};
  gap: ${theme.spacing(1)};

  p {
    text-align: ${textAlign || 'right'};
    line-height: 24px;
  }
`)
