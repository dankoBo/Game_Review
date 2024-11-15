import { MouseEventHandler } from 'react';
import { S_Button } from '@/components/banner/moon/login-btn/LoginBtn.styled';

type LoginBtnProps = {
    onClick: MouseEventHandler<HTMLButtonElement>;
};

const LoginBtn: React.FC<LoginBtnProps> = ({ onClick }) => {
    return <S_Button onClick={onClick}></S_Button>;
};

export default LoginBtn;
