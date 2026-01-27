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
        props.$isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
    };

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
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotateY(0deg);
    overflow: hidden;
    background-color: #000000;

    /* Додаємо глибину */
    background: radial-gradient(circle at center, #333333 0%, #171717 100%);
    border: 1px solid #3e3e3e;
`;

const S_CardTitle = styled.h2`
    font-family: 'Orbitron';
    font-size: 60px;
    font-weight: 900;
    text-align: center;
    color: #FFFFFF;

    /* Світіння тексту (акцент на інтерактивному кольорі) */
    text-shadow: 0 0 15px rgba(245, 154, 255, 0.4); 
    letter-spacing: 4px;
`;

const S_CardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 15px;
    backface-visibility: hidden;
    background-color: #292929;
    color: #fafafa;
    border-radius: 10px;
    border: 1px solid #3e3e3e;
    transform: rotateY(180deg);
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

const S_CardHeading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 10px;
    border-bottom: 1px solid #3e3e3e;
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
    font-family: 'Orbitron', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #1e90ff;

    @media (max-width: 500px) {
        font-size: 14px;
    }
`;

const S_Genre = styled.div`
    font-family: Roboto, sans-serif;
    color: #9f9f9f; /* subtext */
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    
    @media (max-width: 500px) {
        font-size: 10px;
    }
`;

const S_EditDeleteButtons = styled.div`
    display: flex;
    gap: 8px;
`;

const S_Review = styled.div`font-family: Roboto, sans-serif;
    margin-top: 12px;
    font-size: 14px;
    color: #fafafa;
    line-height: 1.6;
    flex-grow: 1; /* Займає вільний простір */
    overflow-y: auto;
    padding-right: 8px;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: #3e3e3e;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #f59aff;
    }
`;

export {
    S_Container,
    S_Content,
    S_CardFront,
    S_CardTitle,
    S_CardHeading,
    S_Caption,
    S_RatingAndControls,
    S_CardBack,
    S_Title,
    S_Genre,
    S_EditDeleteButtons,
    S_Review,
};