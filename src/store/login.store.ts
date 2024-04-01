import { create } from 'zustand';

type State = {
    isLoginOpen: boolean;
    openLogin: () => void;
    closeLogin: () => void;
};

export const useLogin = create<State>(set => ({
    isLoginOpen: false,
    openLogin: () => set({ isLoginOpen: true }),
    closeLogin: () => set({ isLoginOpen: false })
}))