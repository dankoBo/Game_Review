import styled from 'styled-components';

const S_Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 2px solid #3E3E3E;
    border-radius: 10px;
    background-color: #292929;
    color: #F3F3F3;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    &:focus {
        outline: none;
        border-color: #B2B2B2;
    }
    &::placeholder {
        color: #6C757D;
    }
`
