import styled from 'styled-components';

const S_Button = styled.button`
    position: relative;
    right: 50px;
    padding: 14px;
    border: none;
    border-radius: 50%;
    background-color: rgba(162, 162, 162, 0.9);
    box-shadow: 1px 0 0 1px rgba(98, 98, 98, 0.51);

    @media (max-width: 768px) {
        right: 25px;
        padding: 9px;
    }
`;

export { S_Button };
