import { Box, styled } from '@mui/material'
import BgBlock4 from 'src/images/bg-block4.png'
import BgBlock41920 from 'src/images/bg-block4-1920.png'

export const STContainer = styled('div', {
  label: 'Container'
})(({ theme }) => `
  position: relative;
  z-index: 1;
  height: 1377px;
  padding: 317px 0 283px;
  background: url(${BgBlock41920});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1441px) {
    background: url(${BgBlock4});
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  `)

export const STSection = styled('div', {
  label: 'Section'
})(({ theme }) => `
  position: relative;
  display: flex;
  align-items: center;
  gap: ${theme.spacing(2.5)};
  margin-top: 111px;
`)

export const STCompany = styled(Box, {
  label: 'Company'
})(({ theme }) => `
  display: flex;
  gap: ${theme.spacing(6.5)}
`)

export const STCompanyBanner = styled('div', {
  label: 'CompanyBanner'
})(({ theme }) => `
    position: relative;
    width: 294px;
    height: 592px;

    div {
      width: 170px;
      position: absolute;
      top: 128px;
      left: 62px;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${theme.spacing(1)};

      p {
        color: ${theme.colors['--color-neutral-theme-400']};
      }

      span {
        color: ${theme.colors['--color-neutral-theme-400']};
        text-align: center;
      }
    }
`)

export const STCompanyWrapped = styled(Box, {
  label: 'CompanyWrapped'
})(({ theme }) => `
  width: 607px;
  display: flex;
  gap: ${theme.spacing(2.5)};
  flex-wrap: wrap;
`)

export const STCompanyItem = styled(Box, {
  label: 'CompanyItem'
})<{width?: number; height?: number}>(({ theme, width, height }) => `
  width: ${width || 286}px;
  height: ${height || 279}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    padding-inline-start: 23px;
    margin: 0 24px 0 0;

    li::marker {
      font-size: 10px;
    }
  }

  div:nth-of-type(1) {
    h4 {
      margin: ${theme.spacing(1, 0, 2)};
      color: ${theme.colors['--color-neutral-theme-400']};
      text-transform: uppercase
    }
  }

  div:nth-of-type(2) {
    div {
      width: 135px;
      margin-top: ${theme.spacing(0.75)};
      padding-top: ${theme.spacing(0.5)};
      border-top: 0.75px solid ${theme.colors['--color-neutral-theme-400']};
      display: flex;
      justify-content: flex-end;
    }
  }
`)

export const STThreeDots = styled(Box, {
  label: 'ThreeDots'
})(({ theme }) => `
  height: 137px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`)

export const STCircle = styled(Box, {
  label: 'Circle',
  shouldForwardProp: prop => prop !== 'isActive'
})<{isActive?: boolean}>(({ theme, isActive }) => `
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: background 1.5s ease;
  background: ${isActive ? theme.colors['--color-neutral-theme-400'] : theme.colors['--color-neutral-theme-200']}
`)
