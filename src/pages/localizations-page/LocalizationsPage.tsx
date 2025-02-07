import LocalizationCard from "@/components/cards/localization-card/LocalizationCard";
import { S_Wrapper, S_Container } from "./LocalizationPage.styled";


const LocalizationsPage = () => {
    return (
        <S_Wrapper>
            <S_Container>
                <LocalizationCard />
                <LocalizationCard />
            </S_Container>
        </S_Wrapper>
    );
};

export default LocalizationsPage;
