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
        }),
        createLedgerEntry: builder.mutation<LedgerEntry, Partial<LedgerEntry>>({
            query: (ledgerEntry) => ({
                url: "ledger",
                method: "POST",
                body: ledgerEntry
            }),
            invalidatesTags: [{type: "ledger", id: "list"}]
        })
    })
})

export default api;
