import { Box, styled } from '@mui/material'

export const STContainer = styled('div', {
  label: 'Container'
})(({ theme }) => `
  display: flex;
  gap: 50px;
`)

export const STFlexColumn = styled(Box, {
  label: 'FlexColumn'
})(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center
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
  }

  div:nth-of-type(2) {
    width: 100%;
    height: 1px;
    background: ${theme.colors['--color-black']};
    margin: 8px 0 4px; 
  }
`)
