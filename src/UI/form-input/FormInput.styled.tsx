import styled from 'styled-components';

const S_Input = styled.input`
    width: 100%;
    padding: 5px 0;
    border: none;
    color: #F3F3F3;
    background-color: inherit;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #6C757D;
    }
`

export { S_Input }