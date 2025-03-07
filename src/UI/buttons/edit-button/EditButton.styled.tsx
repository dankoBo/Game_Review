import styled from 'styled-components';

const S_Button = styled.button`
    border: none;
    color: #4caf50;
    background-color: inherit;
    font-size: 26px;
    cursor: pointer;
    line-height: 10px;

    &:hover svg {
        filter: drop-shadow(0 0 6px #4caf50);
    }
`;

export { S_Button };
