import { reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    ${reset}
    
    *, *::before, *::after {
        box-sizing: border-box;
    }
    
    body {
        line-height: 1;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        text-size-adjust: none;
        vertical-align: baseline;
        height: 100vh;
        width: 100vw;
        background: ${(props) => props.theme.colors.background}
    }
    
    #root{
        height: 100%;
        overflow: auto;
    }
    
    a {
        text-decoration: none;
    }
    
    input:focus, textarea:focus { outline: none }
`;
