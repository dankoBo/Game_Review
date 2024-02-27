import { AppWrapper, GlobalStyle } from './App.styled'
import Hero from './layout/hero/Hero'

function App() {

    return (
        <>
            <GlobalStyle />
            <AppWrapper>
                <Hero />
            </AppWrapper>
        </>
    )
}

export default App
