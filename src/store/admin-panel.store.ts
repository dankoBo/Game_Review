import { create } from 'zustand';

type State = {
    isAdminPanelOpen: boolean;
    openAdminPanel: () => void;
    closeAdminPanel: () => void;
};

export const useAdminPanel = create<State>(set => ({
    isAdminPanelOpen: false,
    openAdminPanel: () => set({ isAdminPanelOpen: true }),
    closeAdminPanel: () => set({ isAdminPanelOpen: false })
}));