import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ParamsStateType } from "../../types/types";

const initialState: ParamsStateType = {
  period: "3 дня",
  callType: "Все типы",
  sortBy: "date",
  order: "DESC",
};

export const paramsSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPeriod: (state, action: PayloadAction<ParamsStateType["period"]>) => {
      state.period = action.payload;
    },
    setCallType: (
      state,
      action: PayloadAction<ParamsStateType["callType"]>
    ) => {
      state.callType = action.payload;
    },
    resetCallType: (state) => {
      state.callType = "Все типы";
    },
    setSortBy: (state, action: PayloadAction<ParamsStateType["sortBy"]>) => {
      state.sortBy = action.payload;
    },
    setOrder: (state, action: PayloadAction<ParamsStateType["order"]>) => {
      state.order = action.payload;
    },
    toggleOrder: (state) => {
      state.order = state.order === "ASC" ? "DESC" : "ASC";
    },
  },
});

export const {
  setPeriod,
  setCallType,
  setSortBy,
  toggleOrder,
  resetCallType,
  setOrder,
} = paramsSlice.actions;

export default paramsSlice.reducer;
