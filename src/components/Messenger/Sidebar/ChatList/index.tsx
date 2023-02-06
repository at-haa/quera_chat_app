import { AxiosResponse } from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { Contacts } from "../../../../@Types/api.types";
import { ContactActionTypes } from "../../../../@Types/context/context.type";
import { AXIOS } from "../../../../config/axios.config";
import { ApiRoutes } from "../../../../constants/api.route";
import { AppContext } from "../../../../context/store";
import { ChatItem } from "./ChatItem"

interface ChatListProps extends React.PropsWithChildren {

}
export const ChatList: React.FunctionComponent<ChatListProps> = ({ children }): JSX.Element => {
    const dispatch = useContext(AppContext).dispatch
    const state = useContext(AppContext).state.contacts
    const search = useContext(AppContext).search
    const fetchContacts = useCallback(async () => {
        const response = await AXIOS.get<any, AxiosResponse<Contacts[]>>(ApiRoutes.GetContacts)
        if (response.status == 200)
            dispatch({ type: ContactActionTypes.Get_All_Contacts, payload: response.data })
    }, [dispatch])

    useEffect(() => {
        fetchContacts()
    }, [dispatch])

    return (
        
        search.length == 0 ? state.length === 0 ? <div>هنوز چتی وجود ندارد.</div> :
            <>
                {
                    state.map((item) => <ChatItem
                        key={item.id} name={item.name} avatar={item.avatar} lastMessage={item.lastMessage} time={item.lastMessageSent} roomId={item.roomId}/>)
                }
            </> :
            <>
                {
                    search.map((item) => <ChatItem
                        key={item.id} name={item.name} avatar={item.avatar} lastMessage={item.lastMessage} time={item.lastMessageSent} roomId={item.roomId}/>)
                }
            </>

    )
}