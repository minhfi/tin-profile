import { styled } from '@mui/material'

export const STContainer = styled('div', {
  label: 'Container'
})(({ theme }) => `
  display: flex;
  gap: 80px;
  margin: 110px 0 128px;

  @media (max-width: 769px) {
    flex-wrap: wrap;
    margin: 40px 0 40px;
  }
`)

export const STSkillItem = styled('div', {
  label: 'SkillItem'
})(({ theme }) => `
  min-width: 79px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  h4 {
    color: ${theme.colors['--color-neutral-theme-400']}
  }
`)
