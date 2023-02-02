import React, { createContext, useReducer } from "react";
import { ContactState, ContextAction } from "../@Types/context/context.type";
import { ContactReducer } from "./contact/contact.reducer";

const InitialState: ContactState[] = []
const AppContext = createContext<{state:ContactState[],dispatch:React.Dispatch<ContextAction<any,any>>}>({
    state: [],
    dispatch: () => null
})

interface AppContextProviderProps extends React.PropsWithChildren { }
const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({ children }): JSX.Element => {
    const [state, dispatch] = useReducer(ContactReducer, InitialState)
    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export { AppContext, AppContextProvider }