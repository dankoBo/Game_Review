import Moon from '@/components/banner/moon/Moon';
import LoginForm from '@/components/login-form/LoginForm';
import AdminPanel from '../admin-panel/AdminPanel';
import { useLogin } from '@/store/login.store';
import { useAdminPanel } from '@/store/admin-panel.store';
import Toaster from '@/UI/toaster/Toaster';
import { S_BannerContainer, S_BannerTwinkling } from '@/components/banner/Banner.styled';

import { useToaster } from '@/store/toaster.store';

const Banner = () => {
    const { isLoginOpen } = useLogin();
    const { isAdminPanelOpen } = useAdminPanel();
    const { toasterType, isVisible } = useToaster();

    return (
        <S_BannerContainer>
            <S_BannerTwinkling>
                <Moon />
                {isVisible && <Toaster type={toasterType} />}
                {isLoginOpen && <LoginForm />}
                {isAdminPanelOpen && <AdminPanel />}
            </S_BannerTwinkling>
        </S_BannerContainer>
    );
};

export default Banner;
