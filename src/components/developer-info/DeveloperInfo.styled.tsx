import styled from 'styled-components';
import { PiHeartStraightFill } from "react-icons/pi";

const S_Container = styled.div`
    width: 270px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const S_Info = styled.div`
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    color: #fafafa;
`;

const S_Developer = styled.div`
    font-family: 'Exo 2', sans-serif;
    font-size: 14px;
    font-weight: 500;
    word-spacing: 4px;
`;

const S_Owner = styled.span`
    font-family: 'Orbitron', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #fafafa;
    letter-spacing: 1.5px;
`;

const S_HeartIcon = styled(PiHeartStraightFill)`
    font-size: 16px;
    color: #f59aff;
`

const S_Year = styled.p`
    font-family: 'Exo 2', sans-serif;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const S_ImgContainer = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    z-index: 20;
`;

const S_Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    z-index: 1;
`;

export {
    S_Container,
    S_Info,
    S_Developer,
    S_Owner,
    S_HeartIcon,
    S_ImgContainer,
    S_Img,
    S_Year,
};
