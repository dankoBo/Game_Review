import { auth } from '@/firebase/firebaseAuth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import FormInput from '@/UI/form-input/FormInput';
import Button from '@/UI/buttons/primary-button/Button';
import { useLogin } from '@/store/login.store';
import { useAdminPanel } from '@/store/admin-panel.store';
import {
    S_Container,
    S_Form,
    S_BtnContainer,
} from '@/components/login-form/LoginForm.styled';

const LoginForm = () => {
    const closeLogin = useLogin((state) => state.closeLogin);
    const openAdminPanel = useAdminPanel((state) => state.openAdminPanel);
    const setToasterType = useToaster((state) => state.setToasterType);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdminEmailInput(event.target.value);
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setAdminPasswordInput(event.target.value);
    };

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                adminEmailInput,
                adminPasswordInput,
            );
            if (userCredential.user) {
                openAdminPanel();
                closeLogin();
                setToasterType('loginSuccess');
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
                        type="text"
                        placeholder="Email"
                    />
                </div>
                <div>
                    <FormInput
                        type="password"
                        placeholder="Пароль"
                    />
                </div>
                <S_BtnContainer>
                    <Button name="Увійти" type="submit" btnColor="#1e90ff" />
                    <Button
                        name="Скасувати"
                        type="button"
                        btnColor="#ff4500"
                        onClick={handleCloseForm}
                    />
                </S_BtnContainer>
            </S_Form>
        </S_Container>
    );
};

export default LoginForm;
