import React, { FC } from 'react';
import { useGamesData } from '@/hooks/useGamesData';
import { usePagination } from '@/hooks/usePagination';
import GameNotFound from '@/UI/game-not-found/GameNotFound';
import Pagination from '@/UI/pagination/Pagination';
import GameCardRotate from '@/components/cards/game-card-rotate/GameCardRotate';
import Loader from '@/UI/loader/Loader';
import { S_ReviewsSection, S_ReviewsContainer } from '@/pages/reviews-page/ReviewsPage.styled';

type GameCardProps = {
    searchTerm: string;
};

const ReviewsPage: FC<GameCardProps> = ({ searchTerm }) => {
    const gamesPerPage = 6;
    const { games, loading } = useGamesData();

    const filteredGames = games.filter((game) =>
        game.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    const { currentPage, totalPages, handlePageChange } = usePagination(
        filteredGames.length,
        gamesPerPage
    );
    const paginatedGames = filteredGames.slice(
        (currentPage - 1) * gamesPerPage,
        currentPage * gamesPerPage
    );

    const formatReview = (review: string) => {
        return review.split('\\n').map((paragraph: string, index: number) => (
            <React.Fragment key={index}>
                {paragraph}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <S_ReviewsSection>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <S_ReviewsContainer>
                        {filteredGames.length === 0 ? (
                            <GameNotFound />
                        ) : (
                            paginatedGames.map((game) => (
                                <GameCardRotate
                                    key={game.id}
                                    id={game.id}
                                    img={game.image}
                                    rating={game.rating}
                                    title={game.name}
                                    genre={game.genre}
                                    review={formatReview(game.review)}
                                />
                            ))
                        )}
                    </S_ReviewsContainer>
                </>
            )}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            />
        </S_ReviewsSection>
    );
};

export default ReviewsPage;
