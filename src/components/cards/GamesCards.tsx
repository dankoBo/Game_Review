import { S_Container } from '@/components/cards/GamesCards.styled';
import React, { FC } from 'react';
import GameNotFound from '@/components/game-not-found/GameNotFound';
import Pagination from '@/UI/pagination/Pagination';
import GameCardRotate from '@/components/cards/game-card-rotate/GameCardRotate';
import { useGamesData } from '@/hooks/useGamesData';
import { usePagination } from '@/hooks/usePagination';
import Loader from '@/UI/loader/Loader';

type GameCardProps = {
    searchTerm: string;
};

const GamesCards: FC<GameCardProps> = ({ searchTerm }) => {
    const gamesPerPage = 6;
    const { games, loading} = useGamesData();

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
        <>
            {
                loading ? ( <Loader /> ) : (
                    <>
                        <S_Container>
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
                        </S_Container>
                    </>
                )
            }
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            />
        </>
    );
};

export default GamesCards;
