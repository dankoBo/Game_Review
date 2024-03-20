// import GameCard from '../cards/games-cards/game-card/GameCard';
import LoginForm from '../login-form/LoginForm';
import { S_Container, S_Twinkling } from './Banner.styled';
import Moon from './moon/Moon';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store'

const Banner = () => {
    const isOpen = useSelector((state: RootState) => state.showLogin.isOpen);

    return (
        <S_Container>
            <S_Twinkling>
                <Moon />
            { isOpen && <LoginForm /> }
            </S_Twinkling>
        </S_Container>
    );
}

export default Banner;
