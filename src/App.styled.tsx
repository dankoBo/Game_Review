import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #FFFFFF;
    }
`

const AppWrapper = styled.div`
    max-width: 1540px;
    height: 100vh;
    margin: 0 auto;
    border: 1px solid grey;
`

export { AppWrapper, GlobalStyle }