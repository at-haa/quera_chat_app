import { useContext } from "react"
import { AppContext } from "../../../../context/store"
import { Input } from "../../../Base/Forms/Input"

interface SearchBarProps extends React.PropsWithChildren {

}
export const SearchBar: React.FunctionComponent<SearchBarProps> = ({ children }): JSX.Element => {
    const state = useContext(AppContext).state
    const setSearch = useContext(AppContext).setSearch
    const handleFilter = (e:any)=>{
        const filterContacts = state.filter(n=>n.name.includes(e.target.value))
        setSearch(filterContacts)
        
    }
    return (
        <div className="p-2 border-[1px] border-gray-100">
            <Input placeholder="جستجو ..." onChange={handleFilter}/>
        </div>
    )
}