import { create } from 'zustand';
import { TOASTER_MESSAGES } from '@/UI/toaster/toaster.config';

type ToasterMessageType = keyof typeof TOASTER_MESSAGES;

type State = {
    isVisible: boolean;
    toasterType: ToasterMessageType;
    setToasterType: (type: ToasterMessageType) => void;
}

export const useToaster = create<State>((set) => ({
    isVisible: false,
    toasterType: 'loginSuccess',
    setToasterType: (type) => {
        set({ isVisible: true, toasterType: type });
        setTimeout(() => {
            set({ isVisible: false });
        }, 5000);
    },
}));
