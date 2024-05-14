import styled from 'styled-components';

const S_Container = styled.div`
    max-width: 640px;
    height: 220px;
    perspective: 1000px;
    background-color: #171717;
`

const S_Content = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
    border-radius: 10px;
    box-shadow: 0 0 0 0px #FFFFFF80;
    ${S_Container}:hover & {
        transform: rotateY(180deg);
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
    }
`

const S_CardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 220px;
    border-radius: 10px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(0deg);
    overflow: hidden;
    border: 1px solid green;
`

const S_Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`

const S_Caption = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const S_CardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    backface-visibility: hidden;
    background-color: #292929;
    color: #fff;
    border-radius: 10px;
    font-size: 24px;
    transform: rotateY(180deg);
    overflow-y: auto;
`


const S_Title = styled.div`
    font-family: Literata;
    font-size: 24px;
    color: #FAFAFA;
`

const S_Genre = styled.div`
    font-family: Literata;
    color: #FAFAFA;
    font-size: 16px;
`

const S_Review = styled.div`
    font-family: Roboto, sans-serif;
    padding: 10px 0;
    font-size: 14px;
    color: #FAFAFA;
    line-height: 1.4;
    height: 170px;
    border: 2px solid red;
    overflow-y: auto;
`

export { S_Container, S_Content, S_CardFront, S_Caption, S_CardBack, S_Img, S_Title, S_Genre, S_Review }