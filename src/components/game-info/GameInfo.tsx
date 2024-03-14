import Button from '../../UI/buttons/primary-btn/Button';
import { S_Container, S_InputWrapper, S_FileInput, S_TextInput, S_TextArea, S_ButtonsContainer } from './GameInfo.styled'

const GameInfo = () => {
    return (
        <S_Container>
            <form action="">
                <S_InputWrapper>
                    <S_FileInput type="file" accept=".png" />
                </S_InputWrapper>
                <S_InputWrapper>
                    <S_TextInput type="text" placeholder='Назва'/>
                </S_InputWrapper>
                <S_InputWrapper>
                    <S_TextInput type="text" placeholder='Жанр'/>
                </S_InputWrapper>
                <S_InputWrapper>
                    <S_TextArea cols={30} rows={10} placeholder="Рецензія"></S_TextArea>
                </S_InputWrapper>
            </form>
            <S_ButtonsContainer>
                <Button 
                    name="Зберегти"
                    primary
                />
                <Button 
                    name="Скасувати"
                />
            </S_ButtonsContainer>
        </S_Container>
    );
}
 
export default GameInfo;