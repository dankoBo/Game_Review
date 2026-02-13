import styled from 'styled-components';

const S_Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 340px;
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

const S_PasswordContainer = styled.div`
    position: relative;
`;

const S_PasswordIconContainer = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const S_BtnContainer = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
`;

export {
    S_Container,
    S_Form,
    S_PasswordContainer,
    S_PasswordIconContainer,
    S_BtnContainer,
};
