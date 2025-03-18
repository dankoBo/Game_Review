import styled from 'styled-components';

type UnderlineProps = {
    $isActive: boolean;
};

const S_NavigtionContainer = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const S_NavigtionList = styled.ul`
    width: 640px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

    @media (max-width: 570px) {
        width: 300px;
        text-align: center;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`;

const S_NavigtionUnderline = styled.div<UnderlineProps>`
    width: 100%;
    height: 2px;
    margin-top: 4px;
    background-color: ${({ $isActive }) => ($isActive ? '#f59aff' : '#3e3e3e')};
    box-shadow: ${({ $isActive }) =>
        $isActive ? '0px 0px 6px #bebebe' : 'none'};
    transition: background-color 0.3s ease-in-out;
`;

const S_NavigtionItem = styled.li`
    width: 240px;
    font-family: Roboto, sans-serif;
    color: #fafafa;
    font-size: 20px;
    word-spacing: 14px;
    letter-spacing: 4px;
    text-align: center;
    cursor: pointer;

    &:hover ${S_NavigtionUnderline} {
        background-color: #f59aff;
    }
`;

export {
    S_NavigtionContainer,
    S_NavigtionList,
    S_NavigtionItem,
    S_NavigtionUnderline,
};
