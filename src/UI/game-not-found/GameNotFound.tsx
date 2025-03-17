import gameNotFoundImg from '@/assets/images/emoji/game_not_found.png';
import {
    S_NotFoundContainer,
    S_NotFoundMessage,
    S_NotFoundImg,
} from './GameNotFound.styled';

const GameNotFound = () => {
    return (
        <S_NotFoundContainer>
            <S_NotFoundMessage>
                На жаль, жодної гри не знайдено
            </S_NotFoundMessage>
            <div>
                <S_NotFoundImg src={gameNotFoundImg} alt="сумний місяць" />
            </div>
        </S_NotFoundContainer>
    );
};

export default GameNotFound;
