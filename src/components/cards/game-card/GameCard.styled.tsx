import styled from 'styled-components';

type ExpandedProps = {
    $isExpanded: boolean;
};

const S_CardContainer = styled.div`
    position: relative;
    width: 100%;
    height: 340px;
    min-height: 340px;
    max-width: 640px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #4a4a4a;
    isolation: isolate;
`;

const S_FrontContent = styled.div<ExpandedProps>`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    background: radial-gradient(circle at center, #333333 0%, #171717 100%);
    box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
    
    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle, transparent 60%, rgba(0,0,0,0.4) 100%);
        pointer-events: none;
    }

    ${(props) =>
        props.$isExpanded &&
        `
        transform: translateX(20%);
        opacity: 0;
        visibility: hidden;
    `}
`;

const S_CardTitle = styled.h2`
    font-family: 'Orbitron';
    font-size: clamp(30px, 8cqw, 60px);
    font-weight: 900;
    text-align: center;
    color: #ffffff;
    letter-spacing: 4px;
    text-shadow: 0 0 15px rgba(245, 154, 255, 0.4);
`;

const S_Content = styled.div<ExpandedProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    color: #fafafa;
    border-radius: inherit;
    transform: translateX(98.5%);
    overflow: hidden;
    backface-visibility: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    background-color: #1e1e1e;
    background-image: linear-gradient(
        to bottom, 
        rgba(255, 255, 255, 0.02) 0%, 
        transparent 10%
    );

    ${(props) =>
        props.$isExpanded &&
        `
            transform: translateX(0);
        `}

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 15px;
        height: 100%;
        background-color: #f59aff;
        box-shadow: 0 0 10px rgba(245, 154, 255, 0.5);
        
        ${(props) =>
            props.$isExpanded &&
            `
                @media (hover: none) {
                    opacity: 0;
                }
            `}
    }
`;

const S_Card = styled.div`
    width: 100%;
    height: 100%;
    border-radius: inherit;

    @media (hover: hover) and (pointer: fine) {
        &:hover ${S_Content} {
            transform: translateX(0);
        }

        &:hover ${S_Content}::before {
            opacity: 0;
        }

        &:hover ${S_FrontContent} {
            transform: translateX(-20%);
            opacity: 0;
        }
    }
`;

const S_CardHeading = styled.div`
    position: relative;
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
`;

const S_EditDeleteButtons = styled.div`
    position: absolute;
    top: 26px;
    display: flex;
    gap: 8px;

    @media (max-width: 570px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        top: 18px;
        right: 0;
    }
`;

const S_Title = styled.div`
    font-family: 'Orbitron', sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 2px;
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
    S_CardContainer,
    S_Card,
    S_FrontContent,
    S_Content,
    S_CardHeading,
    S_Caption,
    S_CardTitle,
    S_Title,
    S_Genre,
    S_RatingAndControls,
    S_EditDeleteButtons,
    S_Review,
};
