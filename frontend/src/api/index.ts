import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "/api"}),
    tagTypes: [
        "application",
        "ledgers"
    ],
    endpoints: () => ({})
});

export default api;
