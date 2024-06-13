import {
    S_Container,
    S_NavBar,
    S_NavContainer,
    S_MainContent,
} from './Content.styled';
import { useState } from 'react';
import Navigtion from '../../components/navigation/Navigation';
import GamesCards from '../../components/cards/GamesCards';
import Search from '@/components/search/Search';

const Content = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    return (
        <S_Container>
            <S_NavBar>
                <S_NavContainer>
                    <Navigtion />
                </S_NavContainer>
                <Search onSearch={handleSearch} />
            </S_NavBar>
            <S_MainContent>
                <GamesCards searchTerm={searchTerm} />
            </S_MainContent>
        </S_Container>
    );
};

export default Content;
