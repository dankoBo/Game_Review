import { S_Button } from '@/UI/buttons/primary-btn/Button.styled';
import { MouseEventHandler } from 'react';

type ButtonProps = {
    primary?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type: string;
    name: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <S_Button onClick={props.onClick} $primary={props.primary}>
            {props.name}
        </S_Button>
    )
}
 
export default Button;