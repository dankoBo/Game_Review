// import GameCard from '../cards/games-cards/game-card/GameCard';
import LoginForm from '../login-form/LoginForm';
import { S_Container, S_Twinkling } from './Banner.styled';
import Moon from './moon/Moon';
import { useLogin } from '../../store/login.store';

const Banner = () => {
    const { isLoginOpen } = useLogin()

    return (
        <S_Container>
            <S_Twinkling>
                <Moon />
            { isLoginOpen && <LoginForm /> }
            </S_Twinkling>
        </S_Container>
    );
}

export default Banner;
