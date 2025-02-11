import styled from 'styled-components';

const S_CardContainer = styled.div`
    width: 100%;
    max-width: 1140px;
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
    height: 352px;
    padding: 20px;
    color: #ffffff;
    border-radius: 15px;
    background-color: #292929;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`;

const S_GameTitle = styled.h2`
    font-family: Roboto, sans-serif;
    font-size: 22px;
    letter-spacing: 2px;
    color: #fafafa;
`;

const S_Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 5px;
`;

const S_GameDeveloper = styled(S_Text)``;
const S_GameGenre = styled(S_Text)``;
const S_GameLink = styled(S_Text)``;

export {
    S_CardContainer,
    S_GameCover,
    S_GameCoverImg,
    S_GameInfo,
    S_GameTitle,
    S_GameDeveloper,
    S_GameGenre,
    S_GameLink,
};
