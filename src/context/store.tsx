import React, { createContext, useReducer } from "react";
import { ContextAction, ContextAppState } from "../@Types/context/context.type";
import { ContactReducer } from "./contact/contact.reducer";
import { messagesReducer } from "./messages/messages.reducer";

const InitialState: ContextAppState = {
    contacts: {
        contactslist: [],
        searchlist: [],
    },
    messages: {
        roomId: "",
        MessageList: []
    }
}
const AppContext = createContext<{ state: ContextAppState, dispatch: React.Dispatch<ContextAction<any, any>> }>({
    state: InitialState,
    dispatch: () => null,
})

const combineReducer = ({ contacts, messages }: ContextAppState, action: any) => ({
    contacts: ContactReducer(contacts, action),
    messages: messagesReducer(messages, action)
})
interface AppContextProviderProps extends React.PropsWithChildren { }
const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({ children }): JSX.Element => {
    const [state, dispatch] = useReducer(combineReducer, InitialState)
    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export { AppContext, AppContextProvider }