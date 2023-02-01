import { Input } from "../../../Base/Forms/Input"

interface SearchBarProps extends React.PropsWithChildren {

}
export const SearchBar: React.FunctionComponent<SearchBarProps> = ({ children }): JSX.Element => {
    return (
        <div className="p-2 border-[1px] border-gray-100">
            <Input placeholder="جستجو ..."/>
        </div>
    )
}