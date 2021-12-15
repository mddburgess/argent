import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {LedgerEntry} from "types/LedgerEntry";
import {ApplicationInfo} from "types/ApplicationInfo";
import {Ledger} from "types/Ledger";

const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "/api"}),
    tagTypes: ["application", "ledger"],
    endpoints: (builder) => ({
        listLedgers: builder.query<Ledger[], void>({
            query: () => "ledgers",
            providesTags: [{type: "ledger", id: "root"}]
        }),
        retrieveLedger: builder.query<Ledger, number>({
            query: (ledgerId) => `ledgers/${ledgerId}`,
            providesTags: [{type: "ledger", id: "ledgerId"}]
        }),
        createLedgerEntry: builder.mutation<LedgerEntry, Partial<LedgerEntry>>({
            query: (ledgerEntry) => ({
                url: "ledger",
                method: "POST",
                body: ledgerEntry
            }),
            invalidatesTags: [{type: "ledger", id: "list"}]
        }),
        updateLedgerEntry: builder.mutation<LedgerEntry, Partial<LedgerEntry>>({
            query: (ledgerEntry) => ({
                url: `ledger/${ledgerEntry.id}`,
                method: "PUT",
                body: ledgerEntry
            }),
            invalidatesTags: (result, error, {id}) => [{type: "ledger", id}]
        }),
        deleteLedgerEntry: builder.mutation<void, Partial<LedgerEntry>>({
            query: (ledgerEntry) => ({
                url: `ledger/${ledgerEntry.id}`,
                method: "DELETE"
            }),
            invalidatesTags: (result, error, {id}) => [{type: "ledger", id}]
        }),
        getApplicationInfo: builder.query<ApplicationInfo, void>({
            query: () => "application/info",
            providesTags: [{type: "application", id: "info"}]
        })
    })
})

export default api;
