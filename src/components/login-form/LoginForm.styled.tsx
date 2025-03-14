import styled from 'styled-components';

const S_Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #3e3e3e;
`;

const S_Form = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
`;

const S_BtnContainer = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
`;

export { S_Container, S_Form, S_BtnContainer };
