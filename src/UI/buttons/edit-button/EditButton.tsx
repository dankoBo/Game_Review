import { S_Button } from './EditButton.styled';
import { MouseEventHandler, FC } from 'react';
import { MdEditDocument } from 'react-icons/md';

type EditButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const EditButton: FC<EditButtonProps> = (props) => {
    return (
        <S_Button onClick={props.onClick}>
            <MdEditDocument />
        </S_Button>
    );
};

export default EditButton;
