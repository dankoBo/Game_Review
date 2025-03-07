import styled from 'styled-components';

const S_Button = styled.button`
    border: none;
    color: #dc3545;
    background-color: inherit;
    font-size: 26px;
    cursor: pointer;
    line-height: 10px;

    &:hover svg {
        filter: drop-shadow(0 0 6px #dc3545);
    }
`;

export { S_Button };
