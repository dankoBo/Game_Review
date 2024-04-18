import { S_Container } from './GamesCards.styled';
import GameCard from './game-card/GameCard';
import { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { app } from '../../../firebase';
import PaginationBtn from '../../../UI/buttons/pagination-btn/PaginationBtn';

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
        <S_Container>
            {
                paginatedGames.map((game) => (
                    <GameCard
                        key={game.id}
                        img={game.image}
                        title={game.name}
                        genre={game.genre}
                        review={game.review}
                    />
                ))
            }
            <div className="pagination">
                <PaginationBtn onClick={() => handlePageChange('prev')} disabled={currentPage === 1}>Назад</PaginationBtn>
                <span>Сторінка {currentPage} з {Math.ceil(games.length / gamesPerPage)}</span>
                <PaginationBtn onClick={() => handlePageChange('next')} disabled={currentPage === Math.ceil(games.length / gamesPerPage)}>Вперед</PaginationBtn>
            </div>
        </S_Container>
    );
}
 
export default GamesCards;