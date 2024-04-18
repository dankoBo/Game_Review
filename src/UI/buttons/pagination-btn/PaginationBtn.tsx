import { S_Button } from './PaginationBtn.styled';
import { MouseEventHandler } from 'react';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled: boolean;
}

const PaginationBtn: React.FC<ButtonProps> = (props) => {
    return <S_Button onClick={props.onClick}>Button</S_Button>
}
 
export default PaginationBtn;