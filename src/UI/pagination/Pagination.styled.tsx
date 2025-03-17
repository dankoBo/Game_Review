import styled from 'styled-components';

const S_PaginationContainer = styled.div`
    margin: auto auto 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 250px;
    padding: 10px 20px;
    border: 2px solid #3e3e3e;
    border-radius: 30px;
`;

const S_PaginationPage = styled.span`
    font-family: Roboto, sans-serif;
    color: #fafafa;
    margin: 0 30px;
`;

export { S_PaginationContainer, S_PaginationPage };
