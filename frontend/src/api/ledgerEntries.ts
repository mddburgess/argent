import api from "api/index";
import LedgerEntry from "types/LedgerEntry";

const ledgerEntriesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createLedgerEntry: builder.mutation<LedgerEntry, Partial<LedgerEntry>>({
            query: (ledgerEntry) => ({
                url: "ledgers/1/entries",
                method: "POST",
                body: ledgerEntry
            }),
            invalidatesTags: [{type: "ledgers"}]
        }),
        updateLedgerEntry: builder.mutation<LedgerEntry, Partial<LedgerEntry>>({
            query: (ledgerEntry) => ({
                url: `ledgers/1/entries/${ledgerEntry.id}`,
                method: "PUT",
                body: ledgerEntry
            }),
            invalidatesTags: [{type: "ledgers"}]
        }),
        deleteLedgerEntry: builder.mutation<void, Partial<LedgerEntry>>({
            query: (ledgerEntry) => ({
                url: `ledgers/1/entries/${ledgerEntry.id}`,
                method: "DELETE"
            }),
            invalidatesTags: [{type: "ledgers"}]
        })
    })
});

export const {
    useCreateLedgerEntryMutation,
    useUpdateLedgerEntryMutation,
    useDeleteLedgerEntryMutation
} = ledgerEntriesApi;
