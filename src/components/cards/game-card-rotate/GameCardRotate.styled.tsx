import styled from 'styled-components';

type FlippableProps = {
    $isFlipped: boolean;
};

const S_Container = styled.div`
    max-width: 640px;
    height: 230px;
    perspective: 1000px;
`;

const S_Content = styled.div<FlippableProps>`
    width: 100%;
    height: 230px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
    border-radius: 10px;
    box-shadow: 0 0 0 0px #ffffff80;
    transform: ${(props) =>
        props.$isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
    @media (hover: hover) and (pointer: fine) {
        ${S_Container}:hover & {
            transform: rotateY(180deg);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
        }
    }
`;

const S_CardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 230px;
    border-radius: 10px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(0deg);
    overflow: hidden;
    background-color: #000000;
`;

const S_CardHeading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const S_Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
`;

const S_Caption = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: end;

    @media (max-width: 640px) {
        flex-direction: column;
        align-items: start;
    }
`;

const S_Title = styled.div`
    font-family: Roboto, sans-serif;
    font-size: 18px;
    color: #fafafa;

    @media (max-width: 500px) {
        font-size: 14px;
    }
`;

const S_EditDeleteButtons = styled.div`
    width: 50px;
    display: flex;
    justify-content: space-between;
    line-height: 10px;
`;

const S_Genre = styled.div`
    font-family: Roboto, sans-serif;
    color: #fafafa;
    font-size: 16px;

    @media (max-width: 500px) {
        font-size: 10px;
    }
`;

const S_CardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    backface-visibility: hidden;
    background-color: #292929;
    color: #fff;
    border-radius: 10px;
    font-size: 24px;
    transform: rotateY(180deg);
    overflow-y: auto;
`;

const S_Review = styled.div`
    font-family: Roboto, sans-serif;
    margin-top: 8px;
    padding: 10px 0;
    font-size: 14px;
    color: #fafafa;
    line-height: 1.4;
    height: 164px;
    overflow-y: auto;
`;

export {
    S_Container,
    S_Content,
    S_CardFront,
    S_CardHeading,
    S_Caption,
    S_CardBack,
    S_Img,
    S_Title,
    S_Genre,
    S_EditDeleteButtons,
    S_Review,
};
