import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

const S_Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 22px;
`;

const S_SearchContainer = styled.div`
    position: relative;
    width: 500px;
`;

const S_SearchInput = styled.input`
    width: 100%;
    padding: 4px 14px;
    border: none;
    border-bottom: 2px solid #3e3e3e;
    background-color: inherit;
    color: #fafafa;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    letter-spacing: 1px;

    &:focus {
        outline: none;
        border-color: #f59aff;
    }
    
    &::placeholder {
        color: #6c757d;
    }
`;

const S_BsSearch = styled(BsSearch)`
    font-size: 18px;
    position: absolute;
    color: #fafafa;
    right: 10px;
`;

export { S_Wrapper, S_SearchContainer, S_SearchInput, S_BsSearch };
