import styled from 'styled-components';

const S_Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 260px;
    padding: 10px 20px;
    border: ${props => props.isHovered ? '1px solid blue' : '1px solid gray'};
    border-radius: 30px;
`

export { S_Container }