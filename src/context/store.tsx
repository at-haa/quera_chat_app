import React, { createContext, useReducer, useState } from "react";
import { ContactState, ContextAction, ContextAppState, MessageActionTypes } from "../@Types/context/context.type";
import { ContactReducer } from "./contact/contact.reducer";
import { messagesReducer } from "./messages/messages.reducer";

const InitialState: ContextAppState = {
    contacts: [],
    messages: {
        roomId: "",
        MessageList: []
    }
}
const AppContext = createContext<{ state: ContextAppState, search: ContactState[], dispatch: React.Dispatch<ContextAction<any, any>>, setSearch: React.Dispatch<React.SetStateAction<ContactState[]>> }>({
    state: InitialState,
    search: [],
    dispatch: () => null,
    setSearch: () => null
})

const combineReducer = ({ contacts, messages }: ContextAppState, action: any) => ({
    contacts: ContactReducer(contacts, action),
    messages: messagesReducer(messages, action)
})
interface AppContextProviderProps extends React.PropsWithChildren { }
const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({ children }): JSX.Element => {
    const [state, dispatch] = useReducer(combineReducer, InitialState)
    const [search, setSearch] = useState<ContactState[]>([])
    return <AppContext.Provider value={{ state, search, dispatch, setSearch }}>{children}</AppContext.Provider>
}

export { AppContext, AppContextProvider }