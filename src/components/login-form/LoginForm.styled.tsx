import styled from 'styled-components';

const S_Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    height: 200px;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #3E3E3E;
`

const S_Form = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`

const S_BtnContainer = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
`

const S_ErrorMessage = styled.p`
    color: #FF4500;
    margin-bottom: 20px;
    font-family: Roboto, sans-serif;
    font-size: 14px;
`

export { S_Container, S_Form, S_BtnContainer, S_ErrorMessage };
