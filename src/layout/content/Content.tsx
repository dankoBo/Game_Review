import { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigtion from '../../components/navigation/Navigation';
import Search from '@/components/search/Search';
import { S_ContentContainer, S_ContentNav, S_MainContent } from './Content.styled';
import ReviewsPage from '@/pages/reviews-page/ReviewsPage';
import Loader from '@/UI/loader/Loader';
import GameInfo from '@/components/game-info/GameInfo';
import { useGameInfo } from '@/store/game-info.store';
const LocalizationsPage = lazy(
    () => import('@/pages/localizations-page/LocalizationsPage'),
);

const Content = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { isGameInfoOpen } = useGameInfo();
    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    return (
        <S_ContentContainer>
            <S_ContentNav>
                <Navigtion />
                <Search onSearch={handleSearch} />
            </S_ContentNav>
            <S_MainContent>
                <Routes>
                    <Route
                        path="/"
                        element={<ReviewsPage searchTerm={searchTerm} />}
                    />
                    <Route
                        path="/localizations"
                        element={
                            <Suspense fallback={<Loader />}>
                                <LocalizationsPage />
                            </Suspense>
                        }
                    />
                </Routes>
                {isGameInfoOpen && <GameInfo />}
            </S_MainContent>
        </S_ContentContainer>
    );
};

export default Content;
