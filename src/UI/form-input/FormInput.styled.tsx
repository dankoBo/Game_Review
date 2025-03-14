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
        border-color: #f59aff;
    }
    
    &::placeholder {
        color: #6c757d;
    }
`;

const S_ErrorMessage = styled.p`
    padding: 2px 0 0 10px;
    color: #ff4500;
    font-family: Roboto, sans-serif;
    font-size: 14px;
`;

export { S_Input, S_ErrorMessage };
