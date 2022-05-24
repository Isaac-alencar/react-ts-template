import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#6F73D2',
    secondary: '#F7F7F7',
    accent: '#7DDE92',
    black: '#070707',
  },
  fontFamily: {
    default: 'sans-serif',
    serif: 'serif',
    monospace: 'monospace',
  },
  fontSize: {
    small: '1.2rem',
    medium: '1.6rem',
    large: '2.0rem',
    xlarge: '2.4rem',
    xxlarge: '2.8rem',
  },
  fontWeight: {
    thin: 100,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    black: 900,
  },
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    xxl: '3rem', // 48px
  },
};
