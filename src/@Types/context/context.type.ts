export type ContactState = {
    id: string,
    name: string,
    avatar: string,
    lastMessageSent: string,
    lastMessage: string,
    roomId: string
}

export enum ContactActionTypes {
    Get_All_Contacts = "Get_All_Contacts"
}

export type ContextAction<T, K> = {
    type: T,
    payload: K
}

export type MessageItem = {
    isSentByOwner: boolean,
    id: number,
    value: string
}
export type MessageState = {
    roomId: string,
    MessageList: MessageItem[] | []
}

export enum MessageActionTypes {
    Get_Current_Messages = "Get_Current_Messages"
}


export type ContextAppState = {
    contacts: ContactState[],
    messages: MessageState
}