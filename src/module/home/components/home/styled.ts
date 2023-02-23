import { styled } from '@mui/material'

export const STContainer = styled('div', {
  label: 'Container'
})(({ theme }) => `
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
`)

export const STHeader = styled('div', {
  label: 'Header'
})(({ theme }) => `
  position: relative;
  margin: 64px 0 0 138px;

  display: flex;
  flex-direction: column;
  align-items: start;

  img:nth-of-type(2) {
    margin: 48px 0 42px 0
  }

  img:nth-of-type(4) {
    position: absolute;
    right: 0
  }

  @media (max-width: 769px) {
    img:nth-of-type(4) {
      display: none
    }
  }
`)
