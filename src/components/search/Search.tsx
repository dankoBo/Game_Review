import { useState, useEffect, FC, ChangeEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearch } from '@/store/search.store';
import {
    S_Wrapper,
    S_SearchContainer,
    S_SearchInput,
    S_BsSearch,
} from '@/components/search/Search.styled';

type SearchProps = {
    onSearch: (term: string) => void;
};

const Search: FC<SearchProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { searchInput, showSearchInput, hideSearchInput } = useSearch();
    const location = useLocation();

    useEffect(() => {
        location.pathname === '/' ? showSearchInput() : hideSearchInput();
    }, [location.pathname, showSearchInput, hideSearchInput]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <S_Wrapper>
            {searchInput && (
                <S_SearchContainer>
                    <S_SearchInput
                        type="text"
                        placeholder="Введіть назву гри"
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                    <S_BsSearch />
                </S_SearchContainer>
            )}
        </S_Wrapper>
    );
};

export default Search;
