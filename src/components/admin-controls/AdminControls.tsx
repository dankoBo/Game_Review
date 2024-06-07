import Button from '@/UI/buttons/primary-btn/Button';
import { S_ControlsContainer } from './AdminControls.styled';

const AdminControls = () => {
    return (
        <S_ControlsContainer>
            <Button name="Додати" btnColor='#28a745' />
            <Button name="Вийти" btnColor='#dc3545' />
        </S_ControlsContainer>
    );
}
 
export default AdminControls;