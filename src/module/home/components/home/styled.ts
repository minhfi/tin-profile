import { styled } from '@mui/material'
import BgBlock2 from 'src/images/bg-block2.png'
import BgBlock4 from 'src/images/bg-block4.png'

export const STContainer = styled('div', {
  label: 'Container'
})(({ theme }) => `
  position: relative;
  width: 100%;
  height: 100%;
`)

export const STBlock1 = styled('div', {
  label: 'Block1'
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
`)

export const STBlock2 = styled('div', {
  label: 'Block2'
})(({ theme }) => `
  position: relative;
  z-index: 1;
  height: 1312px;
  margin-top: 108px;
  padding: 237px 0 208px;
  background: url(${BgBlock2});

  display: flex;
  flex-direction: column;
  align-items: center;
  `)

export const STBlock3 = styled('div', {
  label: 'Block3'
})(({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 27px;
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

export const STBlock4 = styled('div', {
  label: 'Block4'
})(({ theme }) => `
  position: relative;
  z-index: 1;
  height: 1377px;
  padding: 317px 0 283px;
  background: url(${BgBlock4});

  display: flex;
  flex-direction: column;
  align-items: center;
  `)

export const STBlock5 = styled('div', {
  label: 'Block5'
})(({ theme }) => `
  position: relative;
  margin: 45px 0 24px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  `)

export const STProfile = styled('div', {
  label: 'Profile'
})(({ theme }) => `
    display: flex;
    gap: 50px
`)
