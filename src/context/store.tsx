import React, { createContext, useReducer, useState } from "react";
import { ContactState, ContextAction } from "../@Types/context/context.type";
import { ContactReducer } from "./contact/contact.reducer";

const InitialState: ContactState[] = []
const AppContext = createContext<{ state: ContactState[], search: ContactState[], dispatch: React.Dispatch<ContextAction<any, any>>, setSearch: React.Dispatch<React.SetStateAction<ContactState[]>> }>({
    state: [],
    search: [],
    dispatch: () => null,
    setSearch: () => null
})

interface AppContextProviderProps extends React.PropsWithChildren { }
const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({ children }): JSX.Element => {
    const [state, dispatch] = useReducer(ContactReducer, InitialState)
    const [search, setSearch] = useState<ContactState[]>([])
    return <AppContext.Provider value={{ state, search, dispatch, setSearch }}>{children}</AppContext.Provider>
}

export { AppContext, AppContextProvider }