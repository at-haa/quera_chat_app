import React from "react";
import { MessageActionTypes, ContextAction, MessageState } from "../../@Types/context/context.type";

export const messagesReducer = (state: MessageState, action: ContextAction<MessageActionTypes, any>): MessageState => {
    console.log(state);

    switch (action.type) {
        case MessageActionTypes.Get_Current_Messages:
            state.roomId = action.payload.roomId;
            state.MessageList = action.payload.MessageList;
            return state
        default:
            return state
    }

}