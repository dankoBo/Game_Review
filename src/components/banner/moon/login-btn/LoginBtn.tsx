import { S_Button } from '@/components/banner/moon/login-btn/LoginBtn.styled';
import { MouseEventHandler } from 'react';

type LoginBtnProps = {
    onClick: MouseEventHandler<HTMLButtonElement>;
};

const LoginBtn: React.FC<LoginBtnProps> = ({ onClick }) => {
    return <S_Button onClick={onClick}></S_Button>;
};
 
export default LoginBtn;
