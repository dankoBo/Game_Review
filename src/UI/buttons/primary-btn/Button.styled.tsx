import styled from 'styled-components'

type ButtonProps = {
    $primary?: boolean;
}

const S_Button = styled.button<ButtonProps>`
    padding: 10px 15px;
    color: #FAFAFA;
    background-color: ${props => props.$primary ? "#1E90FF" : "#FF4500"};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: Roboto, sans-serif;
    font-size: 14px;
`

export { S_Button }