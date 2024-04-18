import { ReactNode } from 'react';
import { S_Button } from './Button.styled';
import { MouseEventHandler } from 'react';


type ButtonProps = {
    primary?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type: string;
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <S_Button onClick={props.onClick} $primary={props.primary}>
            {props.children}
        </S_Button>
    )
}
 
export default Button;