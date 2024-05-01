import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: OldWood;
        src: url('/src/assets/fonts/old_wood.ttf');
    }

    @font-face {
        font-family: Roboto;
        src: url('/src/assets/fonts/Roboto-Regular.ttf');
    }

    @font-face {
        font-family: Literata;
        src: url('/src/assets/fonts/Literata.ttf');
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