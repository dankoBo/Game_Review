import { S_Button } from '@/UI/buttons/primary-btn/Button.styled';
import { MouseEventHandler } from 'react';

type ButtonProps = {
    primary?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: string;
    name: string;
    btnColor: string;
};

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <S_Button onClick={props.onClick} $bgColor={props.btnColor}>
            {props.name}
        </S_Button>
    );
};

export default Button;
