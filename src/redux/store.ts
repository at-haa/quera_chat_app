import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import { combineReducers } from "redux"
import { ContactsReducer } from './contacts/'
import { ConatactListState, ContextAppState } from '../@Types/context/context.type'
import { composeWithDevTools } from 'redux-devtools-extension'

export const ReduxStore = () => {
    return createStore(combineReducers({ contacts: ContactsReducer }), composeWithDevTools(applyMiddleware(thunk)))
}