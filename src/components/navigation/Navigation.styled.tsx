import styled from 'styled-components';

type UnderlineProps = {
    $isActive: boolean;
};

const S_NavContainer = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-around;

    @media (max-width: 580px) {
        text-align: center;
    }
`;

const S_List = styled.ul`
    width: 600px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1260px) {
        width: 300px;
        text-align: center;
        flex-direction: column;
        gap: 10px;
    }
`;

const S_Underline = styled.div<UnderlineProps>`
    width: 100%;
    height: 2px;
    margin-top: 4px;
    background-color: ${({ $isActive }) => ($isActive ? "#f59aff" : "#3e3e3e")};
    transition: background-color 0.3s ease-in-out;
`;

const S_ListItem = styled.li`
    width: 280px;
    font-family: Roboto, sans-serif;
    color: #fafafa;
    font-size: 20px;
    word-spacing: 14px;
    letter-spacing: 4px;
    text-align: center;
    cursor: pointer;

    &:hover ${S_Underline} {
        background-color: #f59aff;
    }
`;

export { S_NavContainer, S_List, S_ListItem, S_Underline };
