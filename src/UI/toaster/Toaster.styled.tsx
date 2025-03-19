import styled from 'styled-components';

const S_ToasterWrapper = styled.div`
    width: 100%;
    max-width: 360px;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 12px;
    transform: translate(-50%, -50%);

    @media (max-width: 850px) {
        top: 0;
        transform: translate(-50%, 0%);
    }
`;

const S_ToasterContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 15px;
    border: 2px solid ${({color}) => color};
    background-color: rgb(20, 20, 20, 0.6);
    box-shadow: 0 0 10px ${({color}) => color};

    @media (max-width: 770px) {
        padding: 5px;
    }
`;

const S_ToasterEmoji = styled.img`
    @media (max-width: 770px) {
        width: 30px;
    }
`;

const S_ToasterMessage = styled.h2`
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 1.1px;
    text-align: center;
    color: #fafafa;

    @media (max-width: 770px) {
        font-size: 14px;
    }
`;

export {
    S_ToasterWrapper,
    S_ToasterContainer,
    S_ToasterEmoji,
    S_ToasterMessage,
};
