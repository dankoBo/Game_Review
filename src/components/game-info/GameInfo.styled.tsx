import styled from 'styled-components';

type InputWrapperProps = {
    width?: string;
};

const S_Container = styled.div`
    position: absolute;
    top: 0;
    right: 40%;
    width: 500px;
    height: 500px;
    padding: 20px;
    margin: 20px;
    border: 2px solid #3E3E3E;
    border-radius: 15px;
    z-index: 5;
    background-color: rgb(20, 20, 20, 0.7);
`

const S_InputWrapper = styled.div<InputWrapperProps>`
    width: ${({ width }) => width || 'auto'};
`

const S_UploadAndRate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

const S_TextArea = styled.textarea`
    width: 100%;
    border: none;
    color: #F3F3F3;
    background-color: inherit;
    resize: none;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    white-space: pre-wrap;
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

export { S_Container, S_UploadAndRate, S_InputWrapper, S_FileInput, S_TextArea, S_ButtonsContainer };