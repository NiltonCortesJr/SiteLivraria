import { useState } from "react";
import { createContext } from "react";

export const PesquisaContext = createContext ()

export function PesquisaProvider ({children}) {
    const [pesquisa, setPesquisa] = useState ([])
    const [value, setValue] = useState ("")
    return (
        <PesquisaContext.Provider value={{pesquisa, setPesquisa, value, setValue}}> {children} </PesquisaContext.Provider>
    )
}