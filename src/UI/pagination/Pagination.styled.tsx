import styled from 'styled-components';

const S_Container = styled.div`
    margin: 0 auto 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 250px;
    padding: 10px 20px;
    border: ${props => props.isHovered ? '1px solid blue' : '1px solid gray'};
    border-radius: 30px;
`

const S_Span = styled.span`
    font-family: Roboto, sans-serif;
    color: #FAFAFA;
    margin: 0 30px;
`

export { S_Container, S_Span }