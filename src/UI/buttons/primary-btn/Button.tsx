import { FC } from 'react';
import { S_Button } from './Button.styled'

type ButtonProps = {
    primary?: boolean;
    name: string;
}

const Button: FC<ButtonProps> = (props) => {
    return <S_Button $primary={props.primary}>{props.name}</S_Button>
}
 
export default Button;