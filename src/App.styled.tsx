import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #141414; 
    }
`

const AppWrapper = styled.div`
    max-width: 1560px;
    padding: 0 10px;
    height: 100vh;
    margin: 0 auto;
    background-color: #171717;
`

export { AppWrapper, GlobalStyle }