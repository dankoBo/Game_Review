import styled from 'styled-components'

const S_Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const S_NavContainer = styled.nav`
    width: 40%;
    margin: 20px auto;
    padding-bottom: 10px;
    border-bottom: 2px solid #3E3E3E;

    @media (max-width: 380px) {
        text-align: center;
    }
`

const S_MainContent = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid #3E3E3E;
    border-radius: 15px;
`

export { S_Container, S_NavContainer, S_MainContent }