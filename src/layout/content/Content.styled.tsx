import styled from 'styled-components';

const S_Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0 10px;

    @media (max-width: 650px) {
        margin-top: 0;
    }
`;

const S_NavBar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;

    @media (max-width: 660px) {
        flex-direction: column;
        gap: 14px;
    }
`;

const S_NavContainer = styled.nav`
    width: 30%;
    padding-bottom: 4px;
    border-bottom: 2px solid #3e3e3e;

    @media (max-width: 580px) {
        text-align: center;
    }
`;

const S_MainContent = styled.div`
    height: 100%;
    width: 100%;
    border: 2px solid #3e3e3e;
    border-radius: 15px;
`;

export { S_Container, S_NavBar, S_NavContainer, S_MainContent };
