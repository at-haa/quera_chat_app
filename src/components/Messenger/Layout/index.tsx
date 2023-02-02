import { ChatHeader } from "../Main/ChatHeader"
import { ChatMessage } from "../Main/ChatMessage"
import { ChatPreview } from "../Main/ChatPreview"
import { ChatSender } from "../Main/ChatSender"
import { ChatList } from "../Sidebar/ChatList"
import { SearchBar } from "../Sidebar/SearchBar"

interface MessengerLayoutProps extends React.PropsWithChildren {

}
export const MessengerLayout: React.FunctionComponent<MessengerLayoutProps> = ({ children }): JSX.Element => {
    return (
        <div className="flex bg-white h-full rounded-lg max-w-7xl mx-auto">
            <div className="flex-1">
                <div className="flex flex-col h-full">
                {/* <ChatHeader /> */}
                <ChatPreview/>
                {/* <ChatMessage /> */}
                {/* <ChatSender /> */}
                </div>
            </div>
            <div className="flex-[0_0_350px] flex-col">
                <SearchBar />
                <div className="flex flex-col overflow-y-auto h-[calc(100%-48px)] border-[1px]">
                    <ChatList />
                </div>
            </div>
        </div>
    )
}
