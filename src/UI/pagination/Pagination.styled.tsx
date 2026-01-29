import styled from 'styled-components';

const S_PaginationContainer = styled.div`
    max-width: 250px;
    padding: 10px 20px;
    margin: auto auto 20px;
    border-radius: 30px;
    border: 2px solid #3e3e3e;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const S_PaginationPage = styled.span`
    margin: 0 30px;
    font-family: 'Exo 2', sans-serif;
    font-weight: 600;
    color: #fafafa;
`;

export { S_PaginationContainer, S_PaginationPage };
