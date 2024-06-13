import { S_Button } from './DeleteButton.styled';
import { MouseEventHandler, FC } from 'react';
import { MdDelete } from 'react-icons/md';

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const EditButton: FC<ButtonProps> = (props) => {
    return (
        <S_Button onClick={props.onClick}>
            <MdDelete />
        </S_Button>
    );
};

export default EditButton;
