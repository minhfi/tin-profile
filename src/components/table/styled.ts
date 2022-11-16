import { styled } from '@mui/material'

export const STContainer = styled('div', {
  label: 'Container'
})(({ theme }) => `
  width: 100%;
  height: 100%;

  & .MuiPaper-root.MuiPaper-elevation {
    box-shadow: none;
  }

  table {
    thead tr th {
      height: 72px;
      color: ${theme.colors['--color-neutral-theme-50']};
      background-color: ${theme.colors['--color-neutral-theme-700']};
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;

      span {
        &:active, :hover {
          color: ${theme.colors['--color-neutral-theme-50']};
        }

        svg {
          path {
            fill: ${theme.colors['--color-neutral-theme-50']}
          }
        }
      }
    }

    tbody tr td {
      height: 72px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: ${theme.colors['--color-neutral-theme-400']};
      border-bottom: 1px solid ${theme.colors['--color-neutral-theme-200']};
      padding: ${theme.spacing(0, 2)};
    }
  }

  tfoot {
    display: none !important;
  }

  nav {
    margin-top: ${theme.spacing(2.5)};

    display: flex;
    justify-content: center;

    svg {
      width: 24px;
      height: 24px;
    }

    ul li button {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      border-radius: 12px;
      color: ${theme.colors['--color-neutral-theme-700']};

      &:hover {
        background-color: ${theme.colors['--color-primary-300']};
      }

      &:focus {
        background-color: ${theme.colors['--color-primary-300']} ;
      }
    
      &:active {
        background-color: ${theme.colors['--color-primary-400']} ;
      }
    }

    ul li button.Mui-selected {
      font-weight: 700;
      background-color: ${theme.colors['--color-primary-400']};

      &:hover {
        background-color: ${theme.colors['--color-primary-300']};
      }

      span {
        outline: none;
      }
    }
  }
`)
