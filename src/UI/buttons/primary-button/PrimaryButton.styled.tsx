import styled from 'styled-components';

type ButtonProps = {
    $bgColor: string;
};

const S_Button = styled.button<ButtonProps>`
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    font-family: 'Exo 2', sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1.2px;
    color: #fafafa;
    transition: box-shadow 0.2s ease-in-out;
    background-color: ${(props) => props.$bgColor};
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 14px ${(props) => props.$bgColor};
    }
`;

export { S_Button };
