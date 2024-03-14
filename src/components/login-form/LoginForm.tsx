import Button from '../../UI/buttons/primary-btn/Button';
import { S_Container, S_InputWrapper, S_PasswordInput, S_BtnContainer } from './LoginForm.styled'

const LoginForm = () => {
    return (
        <S_Container>
            <form>
                <S_InputWrapper>
                    <S_PasswordInput type="password" placeholder='Пароль' />
                </S_InputWrapper>
                <S_BtnContainer>
                    <Button primary name="Увійти" />
                    <Button name="Скасувати" />
                </S_BtnContainer>
            </form>
        </S_Container>
    );
}
 
export default LoginForm;