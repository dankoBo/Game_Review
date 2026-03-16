import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useGameInfo } from '@/store/game-info.store';
import GameInfo from '@/components/game-info/GameInfo';
import Loader from '@/UI/loader/Loader';
import Navigtion from '../../components/navigation/Navigation';
import Search from '@/components/search/Search';
import {
    S_ContentContainer,
    S_ContentNav,
    S_MainContent,
} from './Content.styled';

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
                <Suspense fallback={<Loader />}>
                    <Outlet context={{ searchTerm }} />
                </Suspense>
                {isGameInfoOpen && <GameInfo />}
            </S_MainContent>
        </S_ContentContainer>
    );
};

export default Content;
