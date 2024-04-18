import { useState, useEffect } from 'react'
import Button from '../../UI/buttons/primary-btn/Button';
import { S_Container, S_InputWrapper, S_PasswordInput, S_BtnContainer } from './LoginForm.styled';
import { useLogin } from '../../store/login.store';
import { useGameInfo } from '../../store/game-info.store';

const LoginForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const closeLogin = useLogin(state => state.closeLogin)
    const openGameInfo = useGameInfo(state => state.openGameInfo)

    useEffect(() => {
        setAdminPassword(import.meta.env.VITE_ADMIN_PASSWORD);
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if (inputValue === adminPassword) {
            console.log('Password good');
            openGameInfo()
            closeLogin()

        } else {
            console.log('password declaine');
        }
    }

    const handleCloseForm = (event: React.MouseEvent) => {
        event.preventDefault();
        closeLogin()
    }

    return (
        <S_Container>
            <form onSubmit={handleSubmit}>
                <S_InputWrapper>
                    <S_PasswordInput onChange={handleChange} type="password" placeholder='Пароль' />
                </S_InputWrapper>
                <S_BtnContainer>
                    <Button type="submit" primary>Увійти</Button>
                    <Button type="button" onClick={handleCloseForm}>Скасувати</Button>
                </S_BtnContainer>
            </form>
        </S_Container>
    );
}
 
export default LoginForm;
