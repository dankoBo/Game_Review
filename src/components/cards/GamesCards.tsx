import { S_Container } from '@/components/cards/GamesCards.styled';
import React, { useEffect, useState, FC } from 'react';
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { app } from '@/firebase';
import Pagination from '@/UI/pagination/Pagination';
import GameCardRotate from '@/components/cards/game-card-rotate/GameCardRotate';

type Game = {
    id: string;
    rating: number;
    image: string;
    name: string;
    genre: string;
    review: string;
}

type GameCardProps = {
    searchTerm: string;
};

const GamesCards: FC<GameCardProps> = ({ searchTerm}) => {
    const gamesPerPage = 6;
    
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
            <S_Container>
                {
                    paginatedGames.map((game) => (
                        <GameCardRotate
                            key={game.id}
                            img={game.image}
                            rating={game.rating}
                            title={game.name}
                            genre={game.genre}
                            review={formatReview(game.review)}
                        />
                    ))
                }
            </S_Container>
            <Pagination
                currentPage={currentPage} 
                totalPages={Math.ceil(games.length / gamesPerPage)} 
                handlePageChange={handlePageChange}
            />
        </>
    );
}
 
export default GamesCards;
