import { S_Wrapper, S_SearchInput, S_BsSearch } from '@/components/search/Search.styled';
const Search = () => {
    return (
        <S_Wrapper>
            <S_SearchInput type='text' placeholder='Введіть назву гри' />
            <S_BsSearch />
        </S_Wrapper>
    );
}
 
export default Search;