import React from 'react'
import { S_Container } from '@/components/cards/GamesCards.styled';
import { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { app } from '@/firebase';
import Pagination from '@/UI/pagination/Pagination';
import GameCardRotate from '@/components/cards/game-card-rotate/GameCardRotate';

type Game = {
    id: string;
    image: string;
    name: string;
    genre: string;
    review: string;
}

const GamesCards = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const gamesPerPage = 6;
    
    const formatReview = (review: string) => {
        return review.split('\\n').map((paragraph: string, index: number) => (
            <React.Fragment key={index}>
                {paragraph}
                <br />
            </React.Fragment>
        ));
    };

    useEffect(() => {
        const db = getFirestore(app);
        const gamesCollection = collection(db, 'games');


        const unsubscribe = onSnapshot(gamesCollection, (querySnapshot) => {
            const gamesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Game));
            setGames(gamesData);
        });

        // функція, яка буде викликана при видаленні компонента
        return () => {
            unsubscribe();
        };
    }, []);

    const paginatedGames = games.slice((currentPage - 1) * gamesPerPage, currentPage * gamesPerPage);

    const handlePageChange = (direction: 'next' | 'prev') => {
        if (direction === 'next' && currentPage < Math.ceil(games.length / gamesPerPage)) {
            setCurrentPage(currentPage + 1);
        } else if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <S_Container>
                {
                    paginatedGames.map((game) => (
                        <GameCardRotate
                            key={game.id}
                            img={game.image}
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