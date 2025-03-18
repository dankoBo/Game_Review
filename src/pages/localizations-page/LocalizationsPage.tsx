import LocalizationCard from "@/components/cards/localization-card/LocalizationCard";
import { S_LocalizationsSection, S_LocalizationsContainer } from "./LocalizationPage.styled";
import { useLocalizationData } from "@/hooks/useLocalizationData";
import Loader from "@/UI/loader/Loader";

const LocalizationsPage = () => {
    const { games, loading } = useLocalizationData();

    return (
        <S_LocalizationsSection>
            {loading ? (
                <Loader />
            ) : (
                <S_LocalizationsContainer>
                    {
                        games.map((game) => (
                            <LocalizationCard
                                key={game.id}
                                cover={game.cover}
                                description={game.description}
                                developer={game.developer}
                                genre={game.genre}
                                name={game.name}
                                steamLink={game.steamLink}
                            />
                        ))
                    }
                </S_LocalizationsContainer>
            )}
        </S_LocalizationsSection>
    );
};

export default LocalizationsPage;
