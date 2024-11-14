import { MouseEventHandler } from 'react';
import { S_Button, S_IconContainer } from './PaginationBackBtn.styled'

type PaginationButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled: boolean;
};

const PaginationBackBtn: React.FC<PaginationButtonProps> = (props) => {
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
                    <circle cx="13.3868" cy="1.61321" r="1.5" fill="black"></circle>
                    <circle cx="9.26417" cy="1.61321" r="1.5" fill="black"></circle>
                    <circle cx="9.26417" cy="5.5566" r="1.5" fill="black"></circle>
                    <circle cx="5.14149" cy="5.5566" r="1.5" fill="black"></circle>
                    <circle cx="5.14149" cy="9.5" r="1.5" fill="black"></circle>
                    <circle cx="1.01889" cy="9.5" r="1.5" fill="black"></circle>
                    <circle cx="9.26417" cy="13.4434" r="1.5" fill="black"></circle>
                    <circle cx="5.14149" cy="13.4434" r="1.5" fill="black"></circle>
                    <circle cx="13.3868" cy="17.3868" r="1.5" fill="black"></circle>
                    <circle cx="9.26417" cy="17.3868" r="1.5" fill="black"></circle>
                </svg>
            </S_IconContainer>
        </S_Button>
    )
};

export default PaginationBackBtn;
