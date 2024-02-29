import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    width: 300px;
    height: 200px;
    background-color: #292929;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
        box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
    }
`

const CardImg = styled.img`
    width: 48px;
    fill: #FAFAFA;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    /* ${ Container }:hover & {
        scale: 0;
    } */
`

const CardContent = styled.div`
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

    ${ Container }:hover & {
        transform: rotateX(0deg);
    }
`

const CardTitle = styled.div`
    font-family: Literata;
    font-size: 24px;
    color: #FAFAFA;
`

const CardDescription = styled.div`
    margin: 10px 0 0;
    font-size: 14px;
    color: #FAFAFA;
    line-height: 1.4;
`

export { Container, CardContent, CardImg, CardTitle, CardDescription }