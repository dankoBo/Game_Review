import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Roboto from '@/assets/fonts/Roboto-Regular.ttf';
import Literata from '@/assets/fonts/Literata.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'OldWood';
        src: local('OldWood'), url('/assets/fonts/old_wood.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), url(${Roboto}) format('truetype');
    }

    @font-face {
        font-family: 'Literata';
        src: local('Literata'), url(${Literata}) format('truetype');
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #141414;
    }

    ul {
        list-style-type: none;
    }
`

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 1560px;
    margin: 0 auto;
    border-radius: 10px;
    background-color: #171717;
`

export { AppWrapper, GlobalStyle }