import { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { app } from '@/firebase/firebase';

type Game = {
    id: string;
    cover: string;
    coverLocal: string;
    description: string;
    developer: string;
    genre: string;
    name: string;
    steamLink: string;
};

export const useLocalizationData = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore(app);
        const gamesCollection = collection(db, 'localizationGames');

        const unsubscribe = onSnapshot(gamesCollection, (querySnapshot) => {
            const gamesData = querySnapshot.docs.map(
                (doc) => ({ id: doc.id, ...doc.data() }) as Game,
            );
            setGames(gamesData);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return { games, loading };
};
