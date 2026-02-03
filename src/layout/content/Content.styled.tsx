import styled from 'styled-components';

const S_ContentContainer = styled.div`
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const S_ContentNav = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;

    @media (max-width: 1230px) {
        flex-direction: column;
        gap: 14px;
    }
`;

const S_MainContent = styled.div`
    position: relative;
    height: 100%;
    min-height: 100%;
    width: 100%;
    border: 2px solid #3e3e3e;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export { S_ContentContainer, S_ContentNav, S_MainContent };
