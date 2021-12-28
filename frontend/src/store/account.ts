import {createSlice} from "@reduxjs/toolkit";

interface AccountSlice {
    selected?: number;
}

export const accountSlice = createSlice({
    name: "account",
    initialState: {} as AccountSlice,
    reducers: {
        select: (state, action) => {
            state.selected = action.payload;
        }
    }
});

export const accountActions = accountSlice.actions;
