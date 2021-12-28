import api from "api/index";
import Account from "types/Account";

const accountsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        listAccounts: builder.query<Account[], void>({
            query: () => "accounts",
            providesTags: [{type: "accounts", id: "LIST"}]
        })
    })
});

export const {
    useListAccountsQuery
} = accountsApi;
