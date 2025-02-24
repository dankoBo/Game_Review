import LocalizationCard from "@/components/cards/localization-card/LocalizationCard";
import { S_Wrapper, S_Container } from "./LocalizationPage.styled";
import { useLocalizationData } from "@/hooks/useLocalizationData";
import Loader from "@/UI/loader/Loader";

const LocalizationsPage = () => {
    const { games, loading } = useLocalizationData();

    return (
        <S_Wrapper>
            {loading ? (
                <Loader />
            ) : (
                <S_Container>
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
                </S_Container>
            )}
        </S_Wrapper>
    );
};

export default LocalizationsPage;
