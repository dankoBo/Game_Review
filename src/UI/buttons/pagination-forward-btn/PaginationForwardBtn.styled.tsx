import styled, { keyframes } from 'styled-components';

const arrowAnimation = keyframes`
    0% {
        margin-left: 0px;
        opacity: 0;
    }
    100% {
        margin-left: 10px;
        opacity: 1;
    }
`;

const S_Button = styled.button`
    border: none;
    border-radius: 10px;
    background-color: #1d2129;
    box-shadow: 0px 0px 10px #bebebe;
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
    border: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f59aff;

    svg {
        transition-duration: 1.5s;
    }

    &:hover svg {
        animation: ${arrowAnimation} 0.8s linear infinite;
    }
`;

export { S_Button, S_IconContainer };
