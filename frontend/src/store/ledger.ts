import {createSlice} from "@reduxjs/toolkit";

interface LedgerSlice {
    selected?: number;
}

export const ledgerSlice = createSlice({
    name: "ledger",
    initialState: {} as LedgerSlice,
    reducers: {
        setSelected: (state, action) => {
            state.selected = action.payload;
        }
    }
});

export const ledgerActions = ledgerSlice.actions;
