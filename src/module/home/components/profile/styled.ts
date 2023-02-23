import { Box, styled } from '@mui/material'

export const STContainer = styled('div', {
  label: 'Container'
})(({ theme }) => `
  position: relative;
  margin: 45px 0 24px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  `)

export const STDescription = styled('div', {
  label: 'Description'
})(({ theme }) => `
  width: 926px;
  margin-top: ${theme.spacing(10)};
  
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};

  p {
    text-align: center;
    color:  ${theme.colors['--color-neutral-theme-400']};
  }
`)

export const STProfile = styled('div', {
  label: 'Profile'
})(({ theme }) => `
  display: flex;
  gap: 50px;
`)

export const STFlexColumn = styled(Box, {
  label: 'FlexColumn'
})(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;

  h2, h4 {
    color: ${theme.colors['--color-neutral-theme-400']}
  }
`)

export const STReadMore = styled(Box, {
  label: 'ReadMore'
})(({ theme }) => `
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-top: 3px
  }
`)

export const STSkill = styled(Box, {
  label: 'Skill'
})(({ theme }) => `
  width: 199px;
  
  div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: ${theme.colors['--color-neutral-theme-400']};
    }
  }

  div:nth-of-type(2) {
    width: 100%;
    height: 1px;
    background: ${theme.colors['--color-black']};
    margin: 8px 0 4px; 
  }

  div:nth-of-type(3) {
    height: 1px;
    background: ${theme.colors['--color-primary-400']};
  }
`)
