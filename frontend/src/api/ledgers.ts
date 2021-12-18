import api from "api/index";
import {Ledger} from "types/Ledger";

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
        })
    })
});

export const {useListLedgersQuery, useCreateLedgerMutation} = ledgersApi;
