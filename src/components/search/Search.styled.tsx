import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

const S_Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const S_SearchContainer = styled.div`
    position: relative;
    width: 500px;
`;

const S_SearchInput = styled.input`
    position: relative;
    width: 100%;
    padding: 3px 14px;
    border: none;
    border-bottom: 2px solid #3e3e3e;
    background-color: inherit;
    color: #fafafa;
    font-family: Roboto, sans-serif;
    font-size: 18px;
    letter-spacing: 1px;

    &:focus {
        outline: none;
        border-color: #f59aff;
        transition: border-color 0.3s ease-in-out;
        box-shadow: 0px 14px 14px -14px #bebebe;
    }
    
    &::placeholder {
        font-size: 16px;
        color: #6c757d;
    }
`;

const S_BsSearch = styled(BsSearch)`
    font-size: 18px;
    position: absolute;
    color: #fafafa;
    top: 6px;
    right: 10px;
`;

export { S_Wrapper, S_SearchContainer, S_SearchInput, S_BsSearch };
