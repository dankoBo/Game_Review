import styled from 'styled-components';
import { BsSearch } from "react-icons/bs";


const S_Wrapper = styled.div`
    width: 320px;
    height: fit-content;
    position: relative;
    display: flex;
    align-items: center;
`

const S_SearchInput = styled.input`
    width: 100%;
    padding: 4px 14px;
    border: none;
    border-bottom: 2px solid #3E3E3E;
    background-color: inherit;
    color: #FAFAFA;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    &:focus {
        outline: none;
        border-color: #B2B2B2;
    }
    &::placeholder {
        color: #6C757D;
    }
`

const S_BsSearch = styled(BsSearch)`
    font-size: 18px;
    position: absolute;
    color: #FAFAFA;
    right: 10px;
`


export { S_Wrapper, S_SearchInput, S_BsSearch }