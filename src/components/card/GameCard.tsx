import { Container, CardContent, CardImg, CardTitle, CardDescription } from './GameCard.styled'
import LogoImage from '../../assets/images/logo/Logo.jpg'

const GameCard = () => {
    return (
        <Container>
            <CardImg src={LogoImage} alt="game image" />
            <CardContent>
                <CardTitle>Red Dead Redemption</CardTitle>
                <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</CardDescription>
            </CardContent>
        </Container>
    );
}
 
export default GameCard;