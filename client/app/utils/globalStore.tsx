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

interface formAlertStore {
    isShowing: boolean;
    show: () => void;
    hide: () => void;
}

export const useFormAlertStore = create<formAlertStore>((set) => ({
    isShowing: false,
    show: () => set({ isShowing: true }),
    hide: () => set({ isShowing: false }),
}));

interface formErrorStore {
    isShowing: boolean;
    show: () => void;
    hide: () => void;
}

export const useFormErrorStore = create<formAlertStore>((set) => ({
    isShowing: false,
    show: () => set({ isShowing: true }),
    hide: () => set({ isShowing: false }),
}));

enum language {
    en = "en",
    de = "de",
}
interface languageStore {
    language: language;
    setEnglish: () => void;
    setGerman: () => void;
    toggle: () => void;
}

export const useLanguageStore = create<languageStore>((set) => ({
    language: language.en,
    setEnglish: () => set({ language: language.en }),
    setGerman: () => set({ language: language.de }),
    toggle: () =>
        set((state) => ({
            language: state.language == language.de ? language.en : language.de,
        })),
}));
