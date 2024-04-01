import { useState, useEffect } from 'react'
import Button from '../../UI/buttons/primary-btn/Button';
import { S_Container, S_InputWrapper, S_PasswordInput, S_BtnContainer } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { closeLogin } from '../../store/showLoginSlice';
import { openGameInfo } from '../../store/showGameInfoSlice';

const LoginForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const dispatch = useDispatch();

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
            dispatch(openGameInfo())
            dispatch(closeLogin())

        } else {
            console.log('password declaine');
        }
    }

    const handleCloseForm = (event: React.MouseEvent) => {
        event.preventDefault();
    }

    return (
        <S_Container>
            <form onSubmit={handleSubmit}>
                <S_InputWrapper>
                    <S_PasswordInput onChange={handleChange} type="password" placeholder='Пароль' />
                </S_InputWrapper>
                <S_BtnContainer>
                    <Button type="submit" primary name="Увійти" />
                    <Button type="button" onClick={handleCloseForm} name="Скасувати" />
                </S_BtnContainer>
            </form>
        </S_Container>
    );
}
 
export default LoginForm;
