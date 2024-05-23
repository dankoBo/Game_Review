import { S_Wrapper, S_SearchInput, S_BsSearch } from '@/components/search/Search.styled';
import { useState, FC, ChangeEvent } from 'react';

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
            <S_SearchInput
                type='text'
                placeholder='Введіть назву гри' 
                value={searchTerm}
                onChange={handleInputChange}
            />
            <S_BsSearch />
        </S_Wrapper>
    );
}
 
export default Search;