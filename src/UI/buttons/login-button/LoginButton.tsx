import { MouseEventHandler } from 'react';
import { S_Button } from '@/UI/buttons/login-button/LoginButton.styled';

type LoginBtnProps = {
    onClick: MouseEventHandler<HTMLButtonElement>;
};

const LoginButton: React.FC<LoginBtnProps> = ({ onClick }) => {
    return <S_Button onClick={onClick}></S_Button>;
};

export default LoginButton;
