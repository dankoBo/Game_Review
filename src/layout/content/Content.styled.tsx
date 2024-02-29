import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const NavContainer = styled.nav`
    width: 40%;
    margin: 0 auto 20px;
    border-bottom: 2px solid #3E3E3E;
`

const MainContent = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid #3E3E3E;
    border-radius: 15px;
`

export { Container, NavContainer, MainContent }