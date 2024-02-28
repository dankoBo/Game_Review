import styled, { keyframes } from 'styled-components'

const moveTwinkBack = keyframes`
    from {
        background-position: 0 0;
    }
    to {
        background-position: -10000px 5000px;
    }
`;

const Container = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 25px 25px 0 0;
    background-color: #000000;
    background-image: url('/src/assets/images/banner/stars_sm.png');
    overflow: hidden;
`

const Twinkling = styled.div`
    width: 100%;
    height: 100%;
    background: transparent;
    background-image: url('/src/assets/images/banner/Twinkling.png');
    z-index: 1;

    animation: ${ moveTwinkBack } 200s linear infinite;
    -webkit-animation: ${ moveTwinkBack } 200s linear infinite;
    -moz-animation: ${ moveTwinkBack } 200s linear infinite;
    -ms-animation: ${ moveTwinkBack } 200s linear infinite;
`

export { Container, Twinkling }