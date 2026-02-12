import styled from 'styled-components';

const S_Button = styled.button`
    border: none;
    font-size: 24px;
    line-height: 10px;
    color: #00674F;
    background-color: inherit;
    cursor: pointer;

    &:hover svg {
        filter: drop-shadow(0 0 6px #00674F);
    }

    @media (max-width: 570px) {
        font-size: 20px;
    }
`;

export { S_Button };
