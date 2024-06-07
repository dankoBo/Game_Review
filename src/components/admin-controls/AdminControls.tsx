import Button from '@/UI/buttons/primary-btn/Button';
import { S_ControlsContainer } from './AdminControls.styled';
import { useGameInfo } from '@/store/game-info.store';

const AdminControls = () => {
    const openGameInfo = useGameInfo(state => state.openGameInfo);

    const handleOpenGameInfo = () => {
        openGameInfo()
    }

    return (
        <S_ControlsContainer>
            <Button name="Додати" btnColor='#28a745' onClick={handleOpenGameInfo} />
            <Button name="Вийти" btnColor='#dc3545' />
        </S_ControlsContainer>
    );
}
 
export default AdminControls;