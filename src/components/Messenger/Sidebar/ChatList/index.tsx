import { AxiosResponse } from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { Contacts } from "../../../../@Types/api.types";
import { ConatactListState, ContactActionTypes } from "../../../../@Types/context/context.type";
import { AXIOS } from "../../../../config/axios.config";
import { ApiRoutes } from "../../../../constants/api.route";
import { AppContext } from "../../../../context/store";
import { ChatItem } from "./ChatItem"
import { useDispatch } from "react-redux"
import { GetAllContactsAsync } from "../../../../redux/contacts/contacts.action";
import { AppDispatch, RootState } from "../../../../new-redux/store";
import { GetAllContactsAsyncNew } from "../../../../new-redux/feature/contacts/contacts.middleware";
interface ChatListProps extends React.PropsWithChildren {

}
export const ChatList: React.FunctionComponent<ChatListProps> = ({ children }): JSX.Element => {
    // new redux
    const dispatch = useDispatch<AppDispatch>();
    const state = useSelector<RootState>(
        (state) => state
    ) as {
        contacts: ConatactListState;
    };
    useEffect(() => {
        dispatch(GetAllContactsAsyncNew());
    }, []);

    //  Redux
    // const state = useSelector(state=>state) as any    
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(GetAllContactsAsync() as any)
    // }, [dispatch])

    // Context
    // const {dispatch,state} = useContext(AppContext)
    // const fetchContacts = useCallback(async () => {
    //     const response = await AXIOS.get<any, AxiosResponse<Contacts[]>>(ApiRoutes.GetContacts)
    //     if (response.status == 200)
    //         dispatch({ type: ContactActionTypes.Get_All_Contacts, payload: response.data })
    // }, [dispatch])

    // useEffect(() => {
    //     fetchContacts()
    // }, [dispatch])

    return (

        state.contacts.searchlist.length == 0 ? state.contacts.contactslist.length === 0 ? <div>هنوز چتی وجود ندارد.</div> :
            <>
                {
                    state.contacts.contactslist.map((item: any) => <ChatItem
                        key={item.id} name={item.name} avatar={item.avatar} lastMessage={item.lastMessage} time={item.lastMessageSent} roomId={item.roomId} />)
                }
            </> :
            <>
                {
                    state.contacts.searchlist.map((item: any) => <ChatItem
                        key={item.id} name={item.name} avatar={item.avatar} lastMessage={item.lastMessage} time={item.lastMessageSent} roomId={item.roomId} />)
                }
            </>

    )

}