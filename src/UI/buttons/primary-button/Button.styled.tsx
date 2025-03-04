import styled from 'styled-components';

type ButtonProps = {
    $bgColor: string;
};

const S_Button = styled.button<ButtonProps>`
    padding: 10px 15px;
    color: #fafafa;
    background-color: ${(props) => props.$bgColor};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    transition: box-shadow 0.2s ease-in-out;

    &:hover {
        box-shadow: 0 0 14px ${(props) => props.$bgColor};
    }
`;

export { S_Button };
