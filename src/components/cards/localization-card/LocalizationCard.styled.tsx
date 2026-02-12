import styled, { keyframes } from 'styled-components';
import { FaSquareSteam } from "react-icons/fa6";

const animatedLine = keyframes`
    0% {
      transform: rotate(0);
    }
  
    100% {
      transform: rotate(360deg);
    }
`

const S_CardContainer = styled.div`
    width: 100%;
    max-width: 1140px;
    margin: 10px 0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: #fafafa;

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
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
    transition: box-shadow 0.3s ease-in-out,
    transform 0.3s ease-in-out,
    filter 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 0px 30px #f59aff;
        transform: scale(1.04);
        transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
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
    display: flex;
    flex-direction: column;
    gap: 14px;
    background-color: #1e1e1e;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`;

const S_GameTitle = styled.h2`
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
    font-size: 40px;
    color: #f59aff;
    letter-spacing: 4px;
`;

const S_GameDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const S_GameInfoLabel = styled.span`
    font-family: 'Exo 2', sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 2px;
    color: #9f9f9f;

    @media (max-width: 430px) {
        width: 190px;
    }
`;

const S_GameDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 4px;
`;

const S_GameDescriptionTitle = styled.h3`
    font-family: 'Exo 2', sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 2px;
    color: #9f9f9f;
`;

const S_GameDescription = styled.p`
    margin-top: 5px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
`;

const S_LinkContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
`;

const S_LinkBox = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        width: 90%;
        height: 130%;
        background: #fafafa;
        transform-origin: center;
        animation: ${animatedLine} 4s linear infinite;
        box-shadow: 0 0 10px #fafafa;
    }
`;

const S_SteamIcon = styled(FaSquareSteam)`
    position: relative;
    display: block;
    width: 51px;
    height: 51px;
    z-index: 5;
    color: #f59aff;
`

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
    S_GameDescription,
    S_LinkContainer,
    S_LinkBox,
    S_SteamIcon
};
