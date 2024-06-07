import styled from 'styled-components'

type ButtonProps = {
    $bgColor: string;
}

const S_Button = styled.button<ButtonProps>`
    padding: 10px 15px;
    color: #FAFAFA;
    background-color: ${props => props.$bgColor};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: Roboto, sans-serif;
    font-size: 14px;
`

export { S_Button }