import { styled } from '@mui/material'
import BgBlock2 from 'src/images/bg-block2.png'

export const STContainer = styled('div', {
  label: 'Container'
})(({ theme }) => `
  position: relative;
  z-index: 1;
  height: 1422px;
  margin-top: 108px;
  padding: 237px 0 208px;
  background: url(${BgBlock2});

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1441px) {
    background-position: center;
  }

  @media (max-width: 769px) {
    padding: 137px 0 108px;
  }
`)

export const STScroll = styled('div', {
  label: 'Scroll'
})(({ theme }) => `
  position: absolute;
  top:100px; 
  left:50%; 
  transform:translate(-50%, -50%); 
  z-index: 10;
  cursor: pointer;
`)

export const STSkillWrapped = styled('div', {
  label: 'SkillWrapped'
})(({ theme }) => `
  display: flex;
  gap: 80px;
  margin: 110px 0 128px;

  @media (max-width: 769px) {
    width: 320px;
    flex-wrap: wrap;
    margin: 40px 0 60px;
    justify-content: space-between;
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

export const STDescription = styled('div', {
  label: 'Description'
})(({ theme }) => `
  display: flex;
  gap: ${theme.spacing(2.5)};
  margin-bottom: ${theme.spacing(10)};

  h3, p {
    color: ${theme.colors['--color-neutral-theme-400']};
  }

  h3 {
    text-align: right;
    width: 237px;
  }

  p:nth-of-type(1) {
    text-align: right;
    width: 216px;
  }

  p:nth-of-type(2) {
    width: 216px;
  }
`)
