import LoginBtn from './login-btn/LoginBtn';
import { S_Container, S_MoonContent } from './Moon.styled';
import { useDispatch } from 'react-redux';
import { openLogin } from '../../../store/showLoginSlice';

const Moon = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(openLogin());
    };

    return (
        <S_Container>
            <S_MoonContent />
            <LoginBtn onClick={handleClick} />
        </S_Container>
    );
}
 
export default Moon;
