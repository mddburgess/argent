import {createSlice} from "@reduxjs/toolkit";

interface EditingState {
    ledgerEntry?: number
}

export const editingSlice = createSlice({
    name: "editing",
    initialState: {} as EditingState,
    reducers: {
        setLedgerEntry: (state, action) => {
            state.ledgerEntry = action.payload;
        },
        reset: (state) => {
            state.ledgerEntry = undefined;
        }
    }
})

export const editingActions = editingSlice.actions;
