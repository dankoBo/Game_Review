import { useState } from 'react';
import FormInput from '@/UI/form-input/FormInput';
import Button from '@/UI/buttons/primary-btn/Button';
import { S_Container, S_Form, S_BtnContainer, S_ErrorMessage } from '@/components/login-form/LoginForm.styled';
import { useLogin } from '@/store/login.store';
import { useGameInfo } from '@/store/game-info.store';
import { auth } from '@/firebaseAuth';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = () => {
    const [adminEmailInput, setAdminEmailInput] = useState('');
    const [adminPasswordInput, setAdminPasswordInput] = useState('');
    const [loginDeclaine, setLoginDecline] = useState(false);

    const closeLogin = useLogin(state => state.closeLogin);
    const openGameInfo = useGameInfo(state => state.openGameInfo);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdminEmailInput(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdminPasswordInput(event.target.value);
    };

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, adminEmailInput, adminPasswordInput);
            if (userCredential.user) {
                openGameInfo();
                closeLogin();
            }
        } catch (error) {
            setLoginDecline(true);
        }
    };

    const handleCloseForm = (event: React.MouseEvent) => {
        event.preventDefault();
        closeLogin();
    };

    return (
        <S_Container>
            <S_Form onSubmit={handleFormSubmit}>
                <div>
                    <FormInput
                        onChange={handleEmailChange}
                        type="text"
                        placeholder='Email' 
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
                    loginDeclaine && <S_ErrorMessage>Невірні пошта або пароль</S_ErrorMessage>
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
