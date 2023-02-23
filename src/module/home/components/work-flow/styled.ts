import { styled } from '@mui/material'
import BgBlock6 from 'src/images/bg-block6.png'
import BgBlock61920 from 'src/images/bg-block6-1920.png'

export const STContainer = styled('div', {
  label: 'Container'
})(({ theme }) => `
    position: relative;
    z-index: 1;
    height: 2262px;
    padding: 261px 0 302px;
    background: url(${BgBlock61920});
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 1441px) {
      background: url(${BgBlock6});
    }

    display: flex;
    flex-direction: column;
    align-items: center;
`)

export const STWorkFlow = styled('div', {
  label: 'WorkFlow'
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
