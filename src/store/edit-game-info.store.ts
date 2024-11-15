import { create } from 'zustand';

type Game = {
    id: string;
    image: string;
    rating: number;
    name: string;
    genre: string;
    review: string;
};

type EditGameInfoState = {
    selectedGame: Game | null;
    setSelectedGame: (game: Game) => void;
    clearSelectedGame: () => void;
};

export const useEditGameInfo = create<EditGameInfoState>((set) => ({
    selectedGame: null,
    setSelectedGame: (game) => set({ selectedGame: game }),
    clearSelectedGame: () => set({ selectedGame: null }),
}));
