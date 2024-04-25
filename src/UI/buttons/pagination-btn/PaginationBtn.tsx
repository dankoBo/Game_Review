import { S_Button } from './PaginationBtn.styled';
import { MouseEventHandler } from 'react';

type ButtonProps = {
    direction: JSX.Element;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled: boolean;
}

const PaginationBtn: React.FC<ButtonProps> = (props) => {
    return <S_Button onClick={props.onClick}>{props.direction}</S_Button>
}
 
export default PaginationBtn;