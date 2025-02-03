import { useState } from 'react';
import Navigtion from '../../components/navigation/Navigation';
import GamesCards from '../../components/cards/GamesCards';
import Search from '@/components/search/Search';
import {
    S_Container,
    S_NavBar,
    S_MainContent,
} from './Content.styled';

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
                <GamesCards searchTerm={searchTerm} />
            </S_MainContent>
        </S_Container>
    );
};

export default Content;
