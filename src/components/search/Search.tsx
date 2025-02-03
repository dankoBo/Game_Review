import { useState, FC, ChangeEvent } from 'react';
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

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <S_Wrapper>
            <S_SearchContainer>
                <S_SearchInput
                    type="text"
                    placeholder="Введіть назву гри"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <S_BsSearch />
            </S_SearchContainer>
        </S_Wrapper>
    );
};

export default Search;
