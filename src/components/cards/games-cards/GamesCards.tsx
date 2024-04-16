import { S_Container } from './GamesCards.styled';
import GameCard from './game-card/GameCard';
import { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { app } from '../../../firebase';

type Game = {
    id: string;
    image: string;
    name: string;
    genre: string;
    review: string;
}

const GamesCards = () => {
    const [games, setGames] = useState<Game[]>([])
    
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

    return (
        <S_Container>
            {
                games.map((game) => (
                    <GameCard
                        key={game.id}
                        img={game.image}
                        title={game.name}
                        genre={game.genre}
                        review={game.review}
                    />
                ))
            }
        </S_Container>
    );
}
 
export default GamesCards;