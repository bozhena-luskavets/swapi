import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');
    * {
        margin: 0;
        padding: 0;
        font-family: Montserrat, Sans-Serif;
        text-decoration: none;
        background-color: #252525;
    }
    :root {
        --global-bg: #252525
    }
`;