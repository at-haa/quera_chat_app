interface ChatHeaderProps extends React.PropsWithChildren {

}
export const ChatHeader: React.FunctionComponent<ChatHeaderProps> = ({ children }): JSX.Element => {
    return (
        <div className="flex flex-col py-2 pr-3">
            <h1 className="font-bolc">گروه فرانت‌آموزان کوئرا</h1>
            <h3 className="text-xs">230 نفر، 28 نفر آنلاین</h3>
        </div>
    )
}