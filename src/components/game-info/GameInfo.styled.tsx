import styled from 'styled-components'

const S_Container = styled.div`
    position: absolute;
    top: 0;
    right: 50%;
    /* transform: translate(-50%, -50%); */
    width: 500px;
    height: 500px;
    padding: 20px;
    margin: 20px;
    border: 2px solid #3E3E3E;
    border-radius: 15px;
    z-index: 5;
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

const S_FileInput = styled.input`
    width: 100%;
    padding: 5px 0;
    border: none;
    color: #6C757D;
    background-color: inherit;
    font-family: Roboto, sans-serif;
    font-size: 14px;
`

const S_TextInput = styled.input`
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

const S_TextArea = styled.textarea`
    width: 100%;
    border: none;
    color: #F3F3F3;
    background-color: inherit;
    resize: none;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #6C757D;
    }
`

const S_ButtonsContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
`

export { S_Container, S_InputWrapper, S_FileInput, S_TextInput, S_TextArea, S_ButtonsContainer }