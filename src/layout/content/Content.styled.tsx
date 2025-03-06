import styled from 'styled-components';

const S_Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0 10px;
`;

const S_NavBar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;

    @media (max-width: 1230px) {
        flex-direction: column;
        gap: 14px;
    }
`;

const S_MainContent = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    border: 2px solid #3e3e3e;
    border-radius: 15px;
`;

export { S_Container, S_NavBar, S_MainContent };
