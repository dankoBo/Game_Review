import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigtion from '../../components/navigation/Navigation';
// import GamesCards from '../../components/cards/GamesCards';
import Search from '@/components/search/Search';
import {
    S_Container,
    S_NavBar,
    S_MainContent,
} from './Content.styled';
import ReviewsPage from '@/pages/reviews-page/ReviewsPage';
import LocalizationsPage from '@/pages/localizations-page/LocalizationsPage'

const Content = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    return (
        <S_Container>
            <S_NavBar>
                <Navigtion />
                <Search onSearch={handleSearch} />
            </S_NavBar>
            <S_MainContent>
                <Routes>
                    {/* <Route path="/" element={<GamesCards searchTerm={searchTerm} />} /> */}
                    <Route path="/" element={<ReviewsPage searchTerm={searchTerm} />} />
                    <Route path="/localizations" element={<LocalizationsPage />} />
                </Routes>
                {/* <GamesCards searchTerm={searchTerm} /> */}
            </S_MainContent>
        </S_Container>
    );
};

export default Content;
