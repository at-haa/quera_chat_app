interface MessageItemProps extends React.PropsWithChildren {
    type?: "sender" | "reciever",
    text:string
}
export const MessageItem: React.FunctionComponent<MessageItemProps> = ({ type = "sender",text }): JSX.Element => {
    switch (type) {
        case "sender":
            return (
                <li className="flex">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="" className=" rounded-full w-[50px] h-[50px] overflow-hidden" />
                    <div className=" p-2 w-[250px] rounded-lg shadow-md mr-2 bg-white">
                        <h4 className="font-bold text-md">آتوسا حواصلی</h4>
                        <p className="text-sm">{text}</p>
                    </div>
                </li>
            )

        case "reciever":
            return (
                <li className="flex justify-end">
                    <div className=" p-2 w-[250px] rounded-lg shadow-md ml-2 bg-blue-500">
                        <h4 className="font-bold text-md">آتوسا حواصلی</h4>
                        <p className="text-sm">{text}</p>
                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="" className=" rounded-full w-[50px] h-[50px] overflow-hidden" />
                </li>
            )
    }

}