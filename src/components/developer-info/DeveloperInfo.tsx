import { S_Container, S_Info, S_Developer, S_Owner, S_ImgContainer, S_Img, S_Year } from '@/components/developer-info/DeveloperInfo.styled';
import logoFooter from '@/assets/images/footer/Logo_Footer.avif';
import { FcLike } from "react-icons/fc";

const DeveloperInfo = () => {
    return (
        <S_Container>
            <S_Info>
                <S_Developer>
                    Create with {<FcLike />} by <S_Owner>4uhaister</S_Owner>
                </S_Developer>
                <S_Year>
                    2024
                </S_Year>
            </S_Info>
            <S_ImgContainer>
                <S_Img src={logoFooter} alt="Logo" />
            </S_ImgContainer>
        </S_Container>
    );
}
 
export default DeveloperInfo;
