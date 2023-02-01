interface ChatItemProps extends React.PropsWithChildren {

}
export const ChatItem: React.FunctionComponent<ChatItemProps> = ({ children }): JSX.Element => {
    return (
        <div className="flex cursor-pointer ease-in duration-200 hover:bg-blue-300 p-2">
            <div className="w-full">
                <div className="flex justify-between items-center">
                    <h6 className="text-sm font-semibold">۷:۱۵ عصر</h6>
                    <h4 className="text-md font-bold ml-2">آتوسا حواصلی</h4>
                </div>
                <h5 className="text-xs mt-1">سلام چطوری؟</h5>
            </div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="" className="rounded-full bg-black w-[50px] h-[50px] overflow-hidden" />
        </div>
    )
}