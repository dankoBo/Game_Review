import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Exo2Bold from '@/assets/fonts/exo2/Exo2-Bold.ttf';
import Exo2Medium from '@/assets/fonts/exo2/Exo2-Medium.ttf';
import Exo2SemiBold from '@/assets/fonts/exo2/Exo2-SemiBold.ttf';
import OrbitronBold from '@/assets/fonts/orbitron/Orbitron-Bold.ttf';
import OrbitronBlack from '@/assets/fonts/orbitron/Orbitron-Black.ttf';
import MontserratRegular from '@/assets/fonts/montserrat/Montserrat-Regular.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Orbitron';
        src: local('Orbitron-Bold'), url(${OrbitronBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Orbitron';
        src: local('Orbitron-Black'), url(${OrbitronBlack}) format('truetype');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Exo 2';
        src: local('Exo2-Medium'), url(${Exo2Medium}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Exo 2';
        src: local('Exo2-SemiBold'), url(${Exo2SemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Exo 2';
        src: local('Exo2-Bold'), url(${Exo2Bold}) format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat-Regular'), url(${MontserratRegular}) format('truetype');
        font-weight: 400;
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
