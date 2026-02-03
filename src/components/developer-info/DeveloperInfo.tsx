import logoFooter from '@/assets/images/footer/Person.png';
import {
    S_Container,
    S_Info,
    S_Developer,
    S_Owner,
    S_HeartIcon,
    S_ImgContainer,
    S_Img,
    S_Year,
} from '@/components/developer-info/DeveloperInfo.styled';

const DeveloperInfo = () => {
    return (
        <S_Container>
            <S_Info>
                <S_Developer>
                    Made with {<S_HeartIcon />} by <S_Owner>4uhaister</S_Owner>
                </S_Developer>
                <S_Year>2024</S_Year>
            </S_Info>
            <S_ImgContainer>
                <S_Img src={logoFooter} alt="Logo" />
            </S_ImgContainer>
        </S_Container>
    );
};

export default DeveloperInfo;
