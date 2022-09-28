import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      pageTitle: string;
      sectionTitle: string;
      title: string;
      text: string;
    };

    colors: {
      background: string;
      white: string;
      pink: string;
      skin: string;
      violet: string;
      skyBlue: string;
      green: string;
      warning: string;
    };

    common: {
      pageContainer: string;
      memoContainer: string;
      listContainer: string;
      ellipsis: string;
    };
  }
}
