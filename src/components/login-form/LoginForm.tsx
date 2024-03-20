import Button from '../../UI/buttons/primary-btn/Button';
import { S_Container, S_InputWrapper, S_PasswordInput, S_BtnContainer } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { closeLogin } from '../../store/showLoginSlice'


const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
    }

    const handleCloseForm = (event: React.MouseEvent) => {
        dispatch(closeLogin())
        event.preventDefault();
    }

    return (
        <S_Container>
            <form onSubmit={handleSubmit}>
                <S_InputWrapper>
                    <S_PasswordInput type="password" placeholder='Пароль' />
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
