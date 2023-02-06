import { MessageActionTypes, ContextAction, MessageState } from "../../@Types/context/context.type";

export const messagesReducer = (state: MessageState, action: ContextAction<MessageActionTypes, any>): MessageState => {
    switch (action.type) {
        case MessageActionTypes.Get_Current_Messages:
            state.roomId = action.payload.roomId;
            state.MessageList = action.payload.MessageList;
            return state
        case MessageActionTypes.Send_new_Messages:
            console.log(action.payload);
            state.MessageList.push(action.payload)
            console.log(state.MessageList);
            
            return state
        default:
            return state
    }

}