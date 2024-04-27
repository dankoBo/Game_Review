import LoginBtn from './login-btn/LoginBtn';
import { S_Container, S_MoonContent } from './Moon.styled';
import { useLogin } from '../../../store/login.store';

const Moon = () => {
    const openLogin  = useLogin(state => state.openLogin);

    const handleClick = () => {
        openLogin();
    };

    return (
        <S_Container>
            <S_MoonContent />
            <LoginBtn onClick={handleClick} />
        </S_Container>
    );
}
 
export default Moon;
