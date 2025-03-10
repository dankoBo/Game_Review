import { getAuth, signOut } from 'firebase/auth';
import Button from '@/UI/buttons/primary-button/Button';
import { useGameInfo } from '@/store/game-info.store';
import { useAdminPanel } from '@/store/admin-panel.store';
import adminImg from '@/assets/images/emoji/admin_60.png';
import { S_AdminContainer, S_AdminHeader, S_AdminMessage, S_AdminControls } from './AdminPanel.styled';

const AdminPanel = () => {
    const openGameInfo = useGameInfo((state) => state.openGameInfo);
    const closeGameInfo = useGameInfo((state) => state.closeGameInfo);
    const { closeAdminPanel } = useAdminPanel();

    const handleOpenGameInfo = () => {
        openGameInfo();
    };

    const handleLogOut = async () => {
        try {
            const auth = getAuth();
            await signOut(auth);
            closeAdminPanel();
            closeGameInfo();
            console.log('Вихід виконано');
        } catch (error) {
            console.error('Помилка виходу:', error);
        }
    };

    return (
        <S_AdminContainer>
            <S_AdminHeader>
                <img src={adminImg} alt="moon" />
                <S_AdminMessage>Система активована</S_AdminMessage>
            </S_AdminHeader>
            <S_AdminControls>
                <Button
                    name="Додати гру"
                    btnColor="#28A745"
                    onClick={handleOpenGameInfo}
                />
                <Button 
                    name="Вийти" 
                    btnColor="#DC3545" 
                    onClick={handleLogOut} 
                />
            </S_AdminControls>
        </S_AdminContainer>
    );
};

export default AdminPanel;
