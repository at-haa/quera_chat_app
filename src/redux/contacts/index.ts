import { ConatactListState, ContactActionTypes } from "../../@Types/context/context.type";

const IntialState: ConatactListState = {
    searchlist: [],
    contactslist: [],
};
export const ContactsReducer = (
    state: any = IntialState,
    action: any
): ConatactListState => {
    switch (action.type) {
        case ContactActionTypes.Get_All_Contacts:
            return { ...state, contactslist: action.contacts };
        case ContactActionTypes.Search_All_Contacts:
            const filterContacts = state.contactsList.filter((n: any) =>
                n.name.includes(action.payload)
            );
            return { ...state, searchList: filterContacts };
        default:
            return state;
    }
};