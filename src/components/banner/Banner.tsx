import LoginForm from '../login-form/LoginForm';
import { S_Container, S_Twinkling } from './Banner.styled';
import Moon from './moon/Moon';
import { useLogin } from '../../store/login.store';
import GameInfo from '../../components/game-info/GameInfo';
import { useGameInfo } from '../../store/game-info.store';



const Banner = () => {
    const { isLoginOpen } = useLogin()
    const { isGameInfoOpen } = useGameInfo()

    return (
        <S_Container>
                { isGameInfoOpen && <GameInfo /> }
            <S_Twinkling>
                <Moon />
            { isLoginOpen && <LoginForm /> }
            </S_Twinkling>
        </S_Container>
    );
}

export default Banner;
