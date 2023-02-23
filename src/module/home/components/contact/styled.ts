import { styled } from '@mui/material'

export const STContainer = styled('div', {
  label: 'Container'
})(({ theme }) => `
  position: relative;
  padding: 21px 0 26px;

  display: flex;
  flex-direction: column;
  align-items: center;
`)

export const STSocialNetwork = styled('div', {
  label: 'SocialNetwork'
})(({ theme }) => `
  display: flex;
  align-items: center;
  gap: ${theme.spacing(5)};
`)

export const STNote = styled('div', {
  label: 'Note'
})(({ theme }) => `
  margin: ${theme.spacing(9, 0, 4, 0)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing(1)};

  p {
    color: ${theme.colors['--color-neutral-theme-300']};
  }

  div {
    width: 58px;
    height: 1px;
    background: ${theme.colors['--color-black']};
  }
`)
