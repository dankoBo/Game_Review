import { MouseEventHandler } from 'react';
import { useAdminPanel } from '@/store/admin-panel.store';
import { S_Button } from '@/UI/buttons/login-button/LoginButton.styled';

type LoginBtnProps = {
    onClick: MouseEventHandler<HTMLButtonElement>;
};

const LoginButton: React.FC<LoginBtnProps> = ({ onClick }) => {
    const { isAdminPanelOpen } = useAdminPanel();
    return <S_Button disabled={isAdminPanelOpen} onClick={onClick}></S_Button>;
};

export default LoginButton;
