import { S_ControlsContainer } from './AdminControls.styled';
import Button from '@/UI/buttons/primary-btn/Button';
import { useGameInfo } from '@/store/game-info.store';
import { useAdminPanel } from '@/store/admin-panel.store';

const AdminControls = () => {
    const openGameInfo = useGameInfo((state) => state.openGameInfo);
    const { closeAdminPanel } = useAdminPanel();

    const handleOpenGameInfo = () => {
        openGameInfo();
    };

    const handleLogOut = () => {
        closeAdminPanel();
    };

    return (
        <S_ControlsContainer>
            <Button
                name="Додати"
                btnColor="#28A745"
                onClick={handleOpenGameInfo}
            />
            <Button name="Вийти" btnColor="#DC3545" onClick={handleLogOut} />
        </S_ControlsContainer>
    );
};

export default AdminControls;
