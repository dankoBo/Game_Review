import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import { app } from '@/firebase';

export const useGameDelete = () => {
    const deleteGame = async (gameId: string) => {
        const db = getFirestore(app);
        if (!gameId) {
            console.error("Помилка: Гру не знайдено");
            return;
        }
        
        try {
            await deleteDoc(doc(db, "games", gameId));
            console.log("Документ видалено");
        } catch (error) {
            console.error("Помилка видалення документа: ", error);
        }
        
    };

    return deleteGame
}
