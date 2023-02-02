export type ContactState = {
    id: string,
    name: string,
    avatar: string,
    lastMessageSent: string,
    lastMessage: string,
}

export enum ContactActionTypes {
    Get_All_Contacts = "Get_All_Contacts"
}

export type ContextAction<T, K> = {
    type: T,
    payload: K
}