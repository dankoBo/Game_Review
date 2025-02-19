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
    S_LinkImg,
} from './LocalizationCard.styled';
import steamLinkImg from '@/assets/images/localization/steam-blue-square-logo-64.png';

type LocalizationCardProps = {
    cover: string;
    description: string;
    developer: string;
    genre: string;
    name: string;
    steamLink: string;
};

const LocalizationCard: React.FC<LocalizationCardProps> = ({
    cover,
    description,
    developer,
    genre,
    name,
    steamLink,
}) => {
    return (
        <S_CardContainer>
            <S_GameCover>
                <S_GameCoverImg src={cover} alt="Burnhouse Lane" />
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
                    <a href={steamLink} target="_blank" rel="noreferrer">
                        <S_LinkImg src={steamLinkImg} alt="Steam" />
                    </a>
                </S_LinkContainer>
            </S_GameInfo>
        </S_CardContainer>
    );
};

export default LocalizationCard;
