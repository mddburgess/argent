import {createSlice} from "@reduxjs/toolkit";

interface LedgerSlice {
    selected?: number;
    editing?: number;
}

export const ledgerSlice = createSlice({
    name: "ledger",
    initialState: {} as LedgerSlice,
    reducers: {
        select: (state, action) => {
            state.selected = action.payload;
        },
        edit: (state, action) => {
            state.editing = action.payload;
        }
    }
});

export const ledgerActions = ledgerSlice.actions;
