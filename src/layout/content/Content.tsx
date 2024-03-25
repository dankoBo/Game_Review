import { S_Container, S_NavContainer, S_MainContent } from './Content.styled';
import Navigtion from "../../components/navigation/Navigation";
import GameInfo from '../../components/game-info/GameInfo';
// import GamesCards from '../../components/cards/games-cards/GamesCards';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store'

const Content = () => {
    const isOpen = useSelector((state: RootState) => state.showGameInfo.isOpen);

    return (
        <S_Container>
            <S_NavContainer>
                <Navigtion />
            </S_NavContainer>
            <S_MainContent>
                
                {/* <GamesCards /> */}
                {
                    isOpen && <GameInfo />
                }
            </S_MainContent>
        </S_Container>
    );
}
 
export default Content;
