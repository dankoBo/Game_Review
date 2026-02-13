import styled from 'styled-components';

const S_Button = styled.button<{ $color?: string }>`
    border: none;
    font-size: 24px;
    line-height: 10px;
    color: ${({ $color }) => $color || '#9f9f9f'};
    background-color: inherit;
    cursor: pointer;

    &:hover svg {
        filter: drop-shadow(0 0 6px ${({ $color }) => $color || '#9f9f9f'});
    }
`;

export { S_Button };
