import styled from 'styled-components';

const S_NotFoundContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    padding: 10px;
    gap: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const S_NotFoundMessage = styled.p`
    font-family: Literata, sans-serif;
    font-size: 30px;
    text-align: center;
    color: #fafafa;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const S_NotFoundImg = styled.img`
    width: 100px;
    height: auto;
    filter: drop-shadow(1px 1px 10px #fafafa);

    @media (max-width: 768px) {
        width: 75px;
    }
`;

export { S_NotFoundContainer, S_NotFoundMessage, S_NotFoundImg };
