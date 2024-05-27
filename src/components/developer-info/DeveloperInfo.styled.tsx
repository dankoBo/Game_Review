import styled from 'styled-components';

const S_Container = styled.div`
    width: 270px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const S_Info = styled.div`
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #FAFAFA;
`

const S_Developer = styled.div`
    font-family: Literata, sans-serif;
    word-spacing: 4px;
    font-size: 14px;
`

const S_Owner = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
`

const S_Year = styled.p`
    letter-spacing: 3px;
    font-size: 12px;
`

const S_ImgContainer = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    z-index: 20;
`

const S_Img = styled.img`
    width: 100%;
    height: auto;
    border-radius: 50%;
    transform: scale(1.2);
    z-index: 1;
`

export { S_Container, S_Info, S_Developer, S_Owner, S_ImgContainer, S_Img, S_Year };
