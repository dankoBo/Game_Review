import styled from 'styled-components';

type FlippableProps = {
    $isFlipped: boolean;
};

const S_Container = styled.div`
    width: 100%;
    max-width: 640px;
    min-height: 150px;
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
    min-height: 50px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;

const S_Caption = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const S_RatingAndControls = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-end;
`

const S_Title = styled.div`
    font-family: Roboto, sans-serif;
    font-size: 18px;
    color: #fafafa;

    @media (max-width: 500px) {
        font-size: 14px;
    }
`;

const S_Genre = styled.div`
    font-family: Roboto, sans-serif;
    color: #fafafa;
    font-size: 14px;
    
    @media (max-width: 500px) {
        font-size: 10px;
    }
`;

const S_EditDeleteButtons = styled.div`
    display: flex;
    gap: 8px;
`;

const S_Review = styled.div`
    font-family: Roboto, sans-serif;
    margin-top: 8px;
    padding: 10px 0;
    font-size: 14px;
    color: #fafafa;
    line-height: 1.4;
    height: 150px;
    overflow-y: auto;
`;

export {
    S_Container,
    S_Content,
    S_CardFront,
    S_CardHeading,
    S_Caption,
    S_RatingAndControls,
    S_CardBack,
    S_Img,
    S_Title,
    S_Genre,
    S_EditDeleteButtons,
    S_Review,
};
