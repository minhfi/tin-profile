import { styled, Tab, Tabs } from '@mui/material'

export const STContainer = styled('div', {
  label: 'Container'
})(({ theme }) => `
  position: relative;
  height: 52px;
  border-radius: 62px;
  background-color: ${theme.colors['--color-neutral-theme-50']};
`)

export const STTabs = styled(Tabs, {
  label: 'Tabs'
})<{text: string}>(({ theme, text }) => `
  position: relative;
  width: fit-content;
  height: 52px;
  padding: 0 4px;

  & .MuiTabs-flexContainer {
    height: 52px;
  }

  & .MuiTabs-indicator {
    bottom: 4px;
    height: 44px;
    background-color: ${theme.colors['--color-neutral-theme-400']};
    color: ${theme.colors['--color-neutral-theme-50']};
    border-radius: 25px;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;

    &:before {
      content: "${text}";
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`)

export const STTab = styled(Tab, {
  label: 'Tab'
})(({ theme }) => `
    min-width: 120px;
    height: 52px;
    padding: ${theme.spacing(0, 2)};
    color: ${theme.colors['--color-neutral-theme-400']};
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    text-transform: unset;
    opacity: 1;
    flex-basis: unset;

  &.Mui-selected {
    color: ${theme.colors['--color-neutral-theme-50']};
    border-radius: 25px;
  }
`)
