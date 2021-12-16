import api from "api/index";
import {Ledger} from "types/Ledger";

const ledgersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        listLedgers: builder.query<Ledger[], void>({
            query: () => "ledgers",
            providesTags: [{type: "ledgers", id: "LIST"}]
        }),
        retrieveLedger: builder.query<Ledger, number>({
            query: (ledgerId) => `ledgers/${ledgerId}`,
            providesTags: (result, error, id) => [{type: "ledgers", id}]
        })
    })
});

export const {useListLedgersQuery, useRetrieveLedgerQuery} = ledgersApi;
