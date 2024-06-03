import { useEffect, useState} from 'react';
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { app } from '@/firebase';

type Game = {
    id: string;
    rating: number;
    image: string;
    name: string;
    genre: string;
    review: string;
}

export const useGamesData = () => {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        const db = getFirestore(app);
        const gamesCollection = collection(db, 'games');

        const unsubscribe = onSnapshot(gamesCollection, (querySnapshot) => {
            const gamesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Game));
            setGames(gamesData);
        });

        return () => {
            unsubscribe();
        };
    }, []);
    
    return games;
}
