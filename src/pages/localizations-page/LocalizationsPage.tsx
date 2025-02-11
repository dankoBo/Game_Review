import LocalizationCard from "@/components/cards/localization-card/LocalizationCard";
import { S_Wrapper, S_Container } from "./LocalizationPage.styled";
import burnhouseLane from "@/assets/images/localization/Burnhouse_Lane.jpg";
import lorelai from "@/assets/images/localization/Lorelai.jpg";


const LocalizationsPage = () => {
    return (
        <S_Wrapper>
            <S_Container>
                <LocalizationCard cover={burnhouseLane} />
                <LocalizationCard cover={lorelai} />
            </S_Container>
        </S_Wrapper>
    );
};

export default LocalizationsPage;
