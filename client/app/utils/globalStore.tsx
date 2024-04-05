import { create } from "zustand";

interface menuStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

export const useMenuStore = create<menuStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

interface registerWarningStore {
    isShowing: boolean;
    show: () => void;
    hide: () => void;
}

export const useRegisterWarningStore = create<registerWarningStore>((set) => ({
    isShowing: false,
    show: () => set({ isShowing: true }),
    hide: () => set({ isShowing: false }),
}));
