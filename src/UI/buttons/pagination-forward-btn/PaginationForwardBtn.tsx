import { MouseEventHandler } from 'react';
import { S_Button, S_IconContainer } from './PaginationForwardBtn.styled';

type PaginationButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled: boolean;
};

const PaginationForwardBtn: React.FC<PaginationButtonProps> = (props) => {
    return (
        <S_Button
            onClick={props.onClick}
        >
            <S_IconContainer>
                <svg
                    width="16"
                    height="19"
                    viewBox="0 0 16 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
                    <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
                    <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
                    <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
                    <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
                    <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
                    <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
                    <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
                    <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
                    <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
                </svg>
            </S_IconContainer>
        </S_Button>
    )
};

export default PaginationForwardBtn;
