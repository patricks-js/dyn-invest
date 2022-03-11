import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* Presets */

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    :root {
        --hue: 225; 
        --color-default: hsl(var(--hue),15.4%,64.3%); 
        --color-alt: hsl(var(--hue),27.5%,29.2%);
        --color-expense: hsl(0,81.4%,53.7%);
        --color-income: hsl(104.1,63.5%,40.8%); 
        
        --font-default: 'Poppins', sans-serif;

        --shadow: rgba(0, 0, 0, 0.4);

        --box-shadow: 0px 0px 3px var(--shadow);
    }

    body {
        width: 100%;
        height: 100vh;
        background-color: #F0F2F5;
        /* background-color: #333; */
        color: var(--color-default);
        font-size: 100%;
        font-family: var(--font-default);
    }
    
`;
