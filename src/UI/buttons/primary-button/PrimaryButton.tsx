import { MouseEventHandler } from 'react';
import { S_Button } from '@/UI/buttons/primary-button/PrimaryButton.styled';

type ButtonProps = {
    primary?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit';
    name: string;
    btnColor: string;
};

const PrimaryButton: React.FC<ButtonProps> = (props) => {
    return (
        <S_Button
            type={props.type}
            onClick={props.onClick}
            $bgColor={props.btnColor}
        >
            {props.name}
        </S_Button>
    );
};

export default PrimaryButton;
