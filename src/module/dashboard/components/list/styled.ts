import { styled } from '@mui/material'

export const STContainer = styled('div', {
  label: 'Container'
})(({ theme }) => `
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-height: 899px) {
    height: unset;
    margin: ${theme.spacing(4, 0)}
  }
`)

export const STVideo = styled('div', {
  shouldForwardProp: prop => prop !== 'isShow',
  label: 'Video'
})(() => `
  position: relative;
  width: 335px;
  height: 595px;
  }
`)

export const STIconWrap = styled('div', { label: 'IconWrap' })(({ theme }) => `
  width: 335px;
  height: 88px;
  padding: ${theme.spacing(2.5, 5)};
  margin-top: ${theme.spacing(3)};
  display: flex;
  align-items:center;
  justify-content: space-around;
  border-radius: 24px;
  background-color: ${theme.colors['--color-neutral-theme-50']} !important;
`)

export const STLinkedin = styled('div', { label: 'Linkedin' })(({ theme }) => `
  position: absolute;
  top: 72px;
  right: 20px;
  cursor: pointer;
`)
