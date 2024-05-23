import { S_Container, S_NavBar, S_NavContainer, S_MainContent } from './Content.styled';
import Navigtion from "../../components/navigation/Navigation";
import GamesCards from '../../components/cards/GamesCards';
import Search from '@/components/search/Search';

const Content = () => {
    return (
        <S_Container>
            <S_NavBar>
                <S_NavContainer>
                    <Navigtion />
                </S_NavContainer>
                <Search />
            </S_NavBar>
            <S_MainContent>
                <GamesCards />
            </S_MainContent>
        </S_Container>
    );
}
 
export default Content;
