import {configureStore} from "@reduxjs/toolkit";
import api from "api";
import {editingSlice} from "store/editing";

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [editingSlice.name]: editingSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});

export default store;
