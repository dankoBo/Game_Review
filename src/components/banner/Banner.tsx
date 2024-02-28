import { Container, Twinkling } from './Banner.styled'
import Moon from './moon/Moon';

const Banner = () => {
    return (
        <Container>
            <Twinkling>
                <Moon />
            </Twinkling>
        </Container>
    );
}
 
export default Banner;