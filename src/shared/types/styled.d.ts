import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      black: string;
    };
    fontFamily: {
      default: string;
      serif: string;
      monospace: string;
    };
    fontSize: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    fontWeight: {
      thin: number;
      normal: number;
      medium: number;
      semiBold: number;
      bold: number;
      black: number;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
