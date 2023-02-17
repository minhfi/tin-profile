import { Box, styled } from '@mui/material'

export const STContainer = styled('div', {
  label: 'Container'
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
