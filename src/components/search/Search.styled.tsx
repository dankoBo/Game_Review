import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

const S_SearchWrapper = styled.div`
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
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #fafafa;
    letter-spacing: 1.4px;
    background-color: inherit;

    &:focus {
        outline: none;
        border-color: #f59aff;
        transition: border-color 0.3s ease-in-out;
        box-shadow: 0px 14px 14px -14px #bebebe;
    }

    &::placeholder {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #9f9f9f;
    }
`;

const S_BsSearch = styled(BsSearch)`
    position: absolute;
    font-size: 18px;
    color: #fafafa;
    top: 6px;
    right: 10px;
`;

export { S_SearchWrapper, S_SearchContainer, S_SearchInput, S_BsSearch };
