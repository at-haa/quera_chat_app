import { AxiosResponse } from "axios";
import { Contacts } from "../../@Types/api.types";
import { ContactActionTypes } from "../../@Types/context/context.type";

import { AXIOS } from "../../config/axios.config";
import { ApiRoutes } from "../../constants/api.route";


export const GetAllContacts = (contacts: any) => ({
    type: ContactActionTypes.Get_All_Contacts,
    contacts,
});

export const GetAllContactsAsync =
    () => async (dispatch: any, getState: any) => {
        const response = await AXIOS.get<any, AxiosResponse<Contacts[]>>(
            ApiRoutes.GetContacts
        );
        if (response.status === 200) {
            console.log(response.data);
            
            dispatch(GetAllContacts(response.data));
        }
    };