import { createContext, type ReactNode } from "react";

interface ContextType {}

export const Context = createContext({} as ContextType)

export const GlobalContext = ({children}:{children:ReactNode}) => {

    return <Context.Provider value={{}}>{children}</Context.Provider>
}