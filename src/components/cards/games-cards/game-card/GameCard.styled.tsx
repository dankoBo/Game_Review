import styled from 'styled-components'

const S_Container = styled.div`
    position: relative;
    max-width: 600px;
    max-height: 200px;
    background-color: #292929;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 2px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
    }
`

const S_Img = styled.img`
    width: 100%;
    height: auto;
    fill: #FAFAFA;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`

const S_Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #292929;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    ${ S_Container }:hover & {
        transform: rotateX(0deg);
    }
`

const S_Title = styled.div`
    font-family: Literata;
    font-size: 24px;
    color: #FAFAFA;
`

const S_Genre = styled.div`
    font-family: Literata;
    color: #FAFAFA;
`

const S_Review = styled.div`
    margin: 10px 0 0;
    font-size: 14px;
    color: #FAFAFA;
    line-height: 1.4;
`

export { S_Container, S_Content, S_Img, S_Title, S_Genre, S_Review }