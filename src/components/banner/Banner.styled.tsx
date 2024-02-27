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
    height: 500px;
    border: 1px solid red;
    background-color: #000000;
    background-image: url('/src/assets/images/banner/stars.png');
    background-repeat: repeat;
    background-position: top center;
    overflow: hidden;
`

const Twinkling = styled.div`
    width: 100%;
    height: 100%;
    background: transparent;
    background-image: url('/src/assets/images/banner/Twinkling.png');
    background-repeat: repeat;
    background-position: top center;
    z-index: -1;

    animation: ${moveTwinkBack} 200s linear infinite;
    -webkit-animation: ${moveTwinkBack} 200s linear infinite;
    -moz-animation: ${moveTwinkBack} 200s linear infinite;
    -ms-animation: ${moveTwinkBack} 200s linear infinite;
`

export { Container, Twinkling }