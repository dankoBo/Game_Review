import styled from 'styled-components'

const S_Container = styled.div`
    width: 20%;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #3E3E3E;
`

const S_InputWrapper = styled.div`
    padding: 5px 10px 5px 14px;
    border: 2px solid #3E3E3E;
    border-radius: 10px;
    background-color: #292929;
    margin: 20px 0;
    &:focus-within {
        border-color: #B2B2B2;
    }
`

const S_PasswordInput = styled.input`
    width: 100%;
    padding: 5px 0;
    border: none;
    color: #F3F3F3;
    background-color: inherit;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #6C757D;
    }
`

const S_BtnContainer = styled.div`
    display: flex;
    justify-content: space-around;
`


export { S_Container, S_InputWrapper, S_PasswordInput, S_BtnContainer }
