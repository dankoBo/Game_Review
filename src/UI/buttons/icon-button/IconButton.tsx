import { MouseEventHandler } from 'react';
import { IconType } from 'react-icons';
import { S_Button } from './IconButton.styled';

type IconButtonProps = {
    icon: IconType;
    color?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const IconButton = ({ icon: Icon, color, onClick }: IconButtonProps) => {
    return (
        <S_Button type="button" $color={color} onClick={onClick}>
            <Icon />
        </S_Button>
    );
};

export default IconButton;
