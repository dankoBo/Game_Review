import LoginBtn from './login-btn/LoginBtn';
import { S_Container, S_MoonContent } from './Moon.styled'

const Moon = () => {
    return (
        <S_Container>
            <S_MoonContent />
            <LoginBtn />
        </S_Container>
    )
}
 
export default Moon;