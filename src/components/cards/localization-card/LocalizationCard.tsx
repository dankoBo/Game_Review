import {
    S_CardContainer,
    S_GameCover,
    S_GameCoverImg,
    S_GameInfo,
    S_GameTitle,
    S_GameInfoLabel,
    S_GameDetails,
    S_GameDescriptionContainer,
    S_GameDescriptionTitle,
    S_GameDescription
} from './LocalizationCard.styled';

import steamLink from "@/assets/images/localization/steam-blue-square-logo-64.png";


const LocalizationCard = ({ cover }) => {
    return (
        <S_CardContainer>
            <S_GameCover>
                <S_GameCoverImg src={cover} alt="Burnhouse Lane" />
            </S_GameCover>
            <S_GameInfo>
                <S_GameTitle>Burnhouse Lane</S_GameTitle>
                <S_GameDetails>
                    <p><S_GameInfoLabel>Розробник: </S_GameInfoLabel>Harvester Games</p>
                    <p><S_GameInfoLabel>Жанр: </S_GameInfoLabel>Horror</p>
                    
                </S_GameDetails>
                <S_GameDescriptionContainer>
                    <S_GameDescriptionTitle>Опис:</S_GameDescriptionTitle>
                    <S_GameDescription>
                        "Burnhouse Lane" розповідає історію Енджі Везер,
                        медсестри агентства, яка вже однією ногою в могилі і
                        намагається виконати п'ять нездійсненних завдань, щоб
                        повернути своє життя назад. Розв'язуйте головоломки,
                        заводьте друзів і ворогів, біжіть, ховайтеся і боріться
                        в цій похмурій пригоді, яка перенесе вас в інший світ і
                        назад...
                    </S_GameDescription>
                </S_GameDescriptionContainer>
                <p>
                    <S_GameInfoLabel>Посилання на Steam посібник: </S_GameInfoLabel>
                    <a href="#" target="_blank" rel="noreferrer">
                        <img src={steamLink} alt="Steam" />
                    </a>
                </p>
            </S_GameInfo>
        </S_CardContainer>
    );
};

export default LocalizationCard;
