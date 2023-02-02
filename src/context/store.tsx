import React, { createContext, useReducer } from "react";

const AppContext = createContext({})
const ContactReducer = (state: any, action: any) => {
    console.log(state, action);
    return state
}
const InitialState = {
    Contacts: {
        List: []
    }
}
interface AppContextProviderProps extends React.PropsWithChildren { }
const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({ children }): JSX.Element => {
    const [state, dispatch] = useReducer(ContactReducer, InitialState)
    // return <AppContext.Provider value={ }>{children}</AppContext.Provider>
    return <div></div>
}

export { AppContext, AppContextProvider }