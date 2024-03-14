import styled from 'styled-components'

type Props = {
    $primary?: boolean;
}

const S_Button = styled.button<Props>`
    padding: 10px 15px;
    color: white;
    background-color: ${props => props.$primary ? "#1e90ff" : "#ff4500"};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: Roboto, sans-serif;
    font-size: 14px;
`

export { S_Button }