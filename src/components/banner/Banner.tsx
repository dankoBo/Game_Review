import { S_Container, S_Twinkling } from '@/components/banner/Banner.styled';
import GameInfo from '@/components/game-info/GameInfo';
import { useLogin } from '@/store/login.store';
import { useGameInfo } from '@/store/game-info.store';
import { useAdminPanel } from '@/store/admin-panel.store';

const Banner = () => {
    const { isLoginOpen } = useLogin();
    const { isGameInfoOpen } = useGameInfo();
    const { isAdminPanelOpen } = useAdminPanel();

    return (
        <S_Container>
                { isGameInfoOpen && <GameInfo /> }
            <S_Twinkling>
                <Moon />
            { isLoginOpen && <LoginForm /> }
            { isAdminPanelOpen && <AdminControls /> }
            </S_Twinkling>
        </S_Container>
    );
}

export default Banner;
