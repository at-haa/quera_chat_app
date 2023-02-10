import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ConatactListState } from "../../../@Types/context/context.type"; 
import { GetAllContactsAsyncNew } from "./contacts.middleware";

const IntialState: ConatactListState = {
  searchlist: [],
  contactslist: [],
};

const contactSlice = createSlice({
  initialState: IntialState,
  name: "contacts",
  reducers: {
    GetAllContacts: (state, action) => {
        console.log("here");
        
      state.contactslist = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetAllContactsAsyncNew.pending, (state, action: any) => {
        console.log("unja");
        // state.isLoading = true;
      })
      .addCase(GetAllContactsAsyncNew.fulfilled, (state, action: any) => {
        console.log("inja");
        state.contactslist = action.payload;
        // state.isLoading = false;
      })
      .addCase(GetAllContactsAsyncNew.rejected, (state, action: any) => {
        // state.isLoading = false;
      });
  },
});

export const { GetAllContacts } = contactSlice.actions;

export default contactSlice.reducer;
