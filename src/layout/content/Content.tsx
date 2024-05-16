import { S_Container, S_NavContainer, S_MainContent } from './Content.styled';
import Navigtion from "../../components/navigation/Navigation";
import GamesCards from '../../components/cards/GamesCards';

const Content = () => {
    return (
        <S_Container>
            <S_NavContainer>
                <Navigtion />
            </S_NavContainer>
            <S_MainContent>
                <GamesCards />
            </S_MainContent>
        </S_Container>
    );
}
 
export default Content;
