import { styled } from '@mui/material'

export const STContainer = styled('div', {
  label: 'Container'
})(({ theme }) => `
  width: 27px;
  position: fixed;
  top: 50%; 
  right: 58px; 
  transform:translate(-50%, -50%); 
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing(2)}
`)

export const STScrollTop = styled('div', {
  label: 'ScrollTop',
  shouldForwardProp: prop => prop !== 'isShow'
})<{isShow: boolean}>(({ theme, isShow }) => `
  display: ${isShow ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  height: ${isShow ? '31px' : 0};
  cursor: pointer;
`)

export const STCircle = styled('div', {
  label: 'Circle'
})(({ theme }) => `
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${theme.colors['--color-neutral-theme-200']}
`)

export const STDivider = styled('div', {
  label: 'Divider'
})(({ theme }) => `
  width: 10px;
  height: 1px;
  background: ${theme.colors['--color-neutral-theme-200']}
`)

export const STSection = styled('div', {
  label: 'Section'
})(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing(0.5)}
`)

export const STSectionItem = styled('div', {
  label: 'SectionItem',
  shouldForwardProp: prop => prop !== 'isActive'
})<{isActive?: boolean}>(({ theme, isActive }) => `
  color: ${isActive ? theme.colors['--color-neutral-theme-400'] : theme.colors['--color-neutral-theme-300']};
  transition: all 0.75s ease;

  span {
    cursor: pointer;
    font-weight: ${isActive ? '700' : '400'};
    font-size: ${isActive ? '14px' : '12px'};
    line-height: ${isActive ? '17px' : '15px'};
    transition: all 0.75s ease;
  }
`)

export const STLanguage = styled('div', {
  label: 'Language'
})(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing(0.5)}
`)

export const STLanguageItem = styled('div', {
  label: 'LanguageItem',
  shouldForwardProp: prop => prop !== 'isActive'
})<{isActive?: boolean}>(({ theme, isActive }) => `
  color: ${isActive ? theme.colors['--color-primary-400'] : theme.colors['--color-neutral-theme-300']};
  transition: all 0.5s ease;

  span {
    cursor: pointer;
    font-weight: ${isActive ? '700' : '400'};
    font-size: ${isActive ? '14px' : '12px'};
    line-height: ${isActive ? '17px' : '15px'};
    transition: all 0.5s ease;
  }
`)
