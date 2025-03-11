import LoginButton from '@/UI/buttons/login-button/LoginButton';
import { useLogin } from '@/store/login.store';
import {
    S_MoonContainer,
    S_MoonContent,
} from '@/components/banner/moon/Moon.styled';

import { getAuth } from "firebase/auth";


const Moon = () => {
    const openLogin = useLogin((state) => state.openLogin);
    const auth = getAuth();

    const handleClick = () => {
        openLogin();
        console.log(auth);
        
    };

    return (
        <S_MoonContainer>
            <S_MoonContent>
                <LoginButton onClick={handleClick} />
            </S_MoonContent>
        </S_MoonContainer>
    );
};

export default Moon;
