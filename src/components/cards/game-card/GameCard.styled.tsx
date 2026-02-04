import styled from 'styled-components';

type FlippableProps = {
    $isFlipped: boolean;
};

const S_Container = styled.div`
    width: 100%;
    height: 340px;
    min-height: 340px;
    max-width: 640px;
    perspective: 1000px;
`;

const S_Content = styled.div<FlippableProps>`
    position: relative;
    width: 100%;
    height: 340px;
    border-radius: 10px;
    transform-style: preserve-3d;
    transition: transform 0.999s;
    box-shadow: 0 0 0 0px #ffffff80;
    transform: ${(props) =>
        props.$isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
    };
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s ease;

    @media (hover: hover) and (pointer: fine) {
        ${S_Container}:hover & {
            transform: rotateY(180deg);
            box-shadow: 0 0 20px rgba(245, 154, 255, 0.3);
        }
    }
`;

const S_CardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 340px;
    padding: 0 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotateY(0deg);
    overflow: hidden;
    background-color: #000000;

    /* глибина*/
    background: radial-gradient(circle at center, #333333 0%, #171717 100%);
    border: 1px solid #3e3e3e;
`;

const S_CardTitle = styled.h2`
    font-family: 'Orbitron';
    font-size: clamp(30px, 8cqw, 60px);
    font-weight: 900;
    text-align: center;
    color: #FFFFFF;

    /* Світіння тексту */
    text-shadow: 0 0 15px rgba(245, 154, 255, 0.4); 
    letter-spacing: 4px;
`;

const S_CardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 15px;
    border: 1px solid #3e3e3e;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    backface-visibility: hidden;
    background-color: #292929;
    color: #fafafa;
    transform: rotateY(180deg);
    overflow: hidden;
`;

const S_CardHeading = styled.div`
    padding-bottom: 10px;
    border-bottom: 1px solid #3e3e3e;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 570px) {
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }
`;

const S_Caption = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media (max-width: 570px) {
        align-items: center;
    }
`;

const S_RatingAndControls = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
`

const S_Title = styled.div`
    font-family: 'Orbitron', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #f59aff;

    @media (max-width: 500px) {
        font-size: 14px;
    }
`;

const S_Genre = styled.div`
    font-family: 'Exo 2', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #9f9f9f;
    letter-spacing: 1px;
    text-transform: uppercase;
    
    @media (max-width: 500px) {
        font-size: 10px;
    }
`;

const S_EditDeleteButtons = styled.div`
    display: flex;
    gap: 8px;
`;

const S_Review = styled.div`
    flex-grow: 1;
    margin-top: 12px;
    padding-right: 12px;
    overflow-y: auto;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: 1px;
    color: #fafafa;
    scrollbar-gutter: stable;

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