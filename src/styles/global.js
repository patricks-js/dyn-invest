import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* Presets */

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    :root {
        --color-default: ${({theme}) => theme.colors.text}; 
        --color-alt: ${({theme}) => theme.colors.textAlt};
        --color-expense: ${({theme}) => theme.colors.tertiary};
        --color-income: ${({theme}) => theme.colors.secondary}; 

        --color-header: ${({theme}) => theme.colors.primary};
        --color-background: ${({theme}) => theme.colors.background};
        --color-card: ${({theme}) => theme.colors.backgroundCard};
        // alter
        --font-default: 'Poppins', sans-serif;

        --shadow: rgba(0, 0, 0, 0.4);

        --box-shadow: 0px 0px 3px var(--shadow);
    }

    body {
        width: 100%;
        height: 100vh;
        background-color: var(--color-background);
        color: var(--color-default);
        font-size: 100%;
        font-family: var(--font-default);
    }
    
`;
