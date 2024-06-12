import styled, { keyframes } from 'styled-components';
import starsImage from '@/assets/images/banner/Stars_sm_cut.avif';
import twinklingImage from '@/assets/images/banner/Twinkling.avif';
import starsImageTablet from '@/assets/images/banner/Stars_sm_cut-768.avif';
import starsImageMobile from '@/assets/images/banner/Stars_sm_cut-370.avif';

const moveTwinkBack = keyframes`
    from {
        background-position: 0 0;
    }
    to {
        background-position: -10000px 5000px;
    }
`;

const S_Container = styled.div`
    width: 100%;
    height: 280px;
    border-radius: 25px 25px 0 0;
    background-color: #000000;
    background-image: url(${starsImage});
    overflow: hidden;

    @media (max-width: 768px) {
        height: 200px;
        background-image: url(${starsImageTablet});
    }

    @media (max-width: 370px) {
        background-image: url(${starsImageMobile});
    }
`

const S_Twinkling = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: transparent;
    background-image: url(${twinklingImage});
    z-index: 1;

    animation: ${ moveTwinkBack } 200s linear infinite;
    -webkit-animation: ${ moveTwinkBack } 200s linear infinite;
    -moz-animation: ${ moveTwinkBack } 200s linear infinite;
    -ms-animation: ${ moveTwinkBack } 200s linear infinite;
`

export { S_Container, S_Twinkling };
