import { createContext } from "react";

interface ContextProps {
    sidebar: boolean;
    setSidebar: (b: boolean) => void;
    dialog: boolean;
    setDialog: (b: boolean) => void;
    confirmacao: () => void
}

export const TeamContext = createContext<ContextProps>({
    sidebar: false,
    setSidebar: () => {},
    dialog: false,
    setDialog: () => {},
    confirmacao: () => {}
});