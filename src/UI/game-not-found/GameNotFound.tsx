import notFound from '@/assets/images/emoji/not_found.png';
import { S_Container, S_Message, S_Img } from './GameNotFound.styled';

const GameNotFound = () => {
    return (
        <S_Container>
            <S_Message>На жаль, жодної гри не знайдено</S_Message>
            <div>
                <S_Img src={notFound} alt="сумний місяць" />
            </div>
        </S_Container>
    );
};

export default GameNotFound;
