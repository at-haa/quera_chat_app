import { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
import { AXIOS } from "../../../../config/axios.config";
import { ApiRoutes } from "../../../../constants/api.route";
import { ChatItem } from "./ChatItem"

interface ChatListProps extends React.PropsWithChildren {

}
export const ChatList: React.FunctionComponent<ChatListProps> = ({ children }): JSX.Element => {
    const [contacts, setContacts] = useState<Contacts[]>([])
    const fetchContacts = useCallback(async () => {
        const response = await AXIOS.get<any, AxiosResponse<Contacts[]>>(ApiRoutes.GetContacts)
        if (response.status == 200)
            setContacts(response.data)
    }, [])

    useEffect(() => {
        fetchContacts()
    }, [])

    return (contacts.length === 0 ? <div>هنوز چتی وجود ندارد.</div> :
        <>
            {
                contacts.map((item) => <ChatItem
                    key={item.id} name={item.name} avatar={item.avatar} lastMessage={item.lastMessage} time={item.lastMessageSent} />)
            }
        </>
    )
}