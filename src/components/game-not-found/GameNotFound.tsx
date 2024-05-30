import { S_Container, S_Message, S_Img } from './GameNotFound.styled';
import sadMoon from '@/assets/images/content/sad_moon.png';

const GameNotFound = () => {
    return (
        <S_Container>
            <S_Message>
                На жаль, жодної гри не знайдено за вашим запитом
            </S_Message>
            <div>
                <S_Img src={sadMoon} alt="сумний місяць" />
            </div>
        </S_Container>
    );
}
 
export default GameNotFound;