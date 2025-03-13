import styled from 'styled-components';

const S_AdminContainer = styled.div`
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 240px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 2px solid #3e3e3e;
    border-radius: 15px;
`

const S_AdminHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
`

const S_AdminMessage = styled.h3`
    font-size: 18px;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    letter-spacing: 1.1px;
    text-align: center;
    color: #fafafa;
`

const S_AdminControls = styled.div`
    display: flex;
    justify-content: space-between;
`;

export { S_AdminContainer, S_AdminHeader, S_AdminMessage, S_AdminControls };
