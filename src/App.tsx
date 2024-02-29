import { AppWrapper, GlobalStyle } from './App.styled'
import Hero from './layout/hero/Hero'
import Logo from './components/logo/Logo'
import Content from './layout/content/Content'

function App() {

    return (
        <>
            <GlobalStyle />
            <AppWrapper>
                <Hero />
                {/* <Logo /> */}
                <Content />
            </AppWrapper>
        </>
    )
}

export default App
