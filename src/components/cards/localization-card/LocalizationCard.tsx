import { S_CardContainer, S_GameCover } from "./LocalizationCard.styled";
import burnhouseLane from "@/assets/images/localization/Burnhouse_Lane.jpg";


const LocalizationCard = () => {
    return (
        <S_CardContainer>
            <S_GameCover>
                <img src={burnhouseLane} alt="Burnhouse Lane" />
            </S_GameCover>
        </S_CardContainer>
    )
};

export default LocalizationCard;
