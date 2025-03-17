import { useEffect } from 'react';
import { auth } from '@/firebase/firebaseAuth';
import { useLogin } from '@/store/login.store';
import { useAdminPanel } from '@/store/admin-panel.store';
import { AppWrapper, GlobalStyle } from '@/App.styled';
import Hero from '@/layout/hero/Hero';
import Content from '@/layout/content/Content';
import Footer from '@/layout/footer/Footer';

function App() {
    const closeLogin = useLogin((state) => state.closeLogin);
    const openAdminPanel = useAdminPanel((state) => state.openAdminPanel);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                openAdminPanel();
                closeLogin();
            }
        });

        return () => unsubscribe();
    }, [openAdminPanel, closeLogin]);

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
