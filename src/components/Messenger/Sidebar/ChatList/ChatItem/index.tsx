interface ChatItemProps extends React.PropsWithChildren {
    name: string,
    time: string,
    lastMessage: string,
    avatar: string
}
export const ChatItem: React.FunctionComponent<ChatItemProps> = ({ name, time, lastMessage, avatar }): JSX.Element => {
    return (
        <div className="flex cursor-pointer ease-in duration-200 hover:bg-blue-300 p-2">
            <div className="w-full">
                <div className="flex justify-between items-center">
                    <h6 className="text-sm font-semibold">{new Date(time).toLocaleDateString("fa-ir")}</h6>
                    <h4 className="text-md font-bold ml-2">{name}</h4>
                </div>
                <h5 className="text-xs mt-1">{lastMessage}</h5>
            </div>
            <img src={avatar} alt="" className="rounded-full bg-black w-[50px] h-[50px] overflow-hidden" />
        </div>
    )
}