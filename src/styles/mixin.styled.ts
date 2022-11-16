export const boxShadow = (_boxShadow: string) => {
  return `
    -webkit-box-shadow: ${_boxShadow};
    -moz-box-shadow: ${_boxShadow};
    -ms-box-shadow: ${_boxShadow};
    -o-box-shadow: ${_boxShadow};
    box-shadow: ${_boxShadow};
  `
}

export const elevation1 = () => boxShadow('0px 16px 48px -12px rgba(37, 38, 46, 0.1)')
