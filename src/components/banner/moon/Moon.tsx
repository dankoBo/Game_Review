import LoginBtn from '@/components/banner/moon/login-btn/LoginBtn';
import { useLogin } from '@/store/login.store';
import {
    S_Container,
    S_MoonContent,
} from '@/components/banner/moon/Moon.styled';

const Moon = () => {
    const openLogin = useLogin((state) => state.openLogin);

    const handleClick = () => {
        openLogin();
    };

    return (
        <S_Container>
            <S_MoonContent>
                <LoginBtn onClick={handleClick} />
            </S_MoonContent>
        </S_Container>
    );
};

export default Moon;
