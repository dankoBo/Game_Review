import { AppWrapper, GlobalStyle } from './App.styled';
import Hero from './layout/hero/Hero';
import Content from './layout/content/Content';

function App() {
    return (
        <>
            <GlobalStyle />
            <AppWrapper>
                <Hero />
                <Content />
            </AppWrapper>
        </>
    );
}

export default App;
