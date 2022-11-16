export const Fonts = [
  'Inter',
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
    fontWeight: 900,
    fontSize: 96,
    lineHeight: '110px',
    letterSpacing: '-0.02em'
  },
  h2: {
    fontWeight: 700,
    fontSize: 64,
    lineHeight: '77px',
    letterSpacing: '-0.02em'
  },
  h3: {
    fontWeight: 700,
    fontSize: 40,
    lineHeight: '48px',
    letterSpacing: '-0.02em'
  },
  h4: {
    fontWeight: 700,
    fontSize: 32,
    lineHeight: '39px',
    letterSpacing: '-0.02em'
  },
  h5: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: '29px',
    letterSpacing: '-0.02em'
  },
  'subtitle-regular': {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '32px'
  },
  'subtitle-bold': {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: '32px'
  },
  'subtitle--medium': {
    fontWeight: 500,
    fontSize: 18,
    lineHeight: '32px'
  },
  'body1-regular': {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '28px'
  },
  'body1-medium': {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '28px'
  },
  'body1-bold': {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '28px'
  },
  'body2-regular': {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '24px'
  },
  'body2-medium': {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '24px'
  },
  'body2-bold': {
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '24px'
  },
  'meta-regular': {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '20px'
  },
  'meta-medium': {
    fontWeight: 500,
    fontSize: 12,
    lineHeight: '20px'
  },
  'meta-bold': {
    fontWeight: 700,
    fontSize: 12,
    lineHeight: '20px'
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    'subtitle-regular': React.CSSProperties
    'subtitle-bold': React.CSSProperties
    'subtitle-medium': React.CSSProperties
    'body1-regular': React.CSSProperties
    'body1-medium': React.CSSProperties
    'body1-bold': React.CSSProperties
    'body2-regular': React.CSSProperties
    'body2-medium': React.CSSProperties
    'body2-bold': React.CSSProperties
    'meta-regular': React.CSSProperties
    'meta-medium': React.CSSProperties
    'meta-bold': React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    ['subtitle-regular']?: React.CSSProperties
    ['subtitle-bold']?: React.CSSProperties
    ['subtitle-medium']?: React.CSSProperties
    ['body1-regular']?: React.CSSProperties
    ['body1-medium']?: React.CSSProperties
    ['body1-bold']?: React.CSSProperties
    ['body2-regular']?: React.CSSProperties
    'body2-medium': React.CSSProperties
    ['body2-bold']?: React.CSSProperties
    ['meta-regular']?: React.CSSProperties
    ['meta-medium']?: React.CSSProperties
    ['meta-bold']?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    'subtitle-regular': true
    'subtitle-bold': true
    'subtitle-medium': true
    'body1-regular': true
    'body1-medium': true
    'body1-bold': true
    'body2-regular': true
    'body2-medium': true
    'body2-bold': true
    'meta-regular': true
    'meta-medium': true
    'meta-bold': true
  }
}
