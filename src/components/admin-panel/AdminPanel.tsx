import { getAuth, signOut } from 'firebase/auth';
import Button from '@/UI/buttons/primary-button/PrimaryButton';
import { useGameInfo } from '@/store/game-info.store';
import { useAdminPanel } from '@/store/admin-panel.store';
import { useToaster } from '@/store/toaster.store';
import adminImg from '@/assets/images/emoji/admin_60.png';
import {
    S_AdminContainer,
    S_AdminHeader,
    S_AdminEmoji,
    S_AdminMessage,
    S_AdminControls,
} from './AdminPanel.styled';

const AdminPanel = () => {
    const openGameInfo = useGameInfo((state) => state.openGameInfo);
    const closeGameInfo = useGameInfo((state) => state.closeGameInfo);
    const setToasterType = useToaster((state) => state.setToasterType);
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
            setToasterType('logoutSuccess');
        } catch (error) {
            console.error('Помилка виходу:', error);
            setToasterType('errorMessage');
        }
    };

    return (
        <S_AdminContainer>
            <S_AdminHeader>
                <S_AdminEmoji src={adminImg} alt="moon" />
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
