import { configureStore } from '@reduxjs/toolkit'
import dataReducer from "./slices/paramsSlice";
import audioReducer from "./slices/audioSlice";
import { dataListApi } from '../services/dataList';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    audio: audioReducer,
    [dataListApi.reducerPath] : dataListApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataListApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>