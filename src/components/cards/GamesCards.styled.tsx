import styled from 'styled-components'

const S_Container = styled.div`
    width: 100%;
    min-height: fit-content;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 640px));
    gap: 15px;
    justify-content: space-around;
    align-items: center;
`

export { S_Container }