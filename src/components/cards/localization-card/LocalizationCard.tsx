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
    S_GameDescription,
    S_LinkContainer,
    S_LinkBox,
    S_SteamIcon
} from './LocalizationCard.styled';

type LocalizationCardProps = {
    cover: string;
    description: string;
    developer: string;
    genre: string;
    name: string;
    steamLink: string;
};

const LocalizationCard = ({
    cover,
    description,
    developer,
    genre,
    name,
    steamLink,
} : LocalizationCardProps) => {
    return (
        <S_CardContainer>
            <S_GameCover>
                <S_GameCoverImg src={cover} alt="Game cover" />
            </S_GameCover>
            <S_GameInfo>
                <S_GameTitle>{name}</S_GameTitle>
                <S_GameDetails>
                    <p>
                        <S_GameInfoLabel>Розробник: </S_GameInfoLabel>
                        {developer}
                    </p>
                    <p>
                        <S_GameInfoLabel>Жанр: </S_GameInfoLabel>
                        {genre}
                    </p>
                </S_GameDetails>
                <S_GameDescriptionContainer>
                    <S_GameDescriptionTitle>Опис:</S_GameDescriptionTitle>
                    <S_GameDescription>{description}</S_GameDescription>
                </S_GameDescriptionContainer>
                <S_LinkContainer>
                    <S_GameInfoLabel>
                        Посилання на Steam посібник:{' '}
                    </S_GameInfoLabel>
                    <S_LinkBox>
                        <a href={steamLink} target="_blank" rel="noreferrer">
                            <S_SteamIcon />
                        </a>
                    </S_LinkBox>
                </S_LinkContainer>
            </S_GameInfo>
        </S_CardContainer>
    );
};

export default LocalizationCard;
