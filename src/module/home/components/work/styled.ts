import { styled } from '@mui/material'

export const STContainer = styled('div', {
  label: 'Container'
})(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 27px;
`)

export const STProject = styled('div', {
  label: 'Project'
})(({ theme }) => `
  width: 697px;
  display: flex;
  flex-direction: column;
`)

export const STInfoLeft = styled('div', {
  label: 'InfoLeft'
})(({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: end;

    h4 {
      margin-top: ${theme.spacing(1)};
      color: ${theme.colors['--color-primary-400']};
      text-transform: uppercase;
      height: 36px;
      border-bottom: 0.75px solid ${theme.colors['--color-black']}
    }

    >div {
      cursor: pointer
    }

    div > p {
      line-height: 30px;
      color: ${theme.colors['--color-primary-400']}
    }
`)

export const STInfoRight = styled('div', {
  label: 'InfoRight'
})(({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: start;

    h4 {
      margin-top: ${theme.spacing(1)};
      color: ${theme.colors['--color-primary-400']};
      text-transform: uppercase;
      height: 36px;
      border-bottom: 0.75px solid ${theme.colors['--color-black']}
    }

    >div {
      cursor: pointer
    }

    div > p {
      line-height: 30px;
      color: ${theme.colors['--color-primary-400']}
    }
`)

export const STSmartCarGo = styled('div', {
  label: 'SmartCarGo'
})(({ theme }) => `
    display: flex;
    align-items: center;
    gap: 40px;
    align-self: end;
    margin-top: 76px;
`)

export const STMatBao = styled('div', {
  label: 'MatBao'
})(({ theme }) => `
    display: flex;
    align-items: center;
    gap: 20px;
`)

export const STSportE = styled('div', {
  label: 'SportE'
})(({ theme }) => `
    display: flex;
    align-items: center;
    gap: 40px;

    position: absolute;
    right: -48px;
    top: 261px;
`)

export const STHellven = styled('div', {
  label: 'Hellven'
})(({ theme }) => `
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 500px;
    margin-bottom: 80px;
`)
