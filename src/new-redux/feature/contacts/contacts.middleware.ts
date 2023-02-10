import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Contacts } from "../../../@Types/api.types";
import { AXIOS } from "../../../config/axios.config";
import { ApiRoutes } from "../../../constants/api.route";

export const GetAllContactsAsyncNew = createAsyncThunk(
    "getallcontacts",
    async () => {
        const response = await AXIOS.get<any, AxiosResponse<Contacts[]>>(
            ApiRoutes.GetContacts
        );
        return response.data;
    }
);