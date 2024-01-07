import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { QueryParams } from "../types/types";

const url = "https://api.skilla.ru/mango/getList";
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
    getDataList: builder.query({
      query: (params: QueryParams) => ({
        url: `?${params}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetDataListQuery } = dataListApi;
