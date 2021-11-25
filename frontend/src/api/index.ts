import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import type {LedgerEntry} from "types/LedgerEntry";

const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "/api"}),
    tagTypes: ["ledger"],
    endpoints: (builder) => ({
        listLedger: builder.query<LedgerEntry[], void>({
            query: () => "ledger",
            providesTags: (result) => [
                {type: "ledger", id: "list"},
                ...(result?.map(({id}) => ({type: "ledger" as const, id})) ?? [])
            ]
        })
    })
})

export default api;
