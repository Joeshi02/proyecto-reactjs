import { createContext } from "react";

export const carContext = createContext([])

export function ThemeProvider({children}){

    return(
        <carContext.Provider value={[]}>
            {children}
        </carContext.Provider>
    )
}