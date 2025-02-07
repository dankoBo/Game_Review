import styled from "styled-components";

const S_CardContainer = styled.div`
    width: 1140px;
    height: 422px;
    border: 1px solid red;
`

const S_GameCover = styled.div`
    width: 248px;
    height: 352px;
    border: 1px solid blue;
    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
`

export { S_CardContainer, S_GameCover };