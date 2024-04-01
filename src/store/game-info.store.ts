import { create } from 'zustand';

type State = {
    isGameInfoOpen: boolean;
    openGameInfo: () => void;
    closeGameInfo: () => void;
}

export const useGameInfo = create<State>(set => ({
    isGameInfoOpen: false,
    openGameInfo: () => set({ isGameInfoOpen: true }),
    closeGameInfo: () => set({ isGameInfoOpen: false }),
}))