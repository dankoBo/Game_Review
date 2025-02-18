import styled from 'styled-components';

const S_CardContainer = styled.div`
    width: 100%;
    max-width: 1140px;
    margin: 10px 0;
    padding: 10px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1230px) {
        flex-direction: column;
        align-items: center;
        gap: 14px;
    }
`;

const S_GameCover = styled.div`
    width: 248px;
    height: 352px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0px 0px 12px #9b090a;
`;

const S_GameCoverImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const S_GameInfo = styled.div`
    width: 100%;
    max-width: 840px;
    padding: 20px;
    border-radius: 15px;
    background-color: #292929;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`;

const S_GameTitle = styled.h2`
    font-size: 40px;
    letter-spacing: 2px;
    margin-bottom: 26px;
    color: #fafafa;
`;

const S_GameDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 16px;
    font-weight: 400;
`

const S_GameInfoLabel = styled.span`
    font-weight: 700;
    letter-spacing: 2px;
`

const S_GameDescriptionContainer = styled.div`
    /* margin-top: 10px; */
`

const S_GameDescriptionTitle = styled.h3`
    font-family: Roboto, sans-serif;
    letter-spacing: 2px;
    font-size: 16px;
    font-weight: 700;
`;

const S_GameDescription = styled.p`
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin-top: 5px;
`;

export {
    S_CardContainer,
    S_GameCover,
    S_GameCoverImg,
    S_GameInfo,
    S_GameTitle,
    S_GameDetails,
    S_GameInfoLabel,
    S_GameDescriptionContainer,
    S_GameDescriptionTitle,
    S_GameDescription
};
