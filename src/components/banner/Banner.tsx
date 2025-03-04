import GameInfo from '@/components/game-info/GameInfo';
import Moon from '@/components/banner/moon/Moon';
import LoginForm from '@/components/login-form/LoginForm';
import AdminControls from '../admin-controls/AdminControls';
import { useLogin } from '@/store/login.store';
import { useGameInfo } from '@/store/game-info.store';
import { useAdminPanel } from '@/store/admin-panel.store';
import { S_BannerContainer, S_BannerTwinkling } from '@/components/banner/Banner.styled';

const Banner = () => {
    const { isLoginOpen } = useLogin();
    const { isGameInfoOpen } = useGameInfo();
    const { isAdminPanelOpen } = useAdminPanel();

    return (
        <S_BannerContainer>
            {isGameInfoOpen && <GameInfo />}
            <S_BannerTwinkling>
                <Moon />
                {isLoginOpen && <LoginForm />}
                {isAdminPanelOpen && <AdminControls />}
            </S_BannerTwinkling>
        </S_BannerContainer>
    );
};

export default Banner;
