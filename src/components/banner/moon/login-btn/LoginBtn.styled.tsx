import styled from 'styled-components';

const S_Button = styled.button`
    border-radius: 50%;
    padding: 14px;
    position: relative;
    right: 50px;
    border: none;
    background-color: rgba(162, 162, 162, 0.9);
    box-shadow: 1px 0 0 1px rgba(98, 98, 98, 0.51);

    @media (max-width: 768px) {
        padding: 9px;
        right: 25px;
    }
`;

export { S_Button };
