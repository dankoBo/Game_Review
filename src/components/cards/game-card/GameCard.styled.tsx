import styled from 'styled-components';

const S_CardTitle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
    transition:
        scale 0.6s,
        rotate 0.6s,
        filter 1s;
    font-family: 'Orbitron', sans-serif;
    font-size: 60px;
    color: #ffffff;
    text-align: center;
`;

const S_CardContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    color: #e8e8e8;
    padding: 20px 24px;
    line-height: 1.5;
    border-radius: 5px;
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
`;

const S_Card = styled.div`
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
    position: relative;

    &:hover ${S_CardTitle} {
        scale: 18;
        rotate: 30deg;
        filter: blur(7px);
    }

    &:hover ${S_CardContent} {
        opacity: 1;
        transform: translateY(0);
    }
`;

const S_CardContainer = styled.div`
    width: 640px;
    height: 220px;
    position: relative;
    border-radius: 10px;

    &::before {
        content: '';
        z-index: -1;
        position: absolute;
        inset: 0;
        background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
        transform: translate3d(0, 0, 0) scale(0.95);
        filter: blur(20px);
    }
`;

const S_Heading = styled.p`
    font-size: 32px;
    font-weight: 700;
    margin: 0; // скидання дефолтних відступів p
`;

const S_CardReview = styled.p`
    height: 150px;
    width: 100%;
    overflow-y: auto;
    word-wrap: break-word;
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

const S_RatingAndControls = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-end;
`

export {
    S_CardContainer,
    S_Card,
    S_CardTitle,
    S_CardContent,
    S_Heading,
    S_CardReview,
    S_CardHeading,
    S_Caption,
    S_Title,
    S_Genre,
    S_RatingAndControls,
    S_EditDeleteButtons,
};
