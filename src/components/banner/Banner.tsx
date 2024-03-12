import { S_Container, S_Twinkling } from './Banner.styled'
import Moon from './moon/Moon';

const Banner = () => {
    return (
        <S_Container>
            <S_Twinkling>
                <Moon />
            </S_Twinkling>
        </S_Container>
    );
}
 
export default Banner;