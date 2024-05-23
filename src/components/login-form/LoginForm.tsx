import { useState, useEffect } from 'react';
import FormInput from '@/UI/form-input/FormInput';
import Button from '@/UI/buttons/primary-btn/Button';
import { S_Container, S_Form, S_BtnContainer, S_ErrorMessage } from '@/components/login-form/LoginForm.styled';
import { useLogin } from '@/store/login.store';
import { useGameInfo } from '@/store/game-info.store';

const LoginForm = () => {
    const [adminNameInput, setAdminNameInput] = useState('');
    const [adminPasswordInput, setAdminPasswordInput] = useState('');
    const [adminName, setAdminName] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [loginDeclaine, setLoginDeclaine] = useState(false);

    const closeLogin = useLogin(state => state.closeLogin);
    const openGameInfo = useGameInfo(state => state.openGameInfo);

    useEffect(() => {
        setAdminName(import.meta.env.VITE_ADMIN_LOGIN);
        setAdminPassword(import.meta.env.VITE_ADMIN_PASSWORD);
    }, []);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdminNameInput(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdminPasswordInput(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (adminNameInput === adminName && adminPasswordInput === adminPassword) {
            openGameInfo();
            closeLogin();
        } else {
            setLoginDeclaine(true)
        }
    };

    const handleCloseForm = (event: React.MouseEvent) => {
        event.preventDefault();
        closeLogin();
    };

    return (
        <S_Container>
            <S_Form onSubmit={handleSubmit}>
                <div>
                    <FormInput
                        onChange={handleNameChange}
                        type="text"
                        placeholder='Логін' 
                    />
                </div>
                <div>
                    <FormInput
                        onChange={handlePasswordChange}
                        type="password"
                        placeholder='Пароль' 
                    />
                </div>
                {
                    loginDeclaine && <S_ErrorMessage>Невірні логін або пароль</S_ErrorMessage>
                }
                <S_BtnContainer>
                    <Button
                        name="Увійти"
                        type="submit" 
                        primary
                    />
                    <Button
                        name="Скасувати"
                        type="button" 
                        onClick={handleCloseForm}
                    />
                </S_BtnContainer>
            </S_Form>
        </S_Container>
    );
};
 
export default LoginForm;
