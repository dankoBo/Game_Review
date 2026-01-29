import styled from 'styled-components';

const S_Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #3e3e3e;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #f3f3f3;
    background-color: #292929;

    &:focus {
        outline: none;
        border-color: #f59aff;
    }
    
    &::placeholder {
        color: #9f9f9f;
    }
`;

const S_ErrorMessage = styled.p`
    padding: 2px 0 0 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: #ff4500;
`;

export { S_Input, S_ErrorMessage };
