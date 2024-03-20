import { S_Container, S_NavContainer, S_MainContent } from './Content.styled';
import Navigtion from "../../components/navigation/Navigation";
import GameInfo from '../../components/game-info/GameInfo';
// import GamesCards from '../../components/cards/games-cards/GamesCards';

const Content = () => {

    return (
        <S_Container>
            <S_NavContainer>
                <Navigtion />
            </S_NavContainer>
            <S_MainContent>
                <GameInfo />
                {/* <GamesCards /> */}
                
            </S_MainContent>
        </S_Container>
    );
}
 
export default Content;
