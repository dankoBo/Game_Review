import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Roboto from '@/assets/fonts/Roboto-Regular.ttf';
import Literata from '@/assets/fonts/Literata.ttf';

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), url(${Roboto}) format('truetype');
        font-display: swap;
    }

    @font-face {
        font-family: 'Literata';
        src: local('Literata'), url(${Literata}) format('truetype');
        font-display: swap;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #141414;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    
    ul {
        list-style-type: none;
    }
`

const AppWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    max-width: 1560px;
    margin: 0 auto;
    background-color: #171717;
`

export { AppWrapper, GlobalStyle };
