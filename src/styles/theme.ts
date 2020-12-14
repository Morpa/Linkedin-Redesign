export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans- serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },

  colors: {
    primary: 'linear-gradient(180deg, #0077B5 0%, #0E6795 100%)',
    blue: '#0275B1',
    black: '#181818',
    white: '#FFFFFF',
    bg: '#F7F9FB',
    green: '#02B033',
    gray: '#CECECE',
    grayDark: '#747474',
    orange: 'linear-gradient(215.49deg, #FFB75E 5.4%, #ED8F03 93.45%)'
  },

  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  }
} as const
