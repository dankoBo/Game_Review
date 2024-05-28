import LoginBtn from '@/components/banner/moon/login-btn/LoginBtn';
import { S_Container, S_MoonContent } from '@/components/banner/moon/Moon.styled';
import { useLogin } from '@/store/login.store';

const Moon = () => {
    const openLogin  = useLogin(state => state.openLogin);

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
}
 
export default Moon;
