export const Fonts = [
  'Montserrat',
  '-apple-system',
  'BlinkMacSystemFont',
  '\'Segoe UI\'',
  '\'Roboto\'',
  '\'Oxygen\'',
  '\'Ubuntu\'',
  '\'Cantarell\'',
  '\'Fira Sans\'',
  '\'Droid Sans\'',
  '\'Helvetica Neue\'',
  'sans-serif'
].join(',')

export const Typography = {
  fontFamily: Fonts,
  h1: {
    fontWeight: 700,
    fontSize: 42,
    lineHeight: '51px'
  },
  h2: {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: '22px'
  },
  h3: {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '26px'
  },
  h4: {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '20px'
  },
  h5: {
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '20px'
  },
  h6: {
    fontWeight: 700,
    fontSize: 12,
    lineHeight: '15px'
  },
  sbutitle1: {
    fontWeight: 500,
    fontSize: 24,
    lineHeight: '29px'
  },
  sbutitle2: {
    fontWeight: 500,
    fontSize: 18,
    lineHeight: '21px'
  },
  body1: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '26px'
  },
  body2: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '17px'
  },
  body3: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '17px'
  },
  meta1: {
    fontWeight: 300,
    fontSize: 16,
    lineHeight: '20px'
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    'sbutitle1': React.CSSProperties
    'sbutitle2': React.CSSProperties
    'body1': React.CSSProperties
    'body2': React.CSSProperties
    'body3': React.CSSProperties
    'meta1': React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    ['sbutitle1']?: React.CSSProperties
    ['sbutitle2']?: React.CSSProperties
    ['body1']?: React.CSSProperties
    ['body2']?: React.CSSProperties
    ['body3']?: React.CSSProperties
    ['meta1']?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    'sbutitle1': true
    'sbutitle2': true
    'body1': true
    'body2': true
    'body3': true
    'meta1': true
  }
}
