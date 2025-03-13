import styled from 'styled-components';

const S_ToasterWrapper = styled.div`
    width: 360px;
    height: 106px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    border: 2px solid ${({color}) => color};
    border-radius: 15px;
    background-color: rgb(20, 20, 20, 0.6);
    box-shadow: 0 0 10px ${({color}) => color};
`;

const S_ToasterContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const S_ToasterEmoji = styled.div``;

const S_ToasterMessage = styled.h2`
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 1.1px;
    text-align: center;
    color: #fafafa;
`;

export {
    S_ToasterWrapper,
    S_ToasterContainer,
    S_ToasterEmoji,
    S_ToasterMessage,
};
