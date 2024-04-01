import Button from '../../UI/buttons/primary-btn/Button';
import { S_Container, S_InputWrapper, S_FileInput, S_TextInput, S_TextArea, S_ButtonsContainer } from './GameInfo.styled';
import { useDispatch } from 'react-redux';
import { closeGameInfo } from '../../store/showGameInfoSlice'

const GameInfo = () => {
    const dispatch = useDispatch()

    const handleCloseGameInfo = () => {
        dispatch(closeGameInfo())
    }
    return (
        <S_Container>
            <form>
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
                <Button
                    type='button' 
                    name="Зберегти"
                    primary
                />
                <Button
                    type='button' 
                    name="Скасувати"
                    onClick={handleCloseGameInfo}
                />
            </S_ButtonsContainer>
        </S_Container>
    );
}
 
export default GameInfo;