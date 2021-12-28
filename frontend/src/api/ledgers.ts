import api from "api/index";
import Ledger from "types/Ledger";

const ledgersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        listLedgers: builder.query<Ledger[], void>({
            query: () => "ledgers",
            providesTags: [{type: "ledgers", id: "LIST"}]
        }),
        createLedger: builder.mutation<Ledger, Partial<Ledger>>({
            query: (ledger) => ({
                url: "ledgers",
                method: "POST",
                body: ledger
            }),
            invalidatesTags: [{type: "ledgers", id: "LIST"}]
        }),
        updateLedger: builder.mutation<Ledger, Partial<Ledger>>({
            query: (ledger) => ({
                url: `ledgers/${ledger.id}`,
                method: "PUT",
                body: ledger
            }),
            invalidatesTags: [{type: "ledgers", id: "LIST"}]
        }),
        deleteLedger: builder.mutation<Ledger, number>({
            query: (ledgerId) => ({
                url: `ledgers/${ledgerId}`,
                method: "DELETE"
            }),
            invalidatesTags: [{type: "ledgers", id: "LIST"}]
        })
    })
});

export const {
    useListLedgersQuery,
    useCreateLedgerMutation,
    useUpdateLedgerMutation,
    useDeleteLedgerMutation
} = ledgersApi;
