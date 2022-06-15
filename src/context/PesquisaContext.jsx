import { useState } from "react";
import { createContext } from "react";

export const PesquisaContext = createContext ()

export function PesquisaProvider ({children}) {
    const [value, setValue] = useState ("")
    return (
        <PesquisaContext.Provider value={{value, setValue}}> {children} </PesquisaContext.Provider>
    )
}