import styled from 'styled-components';

const S_AdminContainer = styled.div`
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 240px;
    padding: 10px;
    border: 2px solid #3e3e3e;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const S_AdminHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
`

const S_AdminEmoji = styled.img`
    width: 60px;

    @media (max-width: 770px) {
        width: 30px;
    }
`

const S_AdminMessage = styled.h3`
    text-align: center;
    font-size: 18px;
    font-family: 'Exo 2', sans-serif;
    font-weight: 600;
    letter-spacing: 1.1px;
    color: #fafafa;

    @media (max-width: 770px) {
        font-size: 14px;
    }
`

const S_AdminControls = styled.div`
    display: flex;
    justify-content: space-between;
`;

export { S_AdminContainer, S_AdminHeader, S_AdminEmoji, S_AdminMessage, S_AdminControls };
