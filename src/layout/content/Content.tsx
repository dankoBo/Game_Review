import { Container, NavContainer, MainContent } from './Content.styled'
import Navigtion from "../../components/navigation/Navigation";
import GameCard from '../../components/card/GameCard';

const Content = () => {
    return (
        <Container>
            <NavContainer>
                <Navigtion />
            </NavContainer>
            <MainContent>
                <GameCard />
            </MainContent>
        </Container>
    );
}
 
export default Content;