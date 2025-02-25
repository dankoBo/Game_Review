import { create } from 'zustand';

type State = {
    searchInput: boolean;
    showSearchInput: () => void;
    hideSearchInput: () => void;
};

export const useSearch = create<State>((set) => ({
    searchInput: true,
    showSearchInput: () => set({ searchInput: true }),
    hideSearchInput: () => set({ searchInput: false }),
}));
