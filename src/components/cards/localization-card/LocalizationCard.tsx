import {
    S_CardContainer,
    S_GameCover,
    S_GameCoverImg,
    S_GameInfo,
    S_GameTitle,
    S_GameDeveloper,
    S_GameGenre,
    S_GameLink,
} from './LocalizationCard.styled';

const LocalizationCard = ({ cover }) => {
    return (
        <S_CardContainer>
            <S_GameCover>
                <S_GameCoverImg src={cover} alt="Burnhouse Lane" />
            </S_GameCover>
            <S_GameInfo>
                <S_GameTitle>Burnhouse Lane</S_GameTitle>
                <S_GameDeveloper>Розробник: Harvester Games</S_GameDeveloper>
                <S_GameGenre>Жанр: Horror</S_GameGenre>
                <S_GameLink>Посилання на Steam посібник</S_GameLink>
                <div>
                    <h3>Опис:</h3>
                    <p>
                        "Burnhouse Lane" розповідає історію Енджі Везер,
                        медсестри агентства, яка вже однією ногою в могилі і
                        намагається виконати п'ять нездійсненних завдань, щоб
                        повернути своє життя назад. Розв'язуйте головоломки,
                        заводьте друзів і ворогів, біжіть, ховайтеся і боріться
                        в цій похмурій пригоді, яка перенесе вас в інший світ і
                        назад...
                    </p>
                </div>
            </S_GameInfo>
        </S_CardContainer>
    );
};

export default LocalizationCard;
