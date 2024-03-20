import { S_Button } from './Button.styled';
import { MouseEventHandler } from 'react';


type ButtonProps = {
    primary?: boolean;
    name: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    return <S_Button onClick={props.onClick} $primary={props.primary}>{props.name}</S_Button>
}
 
export default Button;