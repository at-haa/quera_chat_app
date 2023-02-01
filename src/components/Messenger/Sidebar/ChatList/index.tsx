import { ChatItem } from "./ChatItem"

interface ChatListProps extends React.PropsWithChildren {

}
export const ChatList: React.FunctionComponent<ChatListProps> = ({ children }): JSX.Element => {
    return (
        <>
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
        </>
    )
}