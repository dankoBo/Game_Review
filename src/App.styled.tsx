import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Roboto from '@/assets/fonts/Roboto-Regular.ttf';
import Literata from '@/assets/fonts/Literata.ttf';
import OrbitronRegular from '@/assets/fonts/Orbitron-Regular.ttf';
import OrbitronMedium from '@/assets/fonts/Orbitron-Medium.ttf';
import OrbitronSemiBold from '@/assets/fonts/Orbitron-SemiBold.ttf';
import OrbitronBold from '@/assets/fonts/Orbitron-Bold.ttf';
import OrbitronExtraBold from '@/assets/fonts/Orbitron-ExtraBold.ttf';
import OrbitronBlack from '@/assets/fonts/Orbitron-Black.ttf';

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

    /* 400 - Regular */
    @font-face {
        font-family: 'Orbitron';
        src: local('Orbitron-Regular'), url(${OrbitronRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    /* 500 - Medium */
    @font-face {
        font-family: 'Orbitron';
        src: local('Orbitron-Medium'), url(${OrbitronMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    /* 600 - SemiBold */
    @font-face {
        font-family: 'Orbitron';
        src: local('Orbitron-SemiBold'), url(${OrbitronSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    /* 700 - Bold */
    @font-face {
        font-family: 'Orbitron';
        src: local('Orbitron-Bold'), url(${OrbitronBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    /* 800 - ExtraBold */
    @font-face {
        font-family: 'Orbitron';
        src: local('Orbitron-ExtraBold'), url(${OrbitronExtraBold}) format('truetype');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
    }

    /* 900 - Black */
    @font-face {
        font-family: 'Orbitron';
        src: local('Orbitron-Black'), url(${OrbitronBlack}) format('truetype');
        font-weight: 900;
        font-style: normal;
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
`;

const AppWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    max-width: 1560px;
    margin: 0 auto;
    background-color: #171717;
`;

export { AppWrapper, GlobalStyle };
