import styled from 'styled-components';

type InputWrapperProps = {
    width?: string;
};

const S_Container = styled.div`
    position: absolute;
    left: 50%;
    top: 0%;
    transform: translate(-50%);
    width: 500px;
    height: 450px;
    padding: 20px;
    margin: 20px;
    border: 2px solid #3e3e3e;
    border-radius: 15px;
    z-index: 5;
    background-color: rgb(20, 20, 20, 0.7);
`;

const S_Form = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
`;

const S_InputWrapper = styled.div<InputWrapperProps>`
    position: relative;
    width: ${({ width }) => width || 'auto'};
`;

const S_Placeholder = styled.span`
    display: block;
    position: absolute;
    right: 20px;
    top: 14px;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    color: #ff4500;
`;

const S_UploadAndRate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const S_FileInput = styled.input`
    width: 100%;
    padding: 8px;
    border: none;
    color: #6c757d;
    background-color: inherit;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    background-color: #292929;
    border: 2px solid #3e3e3e;
    border-radius: 10px;
`;

const S_TextArea = styled.textarea`
    width: 100%;
    border: none;
    color: #f3f3f3;
    background-color: inherit;
    resize: none;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    white-space: pre-wrap;
    background-color: #292929;
    border: 2px solid #3e3e3e;
    border-radius: 10px;
    padding: 10px;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #6c757d;
    }
`;

const S_ButtonsContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
`;

export {
    S_Container,
    S_Form,
    S_UploadAndRate,
    S_InputWrapper,
    S_Placeholder,
    S_FileInput,
    S_TextArea,
    S_ButtonsContainer,
};
