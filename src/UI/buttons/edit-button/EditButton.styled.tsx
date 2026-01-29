import styled from 'styled-components';

const S_Button = styled.button`
    border: none;
    font-size: 26px;
    line-height: 10px;
    color: #4caf50;
    background-color: inherit;
    cursor: pointer;

    &:hover svg {
        filter: drop-shadow(0 0 6px #4caf50);
    }
`;

export { S_Button };
