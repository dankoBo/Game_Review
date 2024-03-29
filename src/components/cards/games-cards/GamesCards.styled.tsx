import styled from 'styled-components'

const S_Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 600px));
    gap: 15px;
    justify-content: space-around;
    align-items: center;
`

export { S_Container }