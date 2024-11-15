import styled from 'styled-components';

const S_Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 2px solid #3e3e3e;
    border-radius: 10px;
    background-color: #292929;
    color: #f3f3f3;
    font-family: Roboto, sans-serif;
    font-size: 14px;

    &:focus {
        outline: none;
        border-color: #b2b2b2;
    }
    
    &::placeholder {
        color: #6c757d;
    }
`;

export { S_Input };
