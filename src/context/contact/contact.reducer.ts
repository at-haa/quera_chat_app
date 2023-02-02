import { ContactActionTypes, ContactState, ContextAction } from "../../@Types/context/context.type"

export const ContactReducer = (state: ContactState[], action: ContextAction<ContactActionTypes, any>) => {
    switch (action.type) {

        case ContactActionTypes.Get_All_Contacts:
            return action.payload

        default:
            return state
    }

}