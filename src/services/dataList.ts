import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { queryDataT } from "../types/types";

export const dataListApi = createApi({
  reducerPath: "dataListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_FETCH_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${import.meta.env.VITE_TEST_TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getDataList: builder.query<any, queryDataT>({
      query: (params) => ({
        url: `/getList`,
        method: "POST",
        params: params,
      }),
    }),
    
  }),
});

export const { useGetDataListQuery } = dataListApi;
