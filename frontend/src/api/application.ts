import api from "api/index";
import {ApplicationInfo} from "types/ApplicationInfo";

const applicationApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getApplicationInfo: builder.query<ApplicationInfo, void>({
            query: () => "application/info",
            providesTags: [{type: "application", id: "info"}]
        })
    })
});

export const {useGetApplicationInfoQuery} = applicationApi;
