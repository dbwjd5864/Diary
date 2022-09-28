import { DefaultTheme } from 'styled-components';

// 폰트 사이즈
const pixelToRem = (size: number) => `${size / 16}rem`;
const fontSizes = {
  pageTitle: pixelToRem(60),
  sectionTitle: pixelToRem(22),
  title: pixelToRem(19),
  text: pixelToRem(15),
};

// 주로 사용되는 컬러
const colors = {
  background: '#C9BCC8',
  white: '#f8f8f8',
  pink: '#E4C1CB',
  skin: '#F4DBCF',
  violet: '#B5B3C1',
  skyBlue: '#CADEE2',
  green: '#ABC9CD',
  warning: '#da7575',
};

const common = {
  pageContainer: `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100%;
  `,
  memoContainer: `
    border: 2px solid ${colors.violet};
    background-color: ${colors.white};
    height: 25rem;
    border-radius: 3px;
  `,
  listContainer: `
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  `,
  ellipsis: `
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  `,
};

const theme: DefaultTheme = {
  fontSizes,
  colors,
  common,
};

export default theme;
