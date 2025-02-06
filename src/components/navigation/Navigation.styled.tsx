import styled from 'styled-components';


const S_NavContainer = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 22px;

    @media (max-width: 580px) {
        text-align: center;
    }
`;

const S_List = styled.ul`
    width: 500px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1260px) {
        width: 300px;
        text-align: center;
        flex-direction: column;
        gap: 10px;
    }
`;

const S_ListItem = styled.li`
    font-family: Roboto, sans-serif;
    color: #fafafa;
    font-size: 20px;
    word-spacing: 14px;
    letter-spacing: 4px;
    cursor: pointer;

    border-bottom: 2px solid #3e3e3e;
    padding: 0 10px 6px;

    &:hover {
        border-bottom: 2px solid #f59aff;
    }
`;

export { S_NavContainer, S_List, S_ListItem };
