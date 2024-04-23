import { AppWrapper, GlobalStyle } from './App.styled';
import Hero from './layout/hero/Hero';
import Content from './layout/content/Content';
import Footer from './layout/footer/Footer';

function App() {
    return (
        <>
            <GlobalStyle />
            <AppWrapper>
                <Hero />
                <Content />
                <Footer />
            </AppWrapper>
        </>
    );
}

export default App;
