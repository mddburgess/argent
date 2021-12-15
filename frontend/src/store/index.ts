import {configureStore} from "@reduxjs/toolkit";
import api from "api";
import {editingSlice} from "store/editing";
import {ledgerSlice} from "store/ledger";

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [editingSlice.name]: editingSlice.reducer,
        [ledgerSlice.name]: ledgerSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});

export default store;
