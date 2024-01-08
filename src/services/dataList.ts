import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetAudioParams, queryDataT } from "../types/types";

const url = "https://api.skilla.ru/mango";
const token = "testtoken";

export const dataListApi = createApi({
  reducerPath: "dataListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${token}`);
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
