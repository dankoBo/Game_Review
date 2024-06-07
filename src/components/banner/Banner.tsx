import LoginForm from '@/components/login-form/LoginForm';
import { S_Container, S_Twinkling } from '@/components/banner/Banner.styled';
import Moon from '@/components/banner/moon/Moon';
import { useLogin } from '@/store/login.store';
import GameInfo from '@/components/game-info/GameInfo';
import { useGameInfo } from '@/store/game-info.store';
import AdminControls from '../admin-controls/AdminControls';

const Banner = () => {
    const { isLoginOpen } = useLogin();
    const { isGameInfoOpen } = useGameInfo();

    return (
        <S_Container>
                { isGameInfoOpen && <GameInfo /> }
            <S_Twinkling>
                <Moon />
            { isLoginOpen && <LoginForm /> }
            <AdminControls />
            </S_Twinkling>
        </S_Container>
    );
}

export default Banner;
