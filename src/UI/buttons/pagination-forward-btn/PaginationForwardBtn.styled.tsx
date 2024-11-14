import styled, { keyframes } from 'styled-components';

const arrowAnimation = keyframes`
    0% {
        opacity: 0;
        margin-left: 0px;
    }
    100% {
        opacity: 1;
        margin-left: 10px;
    }
`;

const S_Button = styled.button`
    background-color: #1d2129;
    box-shadow: 0px 0px 10px #bebebe;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    .icon-Container svg {
        transition-duration: 1.5s;
    }

    &:hover .icon-Container svg {
        animation: ${arrowAnimation} 0.8s linear infinite;
    }
`;

const S_IconContainer = styled.span`
    width: 55px;
    height: 35px;
    background-color: #f59aff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: none;

    svg {
        transition-duration: 1.5s;
    }

    &:hover svg {
        animation: ${arrowAnimation} 0.8s linear infinite;
    }
`;

export { S_Button, S_IconContainer };
