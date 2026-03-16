import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { auth } from '@/firebase/firebaseAuth';
import { useLogin } from '@/store/login.store';
import { useAdminPanel } from '@/store/admin-panel.store';
import Content from '@/layout/content/Content';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/hero/Hero';
import Loader from '@/UI/loader/Loader';
import { AppWrapper, GlobalStyle } from '@/App.styled';

const ReviewsPage = lazy(() => import('@/pages/reviews-page/ReviewsPage'));
const LocalizationsPage = lazy(
    () => import('@/pages/localizations-page/LocalizationsPage'),
);

function App() {
    const { closeLogin } = useLogin();
    const { openAdminPanel } = useAdminPanel();

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
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route element={<Content />}>
                            <Route path="/" element={<ReviewsPage />} />
                            <Route
                                path="/localizations"
                                element={<LocalizationsPage />}
                            />
                        </Route>
                    </Routes>
                </Suspense>
                <Footer />
            </AppWrapper>
        </>
    );
}

export default App;
