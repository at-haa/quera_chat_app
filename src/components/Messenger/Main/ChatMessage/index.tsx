import { useContext, useEffect, useRef } from "react"
import { AppContext } from "../../../../context/store"
import { MessageItem } from "./MessageItem"

interface ChatMessageProps extends React.PropsWithChildren {

}
export const ChatMessage: React.FunctionComponent<ChatMessageProps> = ({ children }): JSX.Element => {
    const messages = useContext(AppContext).state.messages
    const ref = useRef<any>()
    useEffect(() => {
        ref.current.scrollIntoView({behavior:"smooth"})
    }, [messages.MessageList.length,messages.roomId])
    return (
        <ul className="h-[calc(100%-48px)] w-full bg-no-repeat bg-center bg-cover flex flex-col p-10 [&_li]:my-5 overflow-y-auto" style={{
            background: "url('https://wallpapercave.com/wp/wp4410743.png')",
        }}>
            {
                messages.MessageList.map((message) => <MessageItem key={message.id} text={message.value} type={message.isSentByOwner ? "sender" : "reciever"} />)
            }
            <li ref={ref} />
        </ul>
    )
}