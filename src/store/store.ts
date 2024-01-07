import { configureStore } from '@reduxjs/toolkit'
import dataReducer from "./slices/paramsSlice";
import { dataListApi } from '../api/dataList';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    [dataListApi.reducerPath] : dataListApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataListApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>