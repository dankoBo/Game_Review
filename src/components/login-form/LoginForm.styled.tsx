import styled from 'styled-components';

const S_Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #3E3E3E;
`

const S_BtnContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

const S_ErrorMessage = styled.p`
    color: #FF4500;
    margin-bottom: 20px;
    font-family: Roboto, sans-serif;
    font-size: 14px;
`

export { S_Container, S_InputWrapper, S_BtnContainer, S_ErrorMessage };
